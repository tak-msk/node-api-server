var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// to get data for POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 3000;

// Preparation for API server by express
var router = express.Router();

router.use(function(req, res, next) {
	console.log('Something is happening.');
	next();
});

// check API connection
router.get('/', function(req, res) {
	res.json({ message: 'Successfully posted a test message.' });
});

// Routing
app.use('/api', router);

// Run server
app.listen(port);
console.log('listen on port' + port);