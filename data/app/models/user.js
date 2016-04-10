var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// validation for email
var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

var UserSchema = new Schema({
    email: {
        type: String,
        validate: [validateEmail, 'Please put a valid email address'],
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    age: Number
});

module.exports = mongoose.model('User', UserSchema);