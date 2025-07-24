export function calcularMDC(a, b) {
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return a; 
}

console.log("MDC de 24 e 36:", calcularMDC(24, 36));
console.log("MDC de 52 e 32:", calcularMDC(52, 32));
