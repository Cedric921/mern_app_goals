const express = require('express');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middlewares/errorMiddleware');

const goalsRoutes = require('./routes/goalsRoutes');

const PORT = process.env.PORT || 5001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/goals', goalsRoutes);

//middlewares
app.use(errorHandler);

app.listen(PORT, () => console.log(`listening on port ${PORT} `));
