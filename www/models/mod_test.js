var Model = require('./model')();

//Exportamos el modulo
module.exports = Model_test;

/**
 *@constructor
 */
function Model_test() {
    //si la clase Controller_test no está instanciada se instancia
    if (!(this instanceof Model_test))
        return new Model_test();
}

/****************************************************
 * SECCION PARA LOS METODOS DE LA CLASE
 ****************************************************/


Model_test.prototype.nombre_de_funcion = function (done) {
    Model.db.query("SELECT fn_nombre_de_la_funcion FROM tab_nombre_de_la_tabla", function (err, result) {
        if (err)
            return done(false);

        var rows = Model.toArray(result);
        done(rows);
    });
};

