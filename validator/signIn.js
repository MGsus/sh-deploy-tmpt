const Validator = require("validator"); //used to validate inputs (e.g. check for valid email format, confirming passwords match)
const isEmpty = require("is-empty"); //global function that will come in handy when we use validator

module.exports = function validateRegisterInput(data) {
  let errors = {};

  // Convert empty fields to an empty string so we can use validator functions
  data.nom_dist = !isEmpty(data.nom_dist) ? data.nom_dist : "";
  data.cc = !isEmpty(data.cc) ? data.cc : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";

  // Placa checks
  if (Validator.isEmpty(data.nom_dist)) {
    errors.nom_dist = "No ha ingresado el nombre de usuario";
  }
  // cc checks
  if (Validator.isEmpty(data.cc + '')) {
    errors.cc = "No ha ingresado cedula";
  } else if (!Validator.isNumeric(data.cc + '')) {
    errors.cc = "No ha ingesado un numero de cedula valido";
  }
  // Email checks
  if (Validator.isEmpty(data.email)) {
    errors.email = "No ha ingresado el correo electrónico";
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "Dirección de correo inválida";
  }
  // Password checks
  if (Validator.isEmpty(data.password)) {
    errors.password = "No ha ingresado la contraseña";
  }
  if (Validator.isEmpty(data.password2)) {
    errors.password2 = "Vuelva a ingresar la contraseña";
  }
  if (!Validator.isLength(data.password, { min: 5, max: 30 })) {
    errors.password = "La contraseña debe contener mínimo 5 caracteres";
  }
  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = "Las contraseñas no coinciden";
  }
  return {
    errors,
    isValid: isEmpty(errors),
  };
};
