// require / import packages here
require('dotenv').config();
const express = require('express');
const cors = require('cors');

const cookieParser = require('cookie-parser');

const errorMiddleware = require('./middlewares/error');
// created app here
const app = express();

// importing  all routers here
const user = require('./Routes/user');
const task = require('./Routes/task');

// using Built-in middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//using Third - party middleware
app.use(
	cors({
		origin: process.env.ORIGIN,
		credentials: true
	})
);

app.use(cookieParser());

//using router middleware here
app.use('/api/v1', user);
app.use('/api/v1', task);

//home route

app.get('/', (req, res) => {
	res.status(200).json({
		host: req.hostname,
		port: process.env.PORT,
		message: 'Server is Runing',
		Author: 'Rohit Bahuguna'
	});
});

// error middleware

app.use(errorMiddleware);

// expored to index.js
module.exports = app;
