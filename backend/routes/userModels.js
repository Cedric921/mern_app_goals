const router = require('express').Router();

const userController = require('../controllers/usersController');

const { protect } = require('../middlewares/authMiddleware');

router.post('/', userController.registerUser);
router.post('/login', userController.loginUser);
router.get('/me', protect, userController.getMe);

module.exports = router;
