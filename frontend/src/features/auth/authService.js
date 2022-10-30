import { BACKEND_API } from '../../config/keys';

const register = async (userData) => {
	const res = await fetch(`${BACKEND_API}/api/users`, {
		headers: { cors: 'no-cors' },
		method: 'POST',
		body: JSON.stringify(userData),
	});
	const data = await res.json();
	if (data) localStorage.setItem('user', JSON.stringify(data.token));

	return data;
};

const authService = { register };

export default authService;
