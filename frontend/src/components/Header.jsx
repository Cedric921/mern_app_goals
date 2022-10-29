import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<header className='header'>
			<div className=' container-header'>
				<div className='log'>
					<Link to='/'>Goal setters</Link>
				</div>
				<ul className='links'>
					<li>
						<Link to='/login'>Login</Link>
					</li>
					<li>
						<Link to='/register'>Register</Link>
					</li>
				</ul>
			</div>
		</header>
	);
};

export default Header;
