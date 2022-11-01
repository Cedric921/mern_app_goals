import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteGoal, getGoals } from '../features/goal/goalSlice';

const GoalItem = ({ goal }) => {
	const dispatch = useDispatch();
	return (
		<div className='goal'>
			<div className='goal__date'>
				{new Date(goal.createdAt).toLocaleString()}
			</div>
			<h2>{goal.text}</h2>
			<button
				className='btn-delete'
				onClick={
					() => dispatch(deleteGoal(goal._id))
					// dispatch(getGoals())
				}
			>
				X
			</button>
		</div>
	);
};

export default GoalItem;
