const router = require('express').Router();

const goalControllers = require('../controllers/goalsController');

//auth middleware
const { protect } = require('../middlewares/authMiddleware');

// router.route('/').get(goalsControllers.getGoals).post(goalsControllers.setGoals);
// router.route('/:id').put(goalsControllers.updateGoals).delete(goalsControllers.deleteGoals);

router.get('/', protect, goalControllers.getGoals);
router.post('/', protect, goalControllers.setGoals);
router.put('/:id', protect, goalControllers.updateGoal);
router.delete('/:id', protect, goalControllers.deleteGoal);

module.exports = router;
