import axios from 'axios';
import Veiculo from '../core/Veiculo';

interface ApiResponse {
    content: Veiculo[];
}

const BASE_URL = 'https://www.eventos.bprates.com.br/';

export const fetchVeiculos = async (): Promise<Veiculo[]> => {
  try {
    const response = await axios.get<ApiResponse>(`${BASE_URL}/veiculos`);
    return response.data.content;
  } catch (error) {
    throw new Error('Erro ao buscar veiculos');
  }
};

export const cadastrarVeiculo = async (veiculo: Veiculo): Promise<Veiculo> => {
    try {
      const response = await axios.post<Veiculo>(`${BASE_URL}/veiculos`, veiculo);
      return response.data;
    } catch (error) {
      console.error("Erro ao cadastrar veiculo:", error);
      throw error;
    }
  };

  export const atualizarVeiculo = async (veiculo: Veiculo): Promise<Veiculo> => {
    try {
      const response = await axios.put<Veiculo>(`${BASE_URL}/veiculos/${veiculo.id}`, veiculo);
      return response.data;
    } catch (error) {
      console.error("Erro ao atualizar veiculo:", error);
      throw error;
    }
  };

  export const excluirVeiculo = async (id: number): Promise<void> => {
    try {
      await axios.delete(`${BASE_URL}/veiculos/${id}`);
    } catch (error) {
      console.error("Erro ao excluir veiculo:", error);
      throw error;
    }
  };