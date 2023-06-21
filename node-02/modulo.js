//funcion de suma

const sumar = (a, b) => {
  return a + b;
};

const restar = (a, b) => {
  return a - b;
};

//tenemos que hacer publicas las  funciones del modulo para que se puedan usar

//module.exports = sumar;

//importar mas de una funcion

module.exports = {
  sumar: sumar,
  restar: restar,
};
