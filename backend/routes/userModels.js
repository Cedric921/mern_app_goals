const router = require('express').Router();

const userController = require('../controllers/usersController');

router.post('/', userController.registerUser);
router.post('/login', userController.loginUser);
router.get('/me', userController.getMe);

module.exports = router;
