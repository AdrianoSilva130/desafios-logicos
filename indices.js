function indicesMaiorMenor(arr) {
  if (arr.length === 0) return null;

  let indiceMaior = 0;
  let indiceMenor = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[indiceMaior]) indiceMaior = i;
    if (arr[i] < arr[indiceMenor]) indiceMenor = i;
  }

  return { indiceMaior, indiceMenor };
}

const resultado = indicesMaiorMenor([15, 58, 24, 1, 3]);
console.log("Índice do maior valor:", resultado.indiceMaior);
console.log("Índice do menor valor:", resultado.indiceMenor);