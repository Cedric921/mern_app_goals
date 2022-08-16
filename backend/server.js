const express = require('express');
const dotenv = require('dotenv').config();

const goalsRoutes = require('./routes/goalsRoutes');

const PORT = process.env.PORT || 5001;

const app = express();

app.use('/api/goals', goalsRoutes);

app.listen(PORT, () => console.log(`listening on port ${PORT} `));
