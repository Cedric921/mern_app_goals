const asyncHandler = require('express-async-handler');
const Goal = require('../models/goalModel');
const User = require('../models/userModel');


// @desc Get goals
// @routes GET /api/goals
// @access private
const getGoals = asyncHandler(async (req, res) => {
	const goals = await Goal.find({ user: req.user.id });
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
		user: req.user.id,
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

	//check if user is exist
	if (!req.user) {
		res.status(404);
		throw new Error(`User not found`);
	}

	//check if the user is the owner of the goal
	if (goal.user.toString() !== req.user.id) { 
		es.status(400);
		throw new Error(`Not authorized`);
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

	//check if user is exist
	if (!req.user) {
		res.status(404);
		throw new Error(`User not found`);
	}

	//check if the user is the owner of the goal
	if (goal.user.toString() !== req.user.id) {
		es.status(400);
		throw new Error(`Not authorized`);
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
