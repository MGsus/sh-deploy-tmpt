const exec = require('child_process').exec;
const console = require('../../log');
/*
 * Exportamos el modulo
 **/
module.exports = Controller_test;

/**
 * @constructor
 */
function Controller_test() {
    //instanciamos la clase Controller_test
    if (!(this instanceof Controller_test))
        return new Controller_test();
}
/**
 * Docs
 * @extends Controller_test To Controller
 */
// Controller_test.prototype = Object.create(Controller.prototype);
// Controller_test.prototype.constructor = Controller_test;

/****************************************************
 * SECCION PARA LOS METODOS DE LA CLASE
 ****************************************************/

Controller_test.prototype.run = function (done) {
    exec('npm test', function (err, stdout, stderr) {
        let passing = stdout.includes("passing") ? stdout.split("✓").length - 1 : '0';

        let failingStr = stdout.includes("failing") ? stdout.split(" failing")[0] : '0';
        let failing = parseInt(failingStr.charAt(failingStr.length - 1));

        let total = passing + failing;
        let percent = Math.trunc(passing / total * 100);

        done({
            message: stdout,
            percent: percent
        });
    })
};

Controller_test.prototype.pull = done => {
    exec('"/home/admindevel/tstpipeline/deploy.sh"', function (err, stdout, stderr) {
        if (err) console.error(err);
        done(stdout);
    })
}
