import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dasboard';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
	return (
		<>
			<div className='container'>
				<Routes>
					<Route path='/' element={<Dashboard />} />
					<Route path='/login' element={<Login />} />
					<Route path='/register' element={<Register />} />
				</Routes>
				<h1>My app</h1>
			</div>
		</>
	);
}

export default App;
