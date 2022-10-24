// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var user_pb = require('./user_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');

function serialize_google_protobuf_Empty(arg) {
	if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
		throw new Error('Expected argument of type google.protobuf.Empty');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
	return google_protobuf_empty_pb.Empty.deserializeBinary(
		new Uint8Array(buffer_arg)
	);
}

function serialize_user_GetUserRequest(arg) {
	if (!(arg instanceof user_pb.GetUserRequest)) {
		throw new Error('Expected argument of type user.GetUserRequest');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_user_GetUserRequest(buffer_arg) {
	return user_pb.GetUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_GetUserResponse(arg) {
	if (!(arg instanceof user_pb.GetUserResponse)) {
		throw new Error('Expected argument of type user.GetUserResponse');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_user_GetUserResponse(buffer_arg) {
	return user_pb.GetUserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_ListUsersRequest(arg) {
	if (!(arg instanceof user_pb.ListUsersRequest)) {
		throw new Error('Expected argument of type user.ListUsersRequest');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_user_ListUsersRequest(buffer_arg) {
	return user_pb.ListUsersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_ListUsersResponse(arg) {
	if (!(arg instanceof user_pb.ListUsersResponse)) {
		throw new Error('Expected argument of type user.ListUsersResponse');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_user_ListUsersResponse(buffer_arg) {
	return user_pb.ListUsersResponse.deserializeBinary(
		new Uint8Array(buffer_arg)
	);
}

var UserService = (exports.UserService = {
	getUser: {
		path: '/user.User/GetUser',
		requestStream: false,
		responseStream: false,
		requestType: user_pb.GetUserRequest,
		responseType: user_pb.GetUserResponse,
		requestSerialize: serialize_user_GetUserRequest,
		requestDeserialize: deserialize_user_GetUserRequest,
		responseSerialize: serialize_user_GetUserResponse,
		responseDeserialize: deserialize_user_GetUserResponse
	},
	listUsers: {
		path: '/user.User/ListUsers',
		requestStream: false,
		responseStream: false,
		requestType: user_pb.ListUsersRequest,
		responseType: user_pb.ListUsersResponse,
		requestSerialize: serialize_user_ListUsersRequest,
		requestDeserialize: deserialize_user_ListUsersRequest,
		responseSerialize: serialize_user_ListUsersResponse,
		responseDeserialize: deserialize_user_ListUsersResponse
	},
	allUsers: {
		path: '/user.User/AllUsers',
		requestStream: false,
		responseStream: false,
		requestType: google_protobuf_empty_pb.Empty,
		responseType: user_pb.ListUsersResponse,
		requestSerialize: serialize_google_protobuf_Empty,
		requestDeserialize: deserialize_google_protobuf_Empty,
		responseSerialize: serialize_user_ListUsersResponse,
		responseDeserialize: deserialize_user_ListUsersResponse
	}
});

exports.UserClient = grpc.makeGenericClientConstructor(UserService);
