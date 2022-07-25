import 'source-map-support/register';
import express, { Router } from 'express';
import snakecaseKeys from 'snakecase-keys';
import mapKeys from 'lodash/mapKeys';
import { getUser, listUsers, allUsers } from './clients/user';

const app = express();
const router = Router();

app.use(express.json());
app.use('/api/v1', router);

router.get('/user/:id', async (req, res) => {
	try {
		const response = await getUser(req.params.id);
		res.status(200).json(snakecaseKeys(response.toObject(), { deep: true }));
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: error.message });
	}
});

router.get('/users', async (req, res) => {
	const { limit, offset } = req.query;

	try {
		const response = await listUsers(limit, offset);
		res.status(200).json(
			snakecaseKeys(
				mapKeys(response.toObject(), (value, key) => {
					if (key === 'usersList') return 'users';
					return key;
				}),
				{ deep: true }
			)
		);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: error.message });
	}
});

router.get('/allusers', async (req, res) => {
	try {
		const response = await allUsers();
		res.status(200).json(
			snakecaseKeys(
				mapKeys(response.toObject(), (value, key) => {
					if (key === 'usersList') return 'users';
					return key;
				}),
				{ deep: true }
			)
		);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: error.message });
	}
});
app.listen(3000, () => console.log('listening on port 3000!'));
