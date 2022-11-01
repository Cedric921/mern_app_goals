import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createGoal, getGoals } from '../features/goal/goalSlice';

const GoalForm = () => {
	const [text, setText] = useState('');
	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(createGoal({ text }));
		dispatch(getGoals());
		setText('');
	};
	return (
		<section className='form'>
			<form onSubmit={handleSubmit}>
				<div className='form-group'>
					<label htmlFor='text'>Goal</label>
					<input
						type='text'
						name='text'
						id='text'
						className='form-control'
						value={text}
						onChange={(e) => setText(e.target.value)}
					/>
				</div>
				<div className='form-group'>
					<button className='btn-control'>Add goal </button>
				</div>
			</form>
		</section>
	);
};

export default GoalForm;
