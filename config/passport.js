var passport = require('passport'),
    mongoose = require('mongoose');


module.exports = function(){
    var User = mongoose.model('User');
    passport.serializeUser(User.serializeUser());
    passport.deserializeUser(User.deserializeUser());

    require('./strategies/local')();
    require('./strategies/bearer')();
};

