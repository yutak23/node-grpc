import appRoot from 'app-root-path';
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';

export default (server, dumyUsers) => {
	const getUser = (call, callback) => {
		const user = dumyUsers
			.filter((dumyUser) => dumyUser.id === call.request.id)
			.shift();

		if (user) return callback(null, { user });
		return callback({
			code: grpc.status.NOT_FOUND,
			message: 'user not found'
		});
	};

	const listUsers = (call, callback) => {
		const { limit, offset } = call.request;

		callback(null, {
			total: dumyUsers.length,
			users: dumyUsers.slice(offset).slice(0, limit)
		});
	};

	const PROTO_PATH = appRoot.resolve('src/protos/user.proto');
	const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
		keepCase: false,
		longs: String,
		enums: String,
		defaults: true,
		oneofs: true
	});
	const userProto = grpc.loadPackageDefinition(packageDefinition).user;

	server.addService(userProto.UserService.service, {
		getUser,
		listUsers
	});
};
