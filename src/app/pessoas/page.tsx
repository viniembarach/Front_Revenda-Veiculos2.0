'use client';
import Botao from "@/components/pessoas/botao";
import Formulario from "@/components/pessoas/formulario";
import Layout from "@/components/pessoas/layout";
import Tabela from "@/components/pessoas/tabela";
import Pessoa from "@/app/core/Pessoa";
import { atualizarPessoa, cadastrarPessoa, excluirPessoa, fetchPessoas } from "@/app/service/pessoaService";
import { useEffect, useState } from "react";

export default function Pessoas() {

  const [pessoa, setPessoa] = useState<Pessoa>(Pessoa.vazio())
  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')

  const [pessoas, setPessoas] = useState<Pessoa[]>([]);

  useEffect(() => {
    if (visivel === 'tabela') {
      const loadPessoas = async () => {
        try {
          const dados = await fetchPessoas();
          setPessoas(dados);
        } catch (error) {
          console.error("Erro ao buscar pessoas:", error);
        }
      }

      loadPessoas();
    }
  }, [visivel]);


  function pessoaSelecionado(pessoa: Pessoa) {
    setPessoa(pessoa)
    setVisivel('form')
  }

  async function pessoaExcluido(pessoa: Pessoa) {
    const confirmacao = window.confirm("Tem certeza de que deseja excluir esta pessoa?");
    if (confirmacao) {
        try {
            if (pessoa.id !== null && pessoa.id !== undefined) {
                await excluirPessoa(pessoa.id);
                setPessoas(prevPessoas => prevPessoas.filter(ev => ev.id !== pessoa.id));
            } else {
                console.error("pessoaId é null ou undefined!");
            }
        } catch (error) {
            console.error("Erro ao excluir pessoa:", error);
        }
    }
}


  function salvarOuAlterarPessoa(pessoa: Pessoa) {
    if (pessoa.id) {
      alterarPessoa(pessoa)
    } else {
      salvarPessoa(pessoa)
    }
  }

  async function alterarPessoa(pessoa: Pessoa) {
    try {
      const pessoaAtualizado = await atualizarPessoa(pessoa);
      setVisivel("tabela");
    } catch (error) {
      console.error("Erro ao atualizar pessoa:", error);
    }
  }
  
  async function salvarPessoa(pessoa: Pessoa) {
    try {
      const novoPessoa = await cadastrarPessoa(pessoa);
      setVisivel("tabela");
    } catch (error) {
      console.error("Erro ao salvar pessoa:", error);
    }
  }

  function novoPessoa() {
    setPessoa(Pessoa.vazio())
    setVisivel("form")
  }

  return (
    <div className={`tabela`}>
      <Layout titulo="Cadastro de pessoas">
        {visivel === 'tabela' ? (
          <>
            <div className="flex justify-end">
              <Botao className="mb-4" cor="bg-gradient-to-r from-green-500 to-green-700"
                onClick={() => novoPessoa()}>
                Nova Pessoa
              </Botao>
            </div>
            <div className="overflow-x-auto">
              <Tabela pessoas={pessoas}
                pessoaSelecionada={pessoaSelecionado}
                pessoaExcluida={pessoaExcluido}></Tabela>
            </div>
          </>
        ) : (
          <Formulario pessoa={pessoa}
            pessoaMudou={salvarOuAlterarPessoa}
            cancelado={() => setVisivel('tabela')} />
        )}
      </Layout>
    </div>
  )
}