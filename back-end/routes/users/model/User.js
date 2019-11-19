var mongoose = require('mongoose');
var moment = require('moment');
var now = moment();

var UserSchema = new mongoose.Schema({
    username: {type: String, trim: true, unique: true, required: true, default:''},

    email: {type: String, trim: true, unique: true, required: true, default: ''},

    password: {type: String, required: true, default: ''},

    timestamp: {type: String, default: now.format('dddd, MMMM Do YYYY, h:mm:ss a')}
});

module.exports = mongoose.model('User', UserSchema);