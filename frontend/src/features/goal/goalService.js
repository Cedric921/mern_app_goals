import { BACKEND_API } from '../../config/keys';
import axios from 'axios';


// create goal
const createGoal = async (goalData, token) => {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};

	const res = await axios.post(`${BACKEND_API}/api/goals`, goalData, config);

	return res.data;
};

//  get goals
const getGoals = async (token) => {
   const config = {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		};

		const res = await axios.get(`${BACKEND_API}/api/goals`, config);

		return res.data;
}

const goalService = { createGoal, getGoals };
export default goalService;
