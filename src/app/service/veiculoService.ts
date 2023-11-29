import Veiculo from '../core/Veiculo';

let veiculosList: Veiculo[] = [
  new Veiculo(
    1,
    "ABC1234", // Placa
    "Carro Modelo 1", // Nome
    "Modelo A", // Modelo
    15000, // Preço de Compra
    20000, // Preço de Venda
    2020, // Ano de Fabricação
    2021, // Ano de Modelo
    "Azul", // Cor
    50000, // KM Rodado
    "Fabricante 1", // Fabricante
    "Tipo 1", // Tipo de Veículo
    "DISPONIVEL" // Status
  ),
  new Veiculo(
    2,
    "XYZ5678", // Placa
    "Carro Modelo 2", // Nome
    "Modelo B", // Modelo
    18000, // Preço de Compra
    22000, // Preço de Venda
    2019, // Ano de Fabricação
    2020, // Ano de Modelo
    "Vermelho", // Cor
    60000, // KM Rodado
    "Fabricante 2", // Fabricante
    "Tipo 2", // Tipo de Veículo
    "DISPONIVEL" // Status
  )
];
let proximoId = veiculosList.length + 1;

export const fetchVeiculos = async (): Promise<Veiculo[]> => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return veiculosList;
  } catch (error) {
    throw new Error('Erro ao buscar veiculos');
  }
};

export const cadastrarVeiculo = async (novoVeiculo: Veiculo): Promise<Veiculo> => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 500));

    novoVeiculo.id = proximoId++;
    veiculosList.push(novoVeiculo);

    // Retorna o veiculo cadastrado
    return novoVeiculo;
  } catch (error) {
    console.error("Erro ao cadastrar veiculo:", error);
    throw error;
  }
};

export const atualizarVeiculo = async (veiculoAtualizado: Veiculo): Promise<Veiculo> => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 500));

    const index = veiculosList.findIndex((veiculo) => veiculo.id === veiculoAtualizado.id);

    if (index !== -1) {
      veiculosList[index] = veiculoAtualizado;
      return veiculoAtualizado;
    } else {
      throw new Error('veiculo não encontrado');
    }
  } catch (error) {
    console.error("Erro ao atualizar veiculo:", error);
    throw error;
  }
};

export const excluirVeiculo = async (id: number): Promise<void> => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 500));

    veiculosList = veiculosList.filter((veiculo) => veiculo.id !== id);
  } catch (error) {
    console.error("Erro ao excluir veiculo:", error);
    throw error;
  }
};