import * as assert from 'assert';
import addUserService from './user';

export default (server, dumyUsers) => {
	assert.ok(server, 'server must be required');
	assert.ok(dumyUsers, 'db client must be required'); // 今回はローカルのJSONファイルのデータそのもの

	addUserService(server, dumyUsers);
};
