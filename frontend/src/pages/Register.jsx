import { useState } from 'react';

const Register = () => {
	const [user, setUser] = useState({
		name: '',
		email: '',
		password: '',
		password2: '',
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
