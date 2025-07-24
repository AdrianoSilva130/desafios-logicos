import {calcularMDC} from './mdc.js'

describe('calcularMDC', () => {

    it('deve calcular MDC de 24 e 36 corretamente', () => {
        expect(calcularMDC(24, 36)).toBe(12);
});

    it('deve calcular MDC de 52 e 32 corretamente', () => {
    expect(calcularMDC(52, 32)).toBe(4);
     
});
});