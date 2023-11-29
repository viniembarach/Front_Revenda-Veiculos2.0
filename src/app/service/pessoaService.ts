import Pessoa from '../core/Pessoa';

let pessoasList: Pessoa[] = [
  new Pessoa(
    1,
    "123.456.789-00", // CPF/CNPJ
    "Fulano da Silva", // Nome
    1234567890, // Telefone
    "Cidade A", // Cidade
    "Rua Principal, 123", // Endereço
    "senha123", // Senha
    "fulano@example.com", // Email
    "Cliente", // Tipo
    "Usuário" // Role
  ),
  new Pessoa(
    2,
    "987.654.321-00", // CPF/CNPJ
    "Ciclano Oliveira", // Nome
    9876543210, // Telefone
    "Cidade B", // Cidade
    "Avenida Secundária, 456", // Endereço
    "outraSenha456", // Senha
    "ciclano@example.com", // Email
    "Fornecedor", // Tipo
    "Admin" // Role
  )
];
let proximoId = pessoasList.length + 1;

export const fetchPessoas = async (): Promise<Pessoa[]> => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return pessoasList;
  } catch (error) {
    throw new Error('Erro ao buscar pessoas');
  }
};

export const cadastrarPessoa = async (novoPessoa: Pessoa): Promise<Pessoa> => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 500));

    novoPessoa.id = proximoId++;
    pessoasList.push(novoPessoa);

    // Retorna o pessoa cadastrado
    return novoPessoa;
  } catch (error) {
    console.error("Erro ao cadastrar pessoa:", error);
    throw error;
  }
};

export const atualizarPessoa = async (pessoaAtualizado: Pessoa): Promise<Pessoa> => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 500));

    const index = pessoasList.findIndex((pessoa) => pessoa.id === pessoaAtualizado.id);

    if (index !== -1) {
      pessoasList[index] = pessoaAtualizado;
      return pessoaAtualizado;
    } else {
      throw new Error('pessoa não encontrado');
    }
  } catch (error) {
    console.error("Erro ao atualizar pessoa:", error);
    throw error;
  }
};

export const excluirPessoa = async (id: number): Promise<void> => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 500));

    pessoasList = pessoasList.filter((pessoa) => pessoa.id !== id);
  } catch (error) {
    console.error("Erro ao excluir pessoa:", error);
    throw error;
  }
};