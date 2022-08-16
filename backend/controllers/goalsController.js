// @desc Get goals
// @routes GET /api/goals
// @access private
const getGoals = (req, res) => {
	res.status(200).json({ message: 'Get Goals  successfully' });
};

// @desc Set goals
// @routes POST /api/goals
// @access private
const setGoals = (req, res) => {
	res.status(200).json({ message: 'Get Goals  successfully' });
};

// @desc Update goals
// @routes PUT /api/goals/<;id
// @access private
const updateGoal = (req, res) => {
	res.status(200).json({ message: 'Get Goals  successfully' });
};

// @desc Delete goals
// @routes DELETE /api/goals/:id
// @access private
const deleteGoal = (req, res) => {
	res.status(200).json({ message: 'Get Goals  successfully' });
};

module.exports = {
	getGoals,
	setGoals,
	updateGoal,
	deleteGoal,
};
