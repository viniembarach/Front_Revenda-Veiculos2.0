export function stringParaEntradaDeData (dataVenda: string) {
    if (dataVenda) {
        return new Date(dataVenda).toISOString().split('T')[0]
    }
    return new Date().toISOString().split('T')[0]
}