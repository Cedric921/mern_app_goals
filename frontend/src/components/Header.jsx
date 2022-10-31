import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout, reset } from '../features/auth/authSlice';

const Header = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { user } = useSelector((state) => state.auth);

	const handleLogout = () => {
		dispatch(logout());
		dispatch(reset());
		navigate('/');
	};
	return (
		<header className='header'>
			<div className=' container-header'>
				<div className='log'>
					<Link to='/'>Goal setters</Link>
				</div>
				{!user ? (
					<ul className='links'>
						<>
							<li>
								<Link to='/login'>Login</Link>
							</li>
							<li>
								<Link to='/register'>Register</Link>
							</li>
						</>
					</ul>
				) : (
					<>
						<button onClick={handleLogout} className='logout-btn'>logout</button>
					</>
				)}
			</div>
		</header>
	);
};

export default Header;
