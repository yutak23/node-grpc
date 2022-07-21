import 'source-map-support/register';
import express, { Router } from 'express';
import { getUser, listUsers } from './lib/user';

const app = express();
const router = Router();

app.use(express.json());
app.use('/api/v1', router);

router.get('/user/:id', async (req, res) => {
	try {
		const { user } = await getUser(req.params.id);
		res.status(200).json(user);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: error.message });
	}
});

router.get('/users', async (req, res) => {
	const { limit, offset } = req.query;

	try {
		const { total, users } = await listUsers(limit, offset);
		res.status(200).json({ total, users });
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: error.message });
	}
});

app.listen(3000, () => console.log('listening on port 3000!'));
