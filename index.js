const app = require('./app');
const connnectWithDb = require('./config/db');

const PORT = process.env.PORT || 3500;

// connection with mongonDb
connnectWithDb();

// cloudinary  config

app.listen(PORT, () => {
	console.log(`server is runing at port ${PORT}`);
});
