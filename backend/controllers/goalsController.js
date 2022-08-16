const asyncHandler = require('express-async-handler');

// @desc Get goals
// @routes GET /api/goals
// @access private
const getGoals = asyncHandler(async (req, res) => {
	res.status(200).json({ message: 'Get Goals  successfully' });
});

// @desc Set goals
// @routes POST /api/goals
// @access private
const setGoals = asyncHandler(async (req, res) => {
	if (!req.body.text) {
		res.status(404);

		throw new Error('Please add a text field');
	}
	console.log(req.body);
	res.status(200).json({ message: 'Set Goals  successfully', data: req.body });
});

// @desc Update goals
// @routes PUT /api/goals/<;id
// @access private
const updateGoal = asyncHandler(async (req, res) => {
	res.status(200).json({ message: 'Update Goals  successfully' });
});

// @desc Delete goals
// @routes DELETE /api/goals/:id
// @access private
const deleteGoal = asyncHandler(async (req, res) => {
	res.status(200).json({ message: 'Delete Goals  successfully' });
});

module.exports = {
	getGoals,
	setGoals,
	updateGoal,
	deleteGoal,
};
