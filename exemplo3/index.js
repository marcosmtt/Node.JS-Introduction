const _ = require('lodash');

const numeros = [1, 5, 2, 3, 7, 8];
const numero_maiores_3 = _.filter(numeros, function (numero) { return numero > 3 });

console.log(numeros);
console.log(numero_maiores_3);