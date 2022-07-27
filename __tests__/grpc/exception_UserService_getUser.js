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

	test('getUser with id = 0', async () => {
		const id = 0;

		await expect(
			new Promise((resolve, reject) => {
				client.getUser({ id }, (err, response) => {
					if (err) return reject(err);
					return resolve(response);
				});
			})
		).rejects.toThrow('5 NOT_FOUND: user not found');
	});

	test('getUser with id = 0 with try-catch', async () => {
		const id = 0;

		let res;

		try {
			res = await new Promise((resolve, reject) => {
				client.getUser({ id }, (err, response) => {
					if (err) return reject(err);
					return resolve(response);
				});
			});
		} catch (e) {
			res = e;
		}

		expect(res).toHaveProperty('code', grpc.status.NOT_FOUND);
		expect(res).toHaveProperty('details', 'user not found');
		expect(res.metadata.get('key')).toEqual(expect.arrayContaining(['value']));
	});
});
