export default class Venda {
    id: number | null;
    dataVenda: string;
    veiculo: number;
    cliente: number;
    vendedor: number;

    constructor(id: number | null, dataVenda: string, veiculo: number, cliente: number, vendedor: number) {
        this.id = id;
        this.dataVenda = dataVenda;
        this.veiculo = veiculo;
        this.cliente = cliente;
        this.vendedor = vendedor;
    }

    static geraVendasMock() {
        return [
            new Venda(1, "10/11/2023", 1, 1, 1),
            new Venda(2, "22/10/2024", 2, 2, 1),
        ];
    }

    static vazio(): Venda {
        return new Venda(null, "", 0, 0, 0);
    }
}
