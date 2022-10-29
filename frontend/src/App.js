import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Dashboard from './pages/Dasboard';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
	return (
		<>
			<div className=''>
				<Header />
				<div className='container'>
					<Routes>
						<Route path='/' element={<Dashboard />} />
						<Route path='/login' element={<Login />} />
						<Route path='/register' element={<Register />} />
					</Routes>
				</div>
			</div>
		</>
	);
}

export default App;
