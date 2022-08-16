const router = require('express').Router();

const goalControllers = require('../controllers/goalsController');

router.get('/', goalControllers.getGoals);

router.post('/', (req, res) => {
	res.json({ message: 'Set Goals' });
});

router.put('/:id', (req, res) => {
	res.json({ message: `Update Goals ${req.params.id}` });
});

router.delete('/:id', (req, res) => {
	res.json({ message: `Delete Goals ${req.params.id}` });
});

module.exports = router;
