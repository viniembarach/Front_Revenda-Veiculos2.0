import Venda from '../core/Venda';

let vendasList: Venda[] = [
    new Venda(1, "23/11/2023", 1, 1, 1),
    new Venda(2, "12/12/2023", 2, 2, 1)
  ];
let proximoId = vendasList.length + 1;

export const fetchVendas = async (): Promise<Venda[]> => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return vendasList;
  } catch (error) {
    throw new Error('Erro ao buscar vendas');
  }
};

export const cadastrarVenda = async (novoVenda: Venda): Promise<Venda> => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 500));

    novoVenda.id = proximoId++;
    vendasList.push(novoVenda);

    // Retorna o venda cadastrado
    return novoVenda;
  } catch (error) {
    console.error("Erro ao cadastrar venda:", error);
    throw error;
  }
};

export const atualizarVenda = async (vendaAtualizado: Venda): Promise<Venda> => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 500));

    const index = vendasList.findIndex((venda) => venda.id === vendaAtualizado.id);

    if (index !== -1) {
      vendasList[index] = vendaAtualizado;
      return vendaAtualizado;
    } else {
      throw new Error('venda não encontrado');
    }
  } catch (error) {
    console.error("Erro ao atualizar venda:", error);
    throw error;
  }
};

export const excluirVenda = async (id: number): Promise<void> => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 500));

    vendasList = vendasList.filter((venda) => venda.id !== id);
  } catch (error) {
    console.error("Erro ao excluir venda:", error);
    throw error;
  }
};