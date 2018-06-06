'use strict';

/**
 * Funcao default chamada sem nome de funcao
 * @param {*} entrada 
 */
module.exports = function(entrada) {
    console.log(`Teste 0 Executado:${entrada}`);
};

/**
 * Funcao teste1
 * @param {*} entrada 
 */
module.exports.teste1 = function(entrada) {
    console.log(`Teste 1 Executado:${entrada}`);
};

/**
 * funcao teste2
 * @param {*} entrada 
 */
module.exports.teste2 = function(entrada) {
    console.log(`Teste 2 Executado:${entrada}`);
};
