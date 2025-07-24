export function indicesMaiorMenor(arr) {
  if (arr.length === 0) return null;

  let [indiceMaior, indiceMenor] = [0, 0];

  arr.forEach((valor, i) => {
    if (valor > arr[indiceMaior]) indiceMaior = i;
    if (valor < arr[indiceMenor]) indiceMenor = i;
  });

  return { indiceMaior, indiceMenor };
}
