import { somaMultiplos } from "./multiplos.js";

describe('somaMultiplos com jest', () => {
    
    it('soma dos múltiplos de 5 ou 7 menores que 30', () => {
         expect(somaMultiplos(30)).toBe(5 + 7 + 10 + 14 + 15 + 20 + 21 + 25 + 28);
    });

    it('soma dos múltiplos de 5 ou 7 menores que 1000 (valor padrão)', () => {
    expect(somaMultiplos()).toBe(156361);
        
    });
});