import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const GoalForm = () => {
	const [text, setText] = useState('');
	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch();
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
