'use scrict';

/**
 * Classe de construtor vetorial
 */
class Vetor {
    /**
     * Construtor aceita vetor ou posicoes
     */
    constructor() {
        if (arguments.length == 0) {
            this.x = 0;
            this.y = 0;
            this.z = 0;
            this.size = 3;
        } else if (arguments.length == 2) {
            this.x = arguments[0].x;
            this.y = arguments[0].y;
            this.z = 0;
            this.size = 2;
        } else if (arguments.length == 1) {
            this.x = arguments[0].x;
            this.y = arguments[0].y;
            this.z = arguments[0].z;
            this.size = 3;
        } else if (arguments.length == 3) {
            this.x = arguments[0];
            this.y = arguments[1];
            this.z = arguments[2];
            this.size = 3;
        } else
            throw new Error('Argumentos invalidos');
    }

    /**
     * Acumula o vetor com parametro _v
     * @param {Vetor} _v 
     */
    acc(_v) {
        this.x += _v.x;
        this.y += _v.y;
        this.z += _v.z;
        return this;
    }

    /**
     * Soma 2 vetores e retorna um novo vetor
     * @param {Vetor} _v 
     */
    add(_v) {
        let novo = new Vetor(_v);
        novo.acc(this);
        return novo;
    }

    /**
     * Exibe o vetor
     */
    toString() {
        return `(${this.x},${this.y},${this.z})`;
    }

    length() {
        return Math.sqrt( Math.pow(this.x, 2) + Math.pow(this.y, 2) + Math.pow(this.z, 2));
    }
}

function start() {

    let v1 = new Vetor(1,2,3);
    let v2 = new Vetor(4,5,6);
    let v3 = v1.add(v2);

    let v4 = new Vetor(3,4,0);

    console.log(`Result: ${v4.length()}`);

}

start();