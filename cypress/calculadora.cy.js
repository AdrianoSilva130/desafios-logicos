describe('Testes de operações matemáticas', () => {

  it('Deve somar corretamente', () => {
    const soma = 2 + 2
    expect(soma).to.equal(4)
  })

  it('Deve subtrair corretamente', () => {
    const sub = 5 - 3
    expect(sub).to.equal(2)
  })

  it('Deve multiplicar corretamente', () => {
    const mult = 3 * 3
    expect(mult).to.equal(9)
  })

  it('Deve dividir corretamente', () => {
    const div = 10 / 2
    expect(div).to.equal(5)
  })

})