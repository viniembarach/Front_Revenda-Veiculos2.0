'use client';
import Botao from "@/components/vendas/botao";
import Formulario from "@/components/vendas/formulario";
import Layout from "@/components/vendas/layout";
import Tabela from "@/components/vendas/tabela";
import Venda from "@/app/core/Venda";
import { atualizarVenda, cadastrarVenda, excluirVenda, fetchVendas } from "@/app/service/vendaService";
import { useEffect, useState } from "react";

export default function vendas() {

  const [venda, setVenda] = useState<Venda>(Venda.vazio())
  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')

  const [vendas, setVendas] = useState<Venda[]>([]);

  useEffect(() => {
    if (visivel === 'tabela') {
      const loadVendas = async () => {
        try {
          const dados = await fetchVendas();
          setVendas(dados);
        } catch (error) {
          console.error("Erro ao buscar vendas:", error);
        }
      }

      loadVendas();
    }
  }, [visivel]);


  function vendaSelecionado(venda: Venda) {
    setVenda(venda)
    setVisivel('form')
  }

  async function vendaExcluido(venda: Venda) {
    const confirmacao = window.confirm("Tem certeza de que deseja excluir este venda?");
    if (confirmacao) {
      try {
        if (venda.id !== null) {
          await excluirVenda(venda.id);
        } else {
          console.error("vendaId é null!");
        }
        setVendas(prevVendas => prevVendas.filter(ev => ev.id !== venda.id));
      } catch (error) {
        console.error("Erro ao excluir venda:", error);
      }
    }
  }

  function salvarOuAlterarVenda(venda: Venda) {
    if (venda.id) {
      alterarVenda(venda)
    } else {
      salvarVenda(venda)
    }
  }

  async function alterarVenda(venda: Venda) {
    try {
      const vendaAtualizado = await atualizarVenda(venda);
      setVisivel("tabela");
    } catch (error) {
      console.error("Erro ao atualizar venda:", error);
    }
  }

  async function salvarVenda(venda: Venda) {
    try {
      const novoVenda = await cadastrarVenda(venda);
      setVisivel("tabela");
    } catch (error) {
      console.error("Erro ao salvar venda:", error);
    }
  }

  function novoVenda() {
    setVenda(Venda.vazio())
    setVisivel("form")
  }

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-bl from-indigo-900 via-indigo-400 to-indigo-900
      text-white`}>
      <Layout titulo="Cadastro de vendas">
        {visivel === 'tabela' ? (
          <>
            <div className="flex justify-end">
              <Botao className="mb-4" cor="bg-gradient-to-r from-green-500 to-green-700"
                onClick={() => novoVenda()}>
                Nova Venda
              </Botao>
            </div>
            <div className="overflow-x-auto">
              <Tabela vendas={vendas}
                vendaSelecionada={vendaSelecionado}
                vendaExcluida={vendaExcluido}></Tabela>
            </div>
          </>
        ) : (
          <Formulario venda={venda}
            vendaMudou={salvarOuAlterarVenda}
            cancelado={() => setVisivel('tabela')} />
        )}
      </Layout>
    </div>
  )
}