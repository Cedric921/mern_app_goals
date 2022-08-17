const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');

const User = require('../models/userModel');
// @desc Get users
// @routes GET /api/users
// @access Public
exports.registerUser = asyncHandler(async (req, res) => {
	const { name, email, password } = req.body;

	if (!name || !email || !password) {
		res.status(400);
		throw new Error('Please add all fields ');
	}

	// Check if the user already
	const userExist = await User.findOne({ email });
	if (userExist) {
		res.status(400);
		throw new Error('User already exists');
	}

	// hash password
	const salt = await bcrypt.genSalt(10);
	const hashedPassword = await bcrypt.hash(password, salt);

	// create user
	const user = await User.create({
		name,
		email,
		password: hashedPassword,
	});

	if (user) {
		res.status(201).send({
			_id: user._id,
			name: user.name,
			email: user.email,
		});
	} else {
		res.status(404);
		throw new Error('Invalid user');
	}
	res.json({ message: 'user created' });
});

// @desc Set users
// @routes POST /api/users/login
// @access Public
exports.loginUser = asyncHandler(async (req, res) => {
	res.json({ message: 'Login users ' });
});

// @desc Set users
// @routes POST /api/users/me
// @access Public
exports.getMe = asyncHandler(async (req, res) => {
	res.json({ message: 'User data display' });
});

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
