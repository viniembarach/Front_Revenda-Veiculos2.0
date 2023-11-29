'use client';
import Botao from "@/components/veiculos/botao";
import Formulario from "@/components/veiculos/formulario";
import Layout from "@/components/veiculos/layout";
import Tabela from "@/components/veiculos/tabela";
import Veiculo from "@/app/core/Veiculo";
import { atualizarVeiculo, cadastrarVeiculo, excluirVeiculo, fetchVeiculos } from "@/app/service/veiculoService";
import { useEffect, useState } from "react";

export default function Veiculos() {

  const [veiculo, setVeiculo] = useState<Veiculo>(Veiculo.vazio())
  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')

  const [veiculos, setVeiculos] = useState<Veiculo[]>([]);

  useEffect(() => {
    if (visivel === 'tabela') {
      const loadVeiculos = async () => {
        try {
          const dados = await fetchVeiculos();
          setVeiculos(dados);
        } catch (error) {
          console.error("Erro ao buscar veiculos:", error);
        }
      }

      loadVeiculos();
    }
  }, [visivel]);


  function veiculoSelecionado(veiculo: Veiculo) {
    setVeiculo(veiculo)
    setVisivel('form')
  }

  async function veiculoExcluido(veiculo: Veiculo) {
    const confirmacao = window.confirm("Tem certeza de que deseja excluir este Veiculo?");
    if (confirmacao) {
      try {
        if (veiculo.id !== null) {
          await excluirVeiculo(veiculo.id);
        } else {
          console.error("veiculoId é null!");
        }
        setVeiculos(prevVeiculos => prevVeiculos.filter(ev => ev.id !== veiculo.id));
      } catch (error) {
        console.error("Erro ao excluir veiculo:", error);
      }
    }
  }

  function salvarOuAlterarVeiculo(veiculo: Veiculo) {
    if (veiculo.id) {
      alterarVeiculo(veiculo)
    } else {
      salvarVeiculo(veiculo)
    }
  }

  async function alterarVeiculo(veiculo: Veiculo) {
    try {
      const veiculoAtualizado = await atualizarVeiculo(veiculo);
      setVisivel("tabela");
    } catch (error) {
      console.error("Erro ao atualizar veiculo:", error);
    }
  }

  async function salvarVeiculo(veiculo: Veiculo) {
    try {
      const novoVeiculo = await cadastrarVeiculo(veiculo);
      setVisivel("tabela");
    } catch (error) {
      console.error("Erro ao salvar veiculo:", error);
    }
  }

  function novoVeiculo() {
    setVeiculo(Veiculo.vazio())
    setVisivel("form")
  }

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-bl from-indigo-900 via-indigo-400 to-indigo-900
      text-white`}>
      <Layout titulo="Cadastro de veiculos">
        {visivel === 'tabela' ? (
          <>
            <div className="flex justify-end">
              <Botao className="mb-4" cor="bg-gradient-to-r from-green-500 to-green-700"
                onClick={() => novoVeiculo()}>
                Novo veiculo
              </Botao>
            </div>
            <div className="overflow-x-auto">
              <Tabela veiculos={veiculos}
                veiculoSelecionado={veiculoSelecionado}
                veiculoExcluido={veiculoExcluido}></Tabela>
            </div>
          </>
        ) : (
          <Formulario veiculo={veiculo}
            veiculoMudou={salvarOuAlterarVeiculo}
            cancelado={() => setVisivel('tabela')} />
        )}
      </Layout>
    </div>
  )
}