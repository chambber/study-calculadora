class Calculadora {
    constructor() {
        this.resultado = 0;
    }

    soma(...args) {
        args.forEach((valor) => {
            this.resultado += valor;
        });
        return this.resultado;
    }
    subtrai(...args){
        args.forEach((valor) => {
            this.resultado -= valor;
        });
        return this.resultado;
    }
    multiplica(...args){
        args.forEach((valor) => {
            this.resultado *= valor;
        });
        return this.resultado;
    }
    divide(...args){
        args.forEach((valor) => {
            this.resultado /= valor;
        });
        return this.resultado;
    }
    reseta(){
        this.resultado = 0;
        return this.resultado;
    }
}

module.exports = Calculadora;
