let router = require('express').Router();
let console = require('../../../log');
let ctrl_dist = require('../../controllers/ctrl_dist')();
let ctrl_test = require('../../controllers/ctrl_tester')();
const validateLoginInput = require('../../../validator/logIn');
const validateRegisterInput = require('../../../validator/signIn');
const passport = require('passport');

router.get('/dist',
    // passport.authenticate('jwt', { session: false }),
    (req, res) => {
        ctrl_dist.list(rslt => {
            res.status(200).json(rslt);
        });
    }
);

router.post('/dist/register', function (req, res) {
    const { errors, isValid } = validateRegisterInput(req.body);
    if (!isValid) return res.status(400).json(errors);
    ctrl_dist.register(req.body, rslt => {
        res.json(rslt);
    });
});
router.post('/dist/login', function (req, res) {
    const { err, isValid } = validateLoginInput(req.body);
    if (!isValid) return res.status(400).json(err);
    ctrl_dist.login(req.body, rslt => {
        res.json(rslt);
    });
});

router.get('/test', function (req, res) {
    ctrl_test.run(rslt => {
        // res.format({
        //     'text/plain': () => { res.send(rslt.message) }
        // });
        res.render('pull', { message: rslt.message, prcnt: rslt.percent });
    });
});

router.get('/pull', function (req, res) {
    ctrl_test.pull(rslt => {
        res.format({
            'text/plain': () => { res.send(rslt) }
        });
    });
});

module.exports = router;