const passport = require('passport');

const {Strategy , ExtractJwt} = require('passport-jwt');
const jwtSecret  = require('../controllers/controllerBook.js');

const strategy = new Strategy(
    {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: jwtSecret
    },

    (payLoad,done) => {
        try {
            books.findById({bookId: payload._id}), (err,book) => {
                if (!book) {
                    const error = new Error('User not found');
                    error.statusCode = 404;
                    return done(error);
                }
                else if (book){
                    return done(null,book)
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