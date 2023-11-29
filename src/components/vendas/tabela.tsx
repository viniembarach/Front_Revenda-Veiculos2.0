import Venda from "@/app/core/Venda";
import { IconeEdicao, IconeLixo } from "../icones/tabela";

interface TabelaProps {
  vendas: Venda[];
  vendaSelecionada?: (venda: Venda) => void;
  vendaExcluida?: (venda: Venda) => void;
}

export default function Tabela(props: TabelaProps) {
  const exibirAcoes = props.vendaSelecionada || props.vendaExcluida;

  function renderHeader() {
    return (
      <tr>
        <th className="text-left p-3">id</th>
        <th className="text-left p-3">Data da Venda</th>
        <th className="text-left p-3">Veiculo</th>
        <th className="text-left p-3">Cliente</th>
        <th className="text-left p-3">Vendedor</th>
        {exibirAcoes ? <th className="p-3">Ações</th> : false}
      </tr>
    );
  }

  function renderDados() {
  return props.vendas?.map((venda, i) => {
    return (
      <tr key={venda.id} className={`${i % 2 === 0 ? 'bg-indigo-200' : 'bg-indigo-100'}`}>
        <td className="text-left p-3">{venda.id}</td>
        <td className="text-left p-3">{venda.dataVenda}</td>
        <td className="text-left p-3">{venda.veiculo}</td>
        <td className="text-left p-3">{venda.cliente}</td>
        <td className="text-left p-3">{venda.vendedor}</td>
        {exibirAcoes 
        ? renderizarAcoes(venda)
        : false }
      </tr>
    );
  });
}

function renderizarAcoes(venda: Venda) {
    return (
        <td className="flex justify-center">
            {props.vendaSelecionada ? (
                <button onClick={() => props.vendaSelecionada?.(venda)} className={`flex justify-center items
                text-green-600 rounded-full p-2 m-1
                hover:bg-gray-100`}>{IconeEdicao}</button>
            ) : false }
            {props.vendaExcluida ? (
                <button onClick={() => props.vendaExcluida?.(venda)} className={`flex justify-center items
                text-red-600 rounded-full p-2 m-1
                hover:bg-gray-100`}>{IconeLixo}</button>
            ) : false}
        </td>
    )
}

  return (
    <table className="w-full rounded-xl overflow-hidden">
      <thead className={`text-gray-100 bg-gradient-to-r from-indigo-500 to-indigo-800`}>{renderHeader()}</thead>
      <tbody>{renderDados()}</tbody>
    </table>
  );
}
