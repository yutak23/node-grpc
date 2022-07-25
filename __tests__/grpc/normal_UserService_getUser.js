import * as grpc from '@grpc/grpc-js';
import { UserClient } from '../../pbs/user_grpc_pb';
import { GetUserRequest } from '../../pbs/user_pb';

describe('UserService getUser', () => {
	let client;

	beforeAll(() => {
		client = new UserClient('0.0.0.0:50051', grpc.credentials.createInsecure());
	});

	test('getUser with id = 1', async () => {
		const id = 1;
		const request = new GetUserRequest([id]);
		// request.setId(id); <- これと上記のnew GetUserRequestのコンストラクタ引数に配列（[id]）渡すのは同じ意味

		const result = await new Promise((resolve, reject) => {
			client.getUser(request, (err, response) => {
				if (err) reject(err);
				resolve(response);
			});
		});

		const { user } = result.toObject();
		expect(user).toHaveProperty('id', id);
		expect(user).toHaveProperty('email', expect.any(String));
		expect(user).toHaveProperty('fullName', expect.any(String));
		expect(user).toHaveProperty('createdAt', expect.any(Number));
		expect(user).toHaveProperty('updatedAt', expect.any(Number));
	});
});
