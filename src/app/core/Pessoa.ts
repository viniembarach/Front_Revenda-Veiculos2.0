export default class Pessoa {
    id: number | null;
    cpfoucnpj: string;
    nome: string;
    telefone: number;
    cidade: string;
    endereco: string;
    senha: string;
    email: string;
    tipo: string;
    role: string;
  
    constructor(
      id: number | null,
      cpfoucnpj: string,
      nome: string,
      telefone: number,
      cidade: string,
      endereco: string,
      senha: string,
      email: string,
      tipo: string,
      role: string
    ) {
      this.id = id;
      this.cpfoucnpj = cpfoucnpj;
      this.nome = nome;
      this.telefone = telefone;
      this.cidade = cidade;
      this.endereco = endereco;
      this.senha = senha;
      this.email = email;
      this.tipo = tipo;
      this.role = role;
    }
  
    static vazio(): Pessoa {
      return new Pessoa(
        null,
        "",
        "",
        0,
        "",
        "",
        "",
        "",
        "",
        ""
      );
    }
  
  }