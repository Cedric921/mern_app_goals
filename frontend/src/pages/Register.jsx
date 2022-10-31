import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { register, reset } from '../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Register = () => {
	const [userInput, setUserInput] = useState({
		name: '',
		email: '',
		password: '',
		password2: '',
	});

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const { user, isLoading, isError, isSuccess, message } = useSelector(
		(state) => state.auth
	);


	useEffect(() => {
		if (isError) console.log(message);
		if (isSuccess || user) navigate('/');

		dispatch(reset());
	}, [user, isError, isSuccess, message, navigate, dispatch]);

	const handleChange = (e) => {
		setUserInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (userInput.password !== userInput.password2) {
			toast.error('password must match');
			return;
		} else {
			dispatch(register(userInput));
		}
	};

	if (isLoading) return <p>....loading</p>;
	return (
		<>
			<section className='heading'>
				<h1>Register</h1>
				<p>Please create an account</p>
			</section>
			<section className='form'>
				<form onSubmit={handleSubmit}>
					<input
						name='name'
						type='text'
						className='form-control'
						placeholder='Enter yourr name'
						onChange={handleChange}
					/>
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
					<input
						name='password2'
						type='password'
						className='form-control'
						placeholder='Confirm your password'
						onChange={handleChange}
					/>
					<button className='btn-control'>create</button>
				</form>
			</section>
		</>
	);
};

export default Register;
