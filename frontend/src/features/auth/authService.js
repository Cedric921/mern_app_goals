import { BACKEND_API } from '../../config/keys';
import axios from 'axios';

// register func
const register = async (userData) => {
	const res = await axios.post(`${BACKEND_API}/api/users`, userData);
	console.log(res);
	if (res.data) localStorage.setItem('user', JSON.stringify(res.data.token));

	return res.data;
};

const login = async (userData) => {
	const res = await axios.post(`${BACKEND_API}/api/users/login`, userData);
	console.log(res);
	if (res.data) localStorage.setItem('user', JSON.stringify(res.data.token));

	return res.data;
}

// logout func
const logout = async () => {
	localStorage.removeItem('user');
};

const authService = { register,login, logout };

export default authService;
