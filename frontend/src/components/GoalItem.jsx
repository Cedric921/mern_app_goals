import React from 'react';
import { useDispatch } from 'react-redux';

const GoalItem = ({ goal }) => {
   const dispatch = useDispatch()
	return (
		<div className='goal'>
			<div>{new Date(goal.createdAt).toLocaleString()}</div>
         <h2>{goal.text}</h2>
         {/* <button className="btn-delete" onClick={dispatch(deleteGoal(goal.id))}>X</button> */}
		</div>
	);
};

export default GoalItem;
