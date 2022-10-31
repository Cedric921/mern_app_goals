import { BACKEND_API } from '../../config/keys';
import axios from 'axios';

const createGoal = async (goalData, token) => {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};

	const res = await axios.post(`${BACKEND_API}/api/goals`, goalData, config);

	return res.data;
};

const goalService = { createGoal };
export default goalService;
