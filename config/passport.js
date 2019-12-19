const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const Model = require('../www/models/model')();
const console = require('../log');
const opts = {};

opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken(); // Authentication header with Bearer Scheme
opts.secretOrKey = "secret";

module.exports = passport => {
    passport.use(
        // jwt_payload is an object literal containing the decoded JWT payload.
        new JwtStrategy(opts, (jwt_payload, done) => {
            Model.db.query('SELECT * FROM tab_distribuidores WHERE id = $1', [jwt_payload.id])
                .then(user => {
                    if (user) return done(null, user);
                    return done(null, false);
                })
                .catch(err => console.log(err));
        })
    );
};