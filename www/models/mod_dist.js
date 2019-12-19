var Model = require('./model')();
const console = require('../../log');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

//Exportamos el modulo
module.exports = Model_dist;

/**
 *@constructor
 */
function Model_dist() {
    //si la clase Controller_test no está instanciada se instancia
    if (!(this instanceof Model_dist))
        return new Model_dist();
}

/****************************************************
 * SECCION PARA LOS METODOS DE LA CLASE
 ****************************************************/


Model_dist.prototype.list = (done) => {
    Model.db.query("SELECT cc, nom_dist, email, forma_pago, incoterm FROM tab_distribuidores", function (err, result) {
        if (err) throw err;
        // var rows = Model.toArray(result);
        let rows = result.rows;
        done(rows);
    });
};

Model_dist.prototype.login = function (params, done) {
    const { cc, password } = params;
    Model.db.query('SELECT * FROM tab_distribuidores WHERE cc = $1', [cc])
        .then(rslt => {
            if (rslt.rows == 0) done({ message: 'Usuario no existe' })
            else {
                bcrypt.compare(password, rslt.rows[0].password)
                    .then(isMatch => {
                        if (isMatch) {
                            const payload = {
                                id: rslt.rows[0].id,
                                nom_dist: rslt.rows[0].nom_dist,
                                email: rslt.rows[0].email
                            };
                            jwt.sign(
                                payload, "secret", { expiresIn: '1h' },
                                function (err, token) {
                                    if (err) console.error(err);
                                    done({
                                        success: true,
                                        token: "Bearer " + token
                                    });
                                }
                            );
                        } else done({ password: "Contraseña incorrecta" });
                    }).catch(err => { done(err); });
            }
        }).catch(err => { done(err); });
}

Model_dist.prototype.register = (params, done) => {
    const { cc, nom_dist, password, email, forma_pago, incoterm } = params;
    Model.db.query('SELECT * FROM tab_distribuidores WHERE cc = $1', [cc]).then(user => {
        if (user.rows != 0) done({ message: 'el usuario ya existe' })
        else {
            bcrypt.genSalt(10, function (err, salt) {
                if (err) done(err);
                bcrypt.hash(password, salt, function (err, hash) {
                    if (err) done(err);
                    Model.db.query('INSERT INTO tab_distribuidores (cc, nom_dist, password, email, forma_pago, incoterm) VALUES($1, $2, $3, $4, $5, $6)', [cc, nom_dist, hash, email, forma_pago, incoterm])
                        .then(done({ message: 'usuario creado' }))
                        .catch(err => done(err));
                });
            });
        }
    });
}