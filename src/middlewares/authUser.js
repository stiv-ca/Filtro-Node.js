const passport = require('passport');

const {Strategy , ExtractJwt} = require('passport-jwt');
const jwtSecret  = require('../controllers/controllerUser.js');

const strategy = new Strategy(
    {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: jwtSecret
    },

    (payLoad,done) => {
        try {
            users.findById({userId: payload._id}), (err,user) => {
                if (!user) {
                    const error = new Error('User not found');
                    error.statusCode = 404;
                    return done(error);
                }
                else if (user){
                    return done(null,user)
                } else {
                    return done(null, false)
                }
            }
        } catch (error) {
            done(error);
        }   
    }
);

passport.use(strategy);

const initialize = () => {
    return passport.initialize();
}

const authenticate = () => {
    return passport.authenticate('jwt',{session: false});
}

module.exports = {
    initialize,
    authenticate
}