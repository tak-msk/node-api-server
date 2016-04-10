var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// Connect db
mongoose.connect('mongodb://localhost/jsonAPI');

// Define model
var User = require('./app/models/user');

// To get data for POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 3000;

// Preparation for API server by express
var router = express.Router();

router.use(function (req, res, next) {
    console.log('Something is happening.');
    next();
});

// check API connection
router.get('/', function (req, res) {
    res.json({ message: 'Successfully posted a test message.' });
});

router.route('/users')
    // User creation (POST http://localhost:3000/api/users)
    .post(function (req, res) {
        var user = new User();

        user.email = req.body.email;
        user.name = req.body.name;
        user.age = req.body.age;

        user.save(function (err) {
            if (err) {
                res.send(err);
            }

            res.json({
                code: 200,  
                message: 'User created' 
            });
        });
    })
    // Get user list (GET http://localhost:3000/api/users)
    .get(function (req, res) {
    	User.find(function (err, users) {
    		if (err) {
    			res.send(err);
    		}

    		res.json(users);
    	});
    });

// Routing
app.use('/api', router);

// Run server
app.listen(port);
console.log('listen on port' + port);