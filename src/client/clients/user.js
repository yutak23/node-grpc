import appRoot from 'app-root-path';
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';

const PROTO_PATH = appRoot.resolve('protos/user.proto');
const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
	keepCase: true,
	longs: String,
	enums: String,
	defaults: true,
	oneofs: true
});
const userProto = grpc.loadPackageDefinition(packageDefinition).user;

const client = new userProto.UserService(
	'0.0.0.0:50051',
	grpc.credentials.createInsecure()
);

const getUser = (id) =>
	new Promise((resolve, reject) => {
		client.getUser({ id }, (err, response) => {
			if (err) reject(err);
			resolve(response);
		});
	});

const listUsers = (limit, offset) =>
	new Promise((resolve, reject) => {
		client.listUsers({ limit, offset }, (err, response) => {
			if (err) reject(err);
			resolve(response);
		});
	});

export { getUser, listUsers };
