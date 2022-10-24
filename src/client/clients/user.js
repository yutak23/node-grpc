import * as grpc from '@grpc/grpc-js';
import { Empty } from 'google-protobuf/google/protobuf/empty_pb';
import { UserClient } from '../../../pbs/user_grpc_pb';
import { GetUserRequest, ListUsersRequest } from '../../../pbs/user_pb';

const client = new UserClient(
	'0.0.0.0:50051',
	grpc.credentials.createInsecure()
);

const getUser = (id) => {
	const request = new GetUserRequest();
	request.setId(id);

	return new Promise((resolve, reject) => {
		client.getUser(request, (err, response) => {
			if (err) reject(err);
			resolve(response);
		});
	});
};

const listUsers = (limit, offset) => {
	const request = new ListUsersRequest();
	if (limit) request.setLimit(limit);
	if (offset) request.setOffset(offset);

	return new Promise((resolve, reject) => {
		client.listUsers(request, (err, response) => {
			if (err) reject(err);
			resolve(response);
		});
	});
};

const allUsers = () => {
	const request = new Empty();

	return new Promise((resolve, reject) => {
		client.allUsers(request, (err, response) => {
			if (err) reject(err);
			resolve(response);
		});
	});
};

export { getUser, listUsers, allUsers };
