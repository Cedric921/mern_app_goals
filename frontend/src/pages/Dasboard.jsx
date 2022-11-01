import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import GoalForm from '../components/GoalForm';
import { toast } from 'react-toastify';
import { reset, getGoals } from '../features/goal/goalSlice';
import GoalItem from '../components/GoalItem';

const Dashboard = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { user, isError : errorUser } = useSelector((state) => state.auth);
	const { goals, isError, isLoading, message } = useSelector(
		(state) => state.goals
	);

	console.log(goals);

	useEffect(() => {
		if (isError) toast.dark(message);
		if (!user || errorUser) navigate('/login');

		dispatch(getGoals());

		console.log('running ')

		return () => {
			dispatch(reset());
		};
	}, [user]);

	if (isLoading) <p>loading ...</p>;
	return (
		<>
			<section className='heading'>
				<h1>Welcome {user && user.name}</h1>
				<p>Goals dashboard</p>
			</section>

			<GoalForm />

			<section className='content'>
				{goals.length > 0 ? (
					<>
						{goals.map((goal) => (
							<GoalItem key={goal._id} goal={goal} />
						))}
					</>
				) : (
					<h3>No goal </h3>
				)}
			</section>
		</>
	);
};

export default React.memo(Dashboard);
