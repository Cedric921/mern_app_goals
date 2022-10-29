import { useState } from 'react';

const Register = () => {
	const [user, setUser] = useState({
		name: '',
		email: '',
		password: '',
		password2: '',
	});
	return (
		<>
			<section className='heading'>
				<h1>Register</h1>
				<p>Please create an account</p>
			</section>
			<section className='form'>
				<form action=''>
					<input type='text' className='form-control' />
					<input type='text' className='form-control' />
					<input type='text' className='form-control' />
					<input type='text' className='form-control' />
					<button className='btn-control'>create</button>
				</form>
			</section>
		</>
	);
};

export default Register;
