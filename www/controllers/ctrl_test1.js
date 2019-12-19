var Mod_test = require('../models/mod_test')();
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
Controller_test.prototype = Object.create(Controller.prototype);
Controller_test.prototype.constructor = Controller_test;

/****************************************************
 * SECCION PARA LOS METODOS DE LA CLASE
 ****************************************************/

Controller_test.prototype.nombre_de_la_funcion = function (params, done) {
    Mod_test.nombre_de_la_funcion(params, done);
};
