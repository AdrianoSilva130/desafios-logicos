import { indicesMaiorMenor } from './indices.js';

describe('indicesMaiorMenor com jest', () => {
  
    it('deve retornar os índices corretos do maior e menor valor', () => {
    const resultado = indicesMaiorMenor([10, 5, 20, 3, 8]);
    expect(resultado).toEqual({ indiceMaior: 2, indiceMenor: 3 });
  });

   it('deve retornar null para array vazio', () => {
    const resultado = indicesMaiorMenor([]);
    expect(resultado).toBeNull();
  });

   it('deve funcionar com todos os elementos iguais', () => {
    const resultado = indicesMaiorMenor([7, 7, 7]);
    expect(resultado).toEqual({ indiceMaior: 0, indiceMenor: 0 });
  });

  it('deve funcionar com um único elemento', () => {
    const resultado = indicesMaiorMenor([42]);
    expect(resultado).toEqual({ indiceMaior: 0, indiceMenor: 0 });
  });
});