import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { login, reset } from '../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';

const Login = () => {
	const [userInput, setUserInput] = useState({
		email: '',
		password: '',
	});

	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { user, isLoading, isError, isSuccess, message } = useSelector(
		(state) => state.auth
	);

	useEffect(() => {
		if (isError) toast.error(message);
		if (isSuccess || user) navigate('/');
		dispatch(reset());
	}, [user, isLoading, isError, isSuccess, navigate, dispatch, message]);

	const handleChange = (e) => {
		setUserInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(login(userInput));
	};

	if (isLoading) <p>loading ...</p>;
	return (
		<>
			<section className='heading'>
				<h1>Login</h1>
				<p>Please login an accoun</p>
			</section>
			<section className='form'>
				<form onSubmit={handleSubmit}>
					<input
						name='email'
						type='email'
						className='form-control'
						placeholder='Enter your email'
						onChange={handleChange}
					/>
					<input
						name='password'
						type='password'
						className='form-control'
						placeholder='Enter passowrd'
						onChange={handleChange}
					/>

					<button className='btn-control'>login</button>
				</form>
			</section>
		</>
	);
};

export default React.memo(Login);
