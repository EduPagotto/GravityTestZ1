'use strict';

const termi = require('./index');

function start() {
    console.log('iniciado');

    termi('default');
    termi.teste1('Chamada 1');
    termi.teste2('na 2');

}


start();
