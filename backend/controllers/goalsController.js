const asyncHandler = require('express-async-handler');
const Goal = require('../models/goalModel');

// @desc Get goals
// @routes GET /api/goals
// @access private
const getGoals = asyncHandler(async (req, res) => {
	const goals = await Goal.find();
	res.status(200).json(goals);
});

// @desc Set goals
// @routes POST /api/goals
// @access private
const setGoals = asyncHandler(async (req, res) => {
	if (!req.body.text) {
		res.status(404);

		throw new Error('Please add a text field');
	}

	const goal = await Goal.create({
		text: req.body.text,
	});
	res.status(201).json({ message: 'Set Goals  successfully', goal });
});

// @desc Update goals
// @routes PUT /api/goals/<;id
// @access private
const updateGoal = asyncHandler(async (req, res) => {
	const goal = await Goal.findById(req.params.id);

	if (!goal) {
		res.status(404);
		throw new Error(`Goal not found`);
	}

	const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
		new: true,
	});
	res.status(200).json(updatedGoal);
});

// @desc Delete goals
// @routes DELETE /api/goals/:id
// @access private
const deleteGoal = asyncHandler(async (req, res) => {
	const goal = await Goal.findById(req.params.id);

	if (!goal) {
		res.status(404);
		throw new Error(`Goal not found`);
	}

	await goal.remove();

	res.status(200).json({ id: req.params.id });
});

module.exports = {
	getGoals,
	setGoals,
	updateGoal,
	deleteGoal,
};
