import appRoot from 'app-root-path';
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';

describe('UserService getUser', () => {
	let client;

	beforeAll(() => {
		const PROTO_PATH = appRoot.resolve('protos/user.proto');
		const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
			keepCase: true,
			longs: String,
			enums: String,
			defaults: true,
			oneofs: true
		});
		const userProto = grpc.loadPackageDefinition(packageDefinition).user;

		client = new userProto.UserService(
			'0.0.0.0:50051',
			grpc.credentials.createInsecure()
		);
	});

	test('getUser with id = 1', async () => {
		const id = 1;

		const result = await new Promise((resolve, reject) => {
			client.getUser({ id }, (err, response) => {
				if (err) return reject(err);
				return resolve(response);
			});
		});

		const { user } = result;
		expect(user).toHaveProperty('id', id);
		expect(user).toHaveProperty('email', expect.any(String));
		expect(user).toHaveProperty('full_name', expect.any(String));
		expect(user).toHaveProperty('created_at', expect.any(String));
		expect(user).toHaveProperty('updated_at', expect.any(String));
	});
});
