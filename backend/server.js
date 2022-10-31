const express = require('express');
const colors = require('colors');
const cors = require('cors');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middlewares/errorMiddleware');
const connectDB = require('./config/db');

connectDB();

const goalsRoutes = require('./routes/goalsRoutes');
const usersRoutes = require('./routes/userModels');

const PORT = process.env.PORT || 5001;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
	console.log(`req ${req.path}`.gray.bgRed);
	next();
});

app.use('/api/goals', goalsRoutes);
app.use('/api/users', usersRoutes);

//middlewares
app.use(errorHandler);

app.listen(PORT, () => console.log(`listening on port ${PORT} `));
