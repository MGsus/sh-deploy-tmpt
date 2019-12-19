var db = require('../../config/model_config');

/*
 * Exportamos el modulo
 **/
module.exports = Model;

/**
 * Constructor del Model
 * @constructor
 */
function Model() {
    //si la clase no está instanciada se instancia
    if (!(this instanceof Model)) return new Model();
}

/****************************************************
 * SECCION PARA LOS METODOS DE LA CLASE
 ****************************************************/
/**
 * Función que obtiene los métodos de la db
 * @method db
 */
Model.prototype.db = db;
