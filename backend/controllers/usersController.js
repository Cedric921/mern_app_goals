// @desc Get users
// @routes GET /api/users
// @access Public
exports.registerUser = (req, res) => {
	res.json({ message: 'user created' });
};



// @desc Set users
// @routes POST /api/users/login
// @access Public
exports.loginUser = (req, res) => {
	res.json({ message: 'Login users ' });
};


// @desc Set users
// @routes POST /api/users/me
// @access Public
exports.getMe = (req, res) => {
	res.json({ message: 'User data display' });
};

// // @desc Update user
// // @routes PUT /api/users/:id
// // @access Public
// exports.updateUser = (req, res) => {
// 	res.json({ message: 'Update user ' });
// };

// // @desc Delete users
// // @routes DELETE /api/users/:id
// // @access Public
// exports.deleteUser = (req, res) => {
// 	res.json({ message: 'Delete user ' });
// };
