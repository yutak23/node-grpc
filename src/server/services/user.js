import * as grpc from '@grpc/grpc-js';
import { UserService } from '../../../pbs/user_grpc_pb';
import {
	UserInfo,
	GetUserResponse,
	ListUsersResponse
} from '../../../pbs/user_pb';

export default (server, dumyUsers) => {
	const getUser = (call, callback) => {
		const user = dumyUsers
			.filter((dumyUser) => dumyUser.id === call.request.getId())
			.shift();

		if (user) {
			const userInfo = new UserInfo();
			userInfo.setId(user.id);
			userInfo.setEmail(user.email);
			userInfo.setFullName(user.fullName);
			userInfo.setCreatedAt(user.createdAt);
			userInfo.setUpdatedAt(user.updatedAt);

			const reply = new GetUserResponse();
			reply.setUser(userInfo);

			return callback(null, reply);
		}

		return callback({
			code: grpc.status.NOT_FOUND,
			message: 'user not found'
		});
	};

	const listUsers = (call, callback) => {
		const limit = call.request.getLimit();
		const offset = call.request.getOffset();

		const reply = new ListUsersResponse();
		reply.setTotal(dumyUsers.length);

		const users = dumyUsers.slice(offset).slice(0, limit);
		users.forEach((user, index) => {
			const userInfo = new UserInfo();
			userInfo.setId(user.id);
			userInfo.setEmail(user.email);
			userInfo.setFullName(user.fullName);
			userInfo.setCreatedAt(user.createdAt);
			userInfo.setUpdatedAt(user.updatedAt);
			reply.addUsers(userInfo, index);
		});

		callback(null, reply);
	};

	const allUsers = (call, callback) => {
		const reply = new ListUsersResponse();
		reply.setTotal(dumyUsers.length);

		dumyUsers.forEach((user, index) => {
			const userInfo = new UserInfo([
				user.id,
				user.email,
				user.fullName,
				user.createdAt,
				user.updatedAt
			]);
			reply.addUsers(userInfo, index);
		});

		callback(null, reply);
	};

	server.addService(UserService, {
		getUser,
		listUsers,
		allUsers
	});
};
