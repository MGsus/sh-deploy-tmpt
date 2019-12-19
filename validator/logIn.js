const Validator = require("validator"); // Used to validate inputs (e.g. check for valid email format, confirming passwords match)
const isEmpty = require("is-empty"); // Global function that will come in handy when we use validator

module.exports = function validateLoginInput(data) {

    let err = {};

    // Convert empty fields to an empty string so we can use validator functions
    data.cc = !isEmpty(data.cc) ? data.cc : "";
    data.password = !isEmpty(data.password) ? data.password : "";

    // cc checks
    if (Validator.isEmpty(data.cc + '')) {
        err.cc = "No ha ingresado cedula";
    } else if (!Validator.isNumeric(data.cc + '')) {
        err.cc = "No ha ingesado un numero de cedula valido";
    }
    // Password checks
    if (Validator.isEmpty(data.password)) {
        err.password = "No ha ingresado la contraseña";
    } return {
        err,
        isValid: isEmpty(err)
    };
};
