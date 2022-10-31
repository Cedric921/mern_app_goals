import { BACKEND_API } from '../../config/keys';
import axios from 'axios';

const register = async (userData) => {
	console.log(userData);
	// const res = await axios.post(`${BACKEND_API}/api/users`, userData);
	const res = axios.post(`${BACKEND_API}/api/users`, userData);
	console.log(res.data && res.data);
	if (res.data) localStorage.setItem('user', JSON.stringify(res.data.token));

	return res.data;
};

const authService = { register };

export default authService;
