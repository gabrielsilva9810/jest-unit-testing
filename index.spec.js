const calculaComissaoDeVenda = requie ('.')

it('se a lista estiver vazia, a comissão é zero', () => {
    const resultadoAtual = calculaComissaoDeVenda([])
    const resultadoEsperado = 0

    expect(resultadoAtual).toBe(resultadoEsperado)
})