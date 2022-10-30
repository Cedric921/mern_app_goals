import { useState } from 'react';

const Login = () => {
	const [user, setUser] = useState({
		email: '',
		password: '',
	});

	const handleChange = (e) => {
		setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(user);
	};
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

export default Login;
