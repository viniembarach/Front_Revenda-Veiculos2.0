import axios from 'axios';
import Pessoa from '../core/Pessoa';

interface ApiResponse {
    content: Pessoa[];
}

const BASE_URL = 'https://www.eventos.bprates.com.br/';

export const fetchPessoas = async (): Promise<Pessoa[]> => {
  try {
    const response = await axios.get<ApiResponse>(`${BASE_URL}/pessoas`);
    return response.data.content;
  } catch (error) {
    throw new Error('Erro ao buscar pessoas');
  }
};

export const cadastrarPessoa = async (pessoa: Pessoa): Promise<Pessoa> => {
    try {
      const response = await axios.post<Pessoa>(`${BASE_URL}/pessoas`, pessoa);
      return response.data;
    } catch (error) {
      console.error("Erro ao cadastrar pessoa:", error);
      throw error;
    }
  };

  export const atualizarPessoa = async (pessoa: Pessoa): Promise<Pessoa> => {
    try {
      const response = await axios.put<Pessoa>(`${BASE_URL}/pessoas/${pessoa.id}`, pessoa);
      return response.data;
    } catch (error) {
      console.error("Erro ao atualizar pessoa:", error);
      throw error;
    }
  };

  export const excluirPessoa = async (id: number): Promise<void> => {
    try {
      await axios.delete(`${BASE_URL}/pessoas/${id}`);
    } catch (error) {
      console.error("Erro ao excluir pessoa:", error);
      throw error;
    }
  };