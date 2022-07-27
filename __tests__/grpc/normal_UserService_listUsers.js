import appRoot from 'app-root-path';
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';

describe('UserService listUsers', () => {
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

	test('listUsers with limit = 10 & offset = 0', async () => {
		const limit = 10;
		const offset = 0;

		const result = await new Promise((resolve, reject) => {
			client.listUsers({ limit, offset }, (err, response) => {
				if (err) return reject(err);
				return resolve(response);
			});
		});

		const { total, users } = result;
		expect(total).toBe(3);

		users.forEach((user) => {
			expect(user).toHaveProperty('id', expect.any(Number));
			expect(user).toHaveProperty('email', expect.any(String));
			expect(user).toHaveProperty('full_name', expect.any(String));
			expect(user).toHaveProperty('created_at', expect.any(String));
			expect(user).toHaveProperty('updated_at', expect.any(String));
		});
	});
});
