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
        <th className="info_tabelas">id</th>
        <th className="info_tabelas">Data da Venda</th>
        <th className="info_tabelas">Veiculo</th>
        <th className="info_tabelas">Cliente</th>
        <th className="info_tabelas">Vendedor</th>
        {exibirAcoes ? <th className="p-3">Ações</th> : false}
      </tr>
    );
  }

  function renderDados() {
  return props.vendas?.map((venda, i) => {
    return (
      <tr key={venda.id} className={`${i % 2 === 0 ? 'tabela_ap' : 'tabela_ap'}`}>
        <td className="info_tabelas">{venda.id}</td>
        <td className="info_tabelas">{venda.dataVenda}</td>
        <td className="info_tabelas">{venda.veiculo}</td>
        <td className="info_tabelas">{venda.cliente}</td>
        <td className="info_tabelas">{venda.vendedor}</td>
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
                <button onClick={() => props.vendaSelecionada?.(venda)} className={`botao_edicao`}>{IconeEdicao}</button>
            ) : false }
            {props.vendaExcluida ? (
                <button onClick={() => props.vendaExcluida?.(venda)} className={`botao_remover`}>{IconeLixo}</button>
            ) : false}
        </td>
    )
}

  return (
    <table className="tabela_separacao">
      <thead className={`tabela_cabecalho`}>{renderHeader()}</thead>
      <tbody>{renderDados()}</tbody>
    </table>
  );
}
