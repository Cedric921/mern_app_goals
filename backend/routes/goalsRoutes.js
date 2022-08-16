const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
	res.json({ message: 'get Goals' });
});

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
