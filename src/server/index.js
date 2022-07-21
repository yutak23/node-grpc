import 'source-map-support/register';
import fs from 'fs';
import camelcaseKeys from 'camelcase-keys';
import * as grpc from '@grpc/grpc-js';
import initService from './services/init-service';

// read json for local
const dumyUsers = camelcaseKeys(
	JSON.parse(fs.readFileSync('./db/user.json', 'utf8')),
	{ deep: true }
);

const server = new grpc.Server();

initService(server, dumyUsers);

server.bindAsync(
	'0.0.0.0:50051',
	grpc.ServerCredentials.createInsecure(),
	(e, port) => {
		if (e) console.error(e);

		server.start();
		console.log(`server start listing on port ${port}`);
	}
);
