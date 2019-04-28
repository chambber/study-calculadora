const chai = require('chai');
const Calculadora = require('../src/calculadora');

const assert = chai.assert;

describe('Calculadora', () => {
    let calculadora;
    beforeEach(() => {
        calculadora = new Calculadora();
    })

    it('Deve somar números', () => {
        assert.equal(calculadora.soma(2, 2), 4);
        assert.equal(calculadora.soma(1, 2, 1), 8);
        assert.equal(calculadora.soma(3), 11);
    });

    it('Deve subtrair números', () => {
        calculadora.soma(10);
        assert.equal(calculadora.subtrai(2), 8);
        assert.equal(calculadora.subtrai(3), 5);
        assert.equal(calculadora.subtrai(7), -2);
    });

    it('Deve multiplicar números', () => {
        calculadora.soma(1);
        assert.equal(calculadora.multiplica(2), 2);
        assert.equal(calculadora.multiplica(2), 4);
        assert.equal(calculadora.multiplica(3), 12);
        assert.equal(calculadora.multiplica(-1), -12);
    });

    it('Deve dividir números', () => {
        calculadora.soma(10);
        assert.equal(calculadora.divide(2), 5);
        assert.equal(calculadora.divide(5), 1);
        assert.equal(calculadora.divide(2), 0.5);
    });

    it('Deve resetar', () => {
        calculadora.soma(10, 20, 30);
        calculadora.divide(2);
        calculadora.subtrai(3);
        assert.equal(calculadora.reseta(), 0);
    });
});