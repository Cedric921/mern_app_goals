const router = require('express').Router();

const goalControllers = require('../controllers/goalsController');

// router.route('/').get(goalsControllers.getGoals).post(goalsControllers.setGoals);
// router.route('/:id').put(goalsControllers.updateGoals).delete(goalsControllers.deleteGoals);

router.get('/', goalControllers.getGoals);
router.post('/', goalControllers.setGoals);
router.put('/:id', goalControllers.updateGoal);
router.delete('/:id', goalControllers.deleteGoal);

module.exports = router;
