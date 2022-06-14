const express = require('express');
const dotenv = require('dotenv');

const carPageServing = require('./middleware/carGame');

dotenv.config();

const app = express();

app.use(express.static(__dirname + '/static'));

app.use('/', carPageServing);

app.listen(process.env.PORT || 3000, (err, done) => {
	if (err) {
		console.log('Error starting the server');
	} else {
		console.log('Server Started');
	}
});
