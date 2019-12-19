var Mod_dist = require('../models/mod_dist')();
/*
 * Exportamos el modulo
 **/
module.exports = Controller_dist;

/**
 * @constructor
 */
function Controller_dist() {
    //instanciamos la clase Controller_dist
    if (!(this instanceof Controller_dist))
        return new Controller_dist();
}
/**
 * Docs
 * @extends Controller_dist To Controller
 */
// Controller_dist.prototype = Object.create(Controller.prototype);
// Controller_dist.prototype.constructor = Controller_dist;

/****************************************************
 * SECCION PARA LOS METODOS DE LA CLASE
 ****************************************************/

Controller_dist.prototype.list = (done) => {
    Mod_dist.list(done);
};

Controller_dist.prototype.register = function (params, done) {
    Mod_dist.register(params, done);
};

Controller_dist.prototype.login = function (params, done) {
    Mod_dist.login(params, done);
};