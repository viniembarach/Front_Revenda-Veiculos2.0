
export default class Veiculo {
    id: number | null;
    placa: string;
    nome: string;
    modelo: string;
    precoCompra: number;
    precoVenda: number;
    anoFabri: number;
    anoMod: number;
    cor: string;
    kmRodado: number;
    fabricante: string;
    tipoVeiculo: string;
    status: string;

    constructor(
        id: number | null,
        placa: string,
        nome: string,
        modelo: string,
        precoCompra: number,
        precoVenda: number,
        anoFabri: number,
        anoMod: number,
        cor: string,
        kmRodado: number,
        fabricante: string,
        tipoVeiculo: string,
        status: string
      ) {
        this.id = id;
        this.placa = placa;
        this.nome = nome;
        this.modelo = modelo;
        this.precoCompra = precoCompra;
        this.precoVenda = precoVenda;
        this.anoFabri = anoFabri;
        this.anoMod = anoMod;
        this.cor = cor;
        this.kmRodado = kmRodado;
        this.fabricante = fabricante;
        this.tipoVeiculo = tipoVeiculo;
        this.status = status;
      }

      static geraVeiculosMock() {
        return [
            new Veiculo(
                1,
                "ABC1234",
                "Carro Modelo 1",
                "Modelo A",
                15000,
                20000,
                2020,
                2021,
                "Azul",
                50000,
                "Fabricante 1",
                "Tipo 1",
                "DISPONIVEL"
            ),
            new Veiculo(
                2,
                "XYZ5678",
                "Carro Modelo 2",
                "Modelo B",
                18000,
                22000,
                2019,
                2020,
                "Vermelho",
                60000,
                "Fabricante 2",
                "Tipo 2",
                "DISPONIVEL"
            )
        ];
    }


    static vazio(): Veiculo {
        return new Veiculo(
            null,
            "",
            "",
            "",
            0,  // Valor padrão para precoCompra
            0,  // Valor padrão para precoVenda
            0,  // Valor padrão para anoFabri
            0,  // Valor padrão para anoMod
            "",
            0,  // Valor padrão para kmRodado
            "",
            "",
            ""
        );
    }
}