// source: user.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
goog.object.extend(proto, google_protobuf_empty_pb);
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
goog.object.extend(proto, google_protobuf_wrappers_pb);
goog.exportSymbol('proto.user.GetUserRequest', null, global);
goog.exportSymbol('proto.user.GetUserResponse', null, global);
goog.exportSymbol('proto.user.ListUsersRequest', null, global);
goog.exportSymbol('proto.user.ListUsersResponse', null, global);
goog.exportSymbol('proto.user.UserInfo', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.user.GetUserRequest = function (opt_data) {
	jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.user.GetUserRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
	/**
	 * @public
	 * @override
	 */
	proto.user.GetUserRequest.displayName = 'proto.user.GetUserRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.user.GetUserResponse = function (opt_data) {
	jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.user.GetUserResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
	/**
	 * @public
	 * @override
	 */
	proto.user.GetUserResponse.displayName = 'proto.user.GetUserResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.user.ListUsersRequest = function (opt_data) {
	jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.user.ListUsersRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
	/**
	 * @public
	 * @override
	 */
	proto.user.ListUsersRequest.displayName = 'proto.user.ListUsersRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.user.ListUsersResponse = function (opt_data) {
	jspb.Message.initialize(
		this,
		opt_data,
		0,
		-1,
		proto.user.ListUsersResponse.repeatedFields_,
		null
	);
};
goog.inherits(proto.user.ListUsersResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
	/**
	 * @public
	 * @override
	 */
	proto.user.ListUsersResponse.displayName = 'proto.user.ListUsersResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.user.UserInfo = function (opt_data) {
	jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.user.UserInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
	/**
	 * @public
	 * @override
	 */
	proto.user.UserInfo.displayName = 'proto.user.UserInfo';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
	/**
	 * Creates an object representation of this proto.
	 * Field names that are reserved in JavaScript and will be renamed to pb_name.
	 * Optional fields that are not set will be set to undefined.
	 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
	 * For the list of reserved names please see:
	 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
	 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
	 *     JSPB instance for transitional soy proto support:
	 *     http://goto/soy-param-migration
	 * @return {!Object}
	 */
	proto.user.GetUserRequest.prototype.toObject = function (
		opt_includeInstance
	) {
		return proto.user.GetUserRequest.toObject(opt_includeInstance, this);
	};

	/**
	 * Static version of the {@see toObject} method.
	 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
	 *     the JSPB instance for transitional soy proto support:
	 *     http://goto/soy-param-migration
	 * @param {!proto.user.GetUserRequest} msg The msg instance to transform.
	 * @return {!Object}
	 * @suppress {unusedLocalVariables} f is only used for nested messages
	 */
	proto.user.GetUserRequest.toObject = function (includeInstance, msg) {
		var f,
			obj = {
				id: jspb.Message.getFieldWithDefault(msg, 1, 0)
			};

		if (includeInstance) {
			obj.$jspbMessageInstance = msg;
		}
		return obj;
	};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.user.GetUserRequest}
 */
proto.user.GetUserRequest.deserializeBinary = function (bytes) {
	var reader = new jspb.BinaryReader(bytes);
	var msg = new proto.user.GetUserRequest();
	return proto.user.GetUserRequest.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.user.GetUserRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.user.GetUserRequest}
 */
proto.user.GetUserRequest.deserializeBinaryFromReader = function (msg, reader) {
	while (reader.nextField()) {
		if (reader.isEndGroup()) {
			break;
		}
		var field = reader.getFieldNumber();
		switch (field) {
			case 1:
				var value = /** @type {number} */ (reader.readInt32());
				msg.setId(value);
				break;
			default:
				reader.skipField();
				break;
		}
	}
	return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.user.GetUserRequest.prototype.serializeBinary = function () {
	var writer = new jspb.BinaryWriter();
	proto.user.GetUserRequest.serializeBinaryToWriter(this, writer);
	return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.user.GetUserRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.user.GetUserRequest.serializeBinaryToWriter = function (message, writer) {
	var f = undefined;
	f = message.getId();
	if (f !== 0) {
		writer.writeInt32(1, f);
	}
};

/**
 * optional int32 id = 1;
 * @return {number}
 */
proto.user.GetUserRequest.prototype.getId = function () {
	return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};

/**
 * @param {number} value
 * @return {!proto.user.GetUserRequest} returns this
 */
proto.user.GetUserRequest.prototype.setId = function (value) {
	return jspb.Message.setProto3IntField(this, 1, value);
};

if (jspb.Message.GENERATE_TO_OBJECT) {
	/**
	 * Creates an object representation of this proto.
	 * Field names that are reserved in JavaScript and will be renamed to pb_name.
	 * Optional fields that are not set will be set to undefined.
	 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
	 * For the list of reserved names please see:
	 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
	 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
	 *     JSPB instance for transitional soy proto support:
	 *     http://goto/soy-param-migration
	 * @return {!Object}
	 */
	proto.user.GetUserResponse.prototype.toObject = function (
		opt_includeInstance
	) {
		return proto.user.GetUserResponse.toObject(opt_includeInstance, this);
	};

	/**
	 * Static version of the {@see toObject} method.
	 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
	 *     the JSPB instance for transitional soy proto support:
	 *     http://goto/soy-param-migration
	 * @param {!proto.user.GetUserResponse} msg The msg instance to transform.
	 * @return {!Object}
	 * @suppress {unusedLocalVariables} f is only used for nested messages
	 */
	proto.user.GetUserResponse.toObject = function (includeInstance, msg) {
		var f,
			obj = {
				user:
					(f = msg.getUser()) &&
					proto.user.UserInfo.toObject(includeInstance, f)
			};

		if (includeInstance) {
			obj.$jspbMessageInstance = msg;
		}
		return obj;
	};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.user.GetUserResponse}
 */
proto.user.GetUserResponse.deserializeBinary = function (bytes) {
	var reader = new jspb.BinaryReader(bytes);
	var msg = new proto.user.GetUserResponse();
	return proto.user.GetUserResponse.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.user.GetUserResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.user.GetUserResponse}
 */
proto.user.GetUserResponse.deserializeBinaryFromReader = function (
	msg,
	reader
) {
	while (reader.nextField()) {
		if (reader.isEndGroup()) {
			break;
		}
		var field = reader.getFieldNumber();
		switch (field) {
			case 1:
				var value = new proto.user.UserInfo();
				reader.readMessage(
					value,
					proto.user.UserInfo.deserializeBinaryFromReader
				);
				msg.setUser(value);
				break;
			default:
				reader.skipField();
				break;
		}
	}
	return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.user.GetUserResponse.prototype.serializeBinary = function () {
	var writer = new jspb.BinaryWriter();
	proto.user.GetUserResponse.serializeBinaryToWriter(this, writer);
	return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.user.GetUserResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.user.GetUserResponse.serializeBinaryToWriter = function (
	message,
	writer
) {
	var f = undefined;
	f = message.getUser();
	if (f != null) {
		writer.writeMessage(1, f, proto.user.UserInfo.serializeBinaryToWriter);
	}
};

/**
 * optional UserInfo user = 1;
 * @return {?proto.user.UserInfo}
 */
proto.user.GetUserResponse.prototype.getUser = function () {
	return /** @type{?proto.user.UserInfo} */ (
		jspb.Message.getWrapperField(this, proto.user.UserInfo, 1)
	);
};

/**
 * @param {?proto.user.UserInfo|undefined} value
 * @return {!proto.user.GetUserResponse} returns this
 */
proto.user.GetUserResponse.prototype.setUser = function (value) {
	return jspb.Message.setWrapperField(this, 1, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.user.GetUserResponse} returns this
 */
proto.user.GetUserResponse.prototype.clearUser = function () {
	return this.setUser(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.user.GetUserResponse.prototype.hasUser = function () {
	return jspb.Message.getField(this, 1) != null;
};

if (jspb.Message.GENERATE_TO_OBJECT) {
	/**
	 * Creates an object representation of this proto.
	 * Field names that are reserved in JavaScript and will be renamed to pb_name.
	 * Optional fields that are not set will be set to undefined.
	 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
	 * For the list of reserved names please see:
	 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
	 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
	 *     JSPB instance for transitional soy proto support:
	 *     http://goto/soy-param-migration
	 * @return {!Object}
	 */
	proto.user.ListUsersRequest.prototype.toObject = function (
		opt_includeInstance
	) {
		return proto.user.ListUsersRequest.toObject(opt_includeInstance, this);
	};

	/**
	 * Static version of the {@see toObject} method.
	 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
	 *     the JSPB instance for transitional soy proto support:
	 *     http://goto/soy-param-migration
	 * @param {!proto.user.ListUsersRequest} msg The msg instance to transform.
	 * @return {!Object}
	 * @suppress {unusedLocalVariables} f is only used for nested messages
	 */
	proto.user.ListUsersRequest.toObject = function (includeInstance, msg) {
		var f,
			obj = {
				limit:
					(f = msg.getLimit()) &&
					google_protobuf_wrappers_pb.Int32Value.toObject(includeInstance, f),
				offset:
					(f = msg.getOffset()) &&
					google_protobuf_wrappers_pb.Int32Value.toObject(includeInstance, f)
			};

		if (includeInstance) {
			obj.$jspbMessageInstance = msg;
		}
		return obj;
	};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.user.ListUsersRequest}
 */
proto.user.ListUsersRequest.deserializeBinary = function (bytes) {
	var reader = new jspb.BinaryReader(bytes);
	var msg = new proto.user.ListUsersRequest();
	return proto.user.ListUsersRequest.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.user.ListUsersRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.user.ListUsersRequest}
 */
proto.user.ListUsersRequest.deserializeBinaryFromReader = function (
	msg,
	reader
) {
	while (reader.nextField()) {
		if (reader.isEndGroup()) {
			break;
		}
		var field = reader.getFieldNumber();
		switch (field) {
			case 1:
				var value = new google_protobuf_wrappers_pb.Int32Value();
				reader.readMessage(
					value,
					google_protobuf_wrappers_pb.Int32Value.deserializeBinaryFromReader
				);
				msg.setLimit(value);
				break;
			case 2:
				var value = new google_protobuf_wrappers_pb.Int32Value();
				reader.readMessage(
					value,
					google_protobuf_wrappers_pb.Int32Value.deserializeBinaryFromReader
				);
				msg.setOffset(value);
				break;
			default:
				reader.skipField();
				break;
		}
	}
	return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.user.ListUsersRequest.prototype.serializeBinary = function () {
	var writer = new jspb.BinaryWriter();
	proto.user.ListUsersRequest.serializeBinaryToWriter(this, writer);
	return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.user.ListUsersRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.user.ListUsersRequest.serializeBinaryToWriter = function (
	message,
	writer
) {
	var f = undefined;
	f = message.getLimit();
	if (f != null) {
		writer.writeMessage(
			1,
			f,
			google_protobuf_wrappers_pb.Int32Value.serializeBinaryToWriter
		);
	}
	f = message.getOffset();
	if (f != null) {
		writer.writeMessage(
			2,
			f,
			google_protobuf_wrappers_pb.Int32Value.serializeBinaryToWriter
		);
	}
};

/**
 * optional google.protobuf.Int32Value limit = 1;
 * @return {?proto.google.protobuf.Int32Value}
 */
proto.user.ListUsersRequest.prototype.getLimit = function () {
	return /** @type{?proto.google.protobuf.Int32Value} */ (
		jspb.Message.getWrapperField(
			this,
			google_protobuf_wrappers_pb.Int32Value,
			1
		)
	);
};

/**
 * @param {?proto.google.protobuf.Int32Value|undefined} value
 * @return {!proto.user.ListUsersRequest} returns this
 */
proto.user.ListUsersRequest.prototype.setLimit = function (value) {
	return jspb.Message.setWrapperField(this, 1, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.user.ListUsersRequest} returns this
 */
proto.user.ListUsersRequest.prototype.clearLimit = function () {
	return this.setLimit(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.user.ListUsersRequest.prototype.hasLimit = function () {
	return jspb.Message.getField(this, 1) != null;
};

/**
 * optional google.protobuf.Int32Value offset = 2;
 * @return {?proto.google.protobuf.Int32Value}
 */
proto.user.ListUsersRequest.prototype.getOffset = function () {
	return /** @type{?proto.google.protobuf.Int32Value} */ (
		jspb.Message.getWrapperField(
			this,
			google_protobuf_wrappers_pb.Int32Value,
			2
		)
	);
};

/**
 * @param {?proto.google.protobuf.Int32Value|undefined} value
 * @return {!proto.user.ListUsersRequest} returns this
 */
proto.user.ListUsersRequest.prototype.setOffset = function (value) {
	return jspb.Message.setWrapperField(this, 2, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.user.ListUsersRequest} returns this
 */
proto.user.ListUsersRequest.prototype.clearOffset = function () {
	return this.setOffset(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.user.ListUsersRequest.prototype.hasOffset = function () {
	return jspb.Message.getField(this, 2) != null;
};

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.user.ListUsersResponse.repeatedFields_ = [2];

if (jspb.Message.GENERATE_TO_OBJECT) {
	/**
	 * Creates an object representation of this proto.
	 * Field names that are reserved in JavaScript and will be renamed to pb_name.
	 * Optional fields that are not set will be set to undefined.
	 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
	 * For the list of reserved names please see:
	 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
	 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
	 *     JSPB instance for transitional soy proto support:
	 *     http://goto/soy-param-migration
	 * @return {!Object}
	 */
	proto.user.ListUsersResponse.prototype.toObject = function (
		opt_includeInstance
	) {
		return proto.user.ListUsersResponse.toObject(opt_includeInstance, this);
	};

	/**
	 * Static version of the {@see toObject} method.
	 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
	 *     the JSPB instance for transitional soy proto support:
	 *     http://goto/soy-param-migration
	 * @param {!proto.user.ListUsersResponse} msg The msg instance to transform.
	 * @return {!Object}
	 * @suppress {unusedLocalVariables} f is only used for nested messages
	 */
	proto.user.ListUsersResponse.toObject = function (includeInstance, msg) {
		var f,
			obj = {
				total: jspb.Message.getFieldWithDefault(msg, 1, 0),
				usersList: jspb.Message.toObjectList(
					msg.getUsersList(),
					proto.user.UserInfo.toObject,
					includeInstance
				)
			};

		if (includeInstance) {
			obj.$jspbMessageInstance = msg;
		}
		return obj;
	};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.user.ListUsersResponse}
 */
proto.user.ListUsersResponse.deserializeBinary = function (bytes) {
	var reader = new jspb.BinaryReader(bytes);
	var msg = new proto.user.ListUsersResponse();
	return proto.user.ListUsersResponse.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.user.ListUsersResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.user.ListUsersResponse}
 */
proto.user.ListUsersResponse.deserializeBinaryFromReader = function (
	msg,
	reader
) {
	while (reader.nextField()) {
		if (reader.isEndGroup()) {
			break;
		}
		var field = reader.getFieldNumber();
		switch (field) {
			case 1:
				var value = /** @type {number} */ (reader.readInt32());
				msg.setTotal(value);
				break;
			case 2:
				var value = new proto.user.UserInfo();
				reader.readMessage(
					value,
					proto.user.UserInfo.deserializeBinaryFromReader
				);
				msg.addUsers(value);
				break;
			default:
				reader.skipField();
				break;
		}
	}
	return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.user.ListUsersResponse.prototype.serializeBinary = function () {
	var writer = new jspb.BinaryWriter();
	proto.user.ListUsersResponse.serializeBinaryToWriter(this, writer);
	return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.user.ListUsersResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.user.ListUsersResponse.serializeBinaryToWriter = function (
	message,
	writer
) {
	var f = undefined;
	f = message.getTotal();
	if (f !== 0) {
		writer.writeInt32(1, f);
	}
	f = message.getUsersList();
	if (f.length > 0) {
		writer.writeRepeatedMessage(
			2,
			f,
			proto.user.UserInfo.serializeBinaryToWriter
		);
	}
};

/**
 * optional int32 total = 1;
 * @return {number}
 */
proto.user.ListUsersResponse.prototype.getTotal = function () {
	return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};

/**
 * @param {number} value
 * @return {!proto.user.ListUsersResponse} returns this
 */
proto.user.ListUsersResponse.prototype.setTotal = function (value) {
	return jspb.Message.setProto3IntField(this, 1, value);
};

/**
 * repeated UserInfo users = 2;
 * @return {!Array<!proto.user.UserInfo>}
 */
proto.user.ListUsersResponse.prototype.getUsersList = function () {
	return /** @type{!Array<!proto.user.UserInfo>} */ (
		jspb.Message.getRepeatedWrapperField(this, proto.user.UserInfo, 2)
	);
};

/**
 * @param {!Array<!proto.user.UserInfo>} value
 * @return {!proto.user.ListUsersResponse} returns this
 */
proto.user.ListUsersResponse.prototype.setUsersList = function (value) {
	return jspb.Message.setRepeatedWrapperField(this, 2, value);
};

/**
 * @param {!proto.user.UserInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.user.UserInfo}
 */
proto.user.ListUsersResponse.prototype.addUsers = function (
	opt_value,
	opt_index
) {
	return jspb.Message.addToRepeatedWrapperField(
		this,
		2,
		opt_value,
		proto.user.UserInfo,
		opt_index
	);
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.user.ListUsersResponse} returns this
 */
proto.user.ListUsersResponse.prototype.clearUsersList = function () {
	return this.setUsersList([]);
};

if (jspb.Message.GENERATE_TO_OBJECT) {
	/**
	 * Creates an object representation of this proto.
	 * Field names that are reserved in JavaScript and will be renamed to pb_name.
	 * Optional fields that are not set will be set to undefined.
	 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
	 * For the list of reserved names please see:
	 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
	 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
	 *     JSPB instance for transitional soy proto support:
	 *     http://goto/soy-param-migration
	 * @return {!Object}
	 */
	proto.user.UserInfo.prototype.toObject = function (opt_includeInstance) {
		return proto.user.UserInfo.toObject(opt_includeInstance, this);
	};

	/**
	 * Static version of the {@see toObject} method.
	 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
	 *     the JSPB instance for transitional soy proto support:
	 *     http://goto/soy-param-migration
	 * @param {!proto.user.UserInfo} msg The msg instance to transform.
	 * @return {!Object}
	 * @suppress {unusedLocalVariables} f is only used for nested messages
	 */
	proto.user.UserInfo.toObject = function (includeInstance, msg) {
		var f,
			obj = {
				id: jspb.Message.getFieldWithDefault(msg, 1, 0),
				email: jspb.Message.getFieldWithDefault(msg, 2, ''),
				fullName: jspb.Message.getFieldWithDefault(msg, 3, ''),
				createdAt: jspb.Message.getFieldWithDefault(msg, 4, 0),
				updatedAt: jspb.Message.getFieldWithDefault(msg, 5, 0)
			};

		if (includeInstance) {
			obj.$jspbMessageInstance = msg;
		}
		return obj;
	};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.user.UserInfo}
 */
proto.user.UserInfo.deserializeBinary = function (bytes) {
	var reader = new jspb.BinaryReader(bytes);
	var msg = new proto.user.UserInfo();
	return proto.user.UserInfo.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.user.UserInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.user.UserInfo}
 */
proto.user.UserInfo.deserializeBinaryFromReader = function (msg, reader) {
	while (reader.nextField()) {
		if (reader.isEndGroup()) {
			break;
		}
		var field = reader.getFieldNumber();
		switch (field) {
			case 1:
				var value = /** @type {number} */ (reader.readInt32());
				msg.setId(value);
				break;
			case 2:
				var value = /** @type {string} */ (reader.readString());
				msg.setEmail(value);
				break;
			case 3:
				var value = /** @type {string} */ (reader.readString());
				msg.setFullName(value);
				break;
			case 4:
				var value = /** @type {number} */ (reader.readInt64());
				msg.setCreatedAt(value);
				break;
			case 5:
				var value = /** @type {number} */ (reader.readInt64());
				msg.setUpdatedAt(value);
				break;
			default:
				reader.skipField();
				break;
		}
	}
	return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.user.UserInfo.prototype.serializeBinary = function () {
	var writer = new jspb.BinaryWriter();
	proto.user.UserInfo.serializeBinaryToWriter(this, writer);
	return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.user.UserInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.user.UserInfo.serializeBinaryToWriter = function (message, writer) {
	var f = undefined;
	f = message.getId();
	if (f !== 0) {
		writer.writeInt32(1, f);
	}
	f = message.getEmail();
	if (f.length > 0) {
		writer.writeString(2, f);
	}
	f = message.getFullName();
	if (f.length > 0) {
		writer.writeString(3, f);
	}
	f = message.getCreatedAt();
	if (f !== 0) {
		writer.writeInt64(4, f);
	}
	f = message.getUpdatedAt();
	if (f !== 0) {
		writer.writeInt64(5, f);
	}
};

/**
 * optional int32 id = 1;
 * @return {number}
 */
proto.user.UserInfo.prototype.getId = function () {
	return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};

/**
 * @param {number} value
 * @return {!proto.user.UserInfo} returns this
 */
proto.user.UserInfo.prototype.setId = function (value) {
	return jspb.Message.setProto3IntField(this, 1, value);
};

/**
 * optional string email = 2;
 * @return {string}
 */
proto.user.UserInfo.prototype.getEmail = function () {
	return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/**
 * @param {string} value
 * @return {!proto.user.UserInfo} returns this
 */
proto.user.UserInfo.prototype.setEmail = function (value) {
	return jspb.Message.setProto3StringField(this, 2, value);
};

/**
 * optional string full_name = 3;
 * @return {string}
 */
proto.user.UserInfo.prototype.getFullName = function () {
	return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ''));
};

/**
 * @param {string} value
 * @return {!proto.user.UserInfo} returns this
 */
proto.user.UserInfo.prototype.setFullName = function (value) {
	return jspb.Message.setProto3StringField(this, 3, value);
};

/**
 * optional int64 created_at = 4;
 * @return {number}
 */
proto.user.UserInfo.prototype.getCreatedAt = function () {
	return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};

/**
 * @param {number} value
 * @return {!proto.user.UserInfo} returns this
 */
proto.user.UserInfo.prototype.setCreatedAt = function (value) {
	return jspb.Message.setProto3IntField(this, 4, value);
};

/**
 * optional int64 updated_at = 5;
 * @return {number}
 */
proto.user.UserInfo.prototype.getUpdatedAt = function () {
	return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};

/**
 * @param {number} value
 * @return {!proto.user.UserInfo} returns this
 */
proto.user.UserInfo.prototype.setUpdatedAt = function (value) {
	return jspb.Message.setProto3IntField(this, 5, value);
};

goog.object.extend(exports, proto.user);
