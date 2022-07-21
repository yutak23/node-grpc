import 'source-map-support/register';
import fs from 'fs';
import camelcaseKeys from 'camelcase-keys';
import path from 'path';
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';

// read json for local
const dumyUsers = camelcaseKeys(
	JSON.parse(fs.readFileSync('./db/user.json', 'utf8')),
	{ deep: true }
);

const PROTO_PATH = path.resolve(__dirname, '../src/protos/user.proto');
const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
	keepCase: false,
	longs: String,
	enums: String,
	defaults: true,
	oneofs: true
});
const userProto = grpc.loadPackageDefinition(packageDefinition).user;

const getUser = (call, callback) => {
	console.log(call.request);

	const user = dumyUsers
		.filter((dumyUser) => dumyUser.id === call.request.id)
		.shift();

	if (user) return callback(null, { user: { id: 1 } });
	return callback({
		code: grpc.status.NOT_FOUND,
		message: 'user not found'
	});
};

const listUsers = (call, callback) => {
	console.log(call.request);

	const { limit, offset } = call.request;

	callback(null, {
		total: dumyUsers.length,
		users: dumyUsers.slice(offset).slice(0, limit)
	});
};

const server = new grpc.Server();

server.addService(userProto.UserService.service, {
	getUser,
	listUsers
});
server.bindAsync(
	'0.0.0.0:50051',
	grpc.ServerCredentials.createInsecure(),
	(e, port) => {
		if (e) console.error(e);

		server.start();
		console.log(`server start listing on port ${port}`);
	}
);
