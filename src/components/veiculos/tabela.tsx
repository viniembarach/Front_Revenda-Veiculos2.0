import Veiculo from "@/app/core/Veiculo"
import { IconeEdicao, IconeLixo } from "../icones/tabela"

interface TabelaProps {
    veiculos: Veiculo[]
    veiculoSelecionado?: (veiculo: Veiculo) => void
    veiculoExcluido?: (veiculo: Veiculo) => void
}

export default function Tabela(props: TabelaProps) {
    
    const exibirAcoes = props.veiculoSelecionado || props.veiculoExcluido

    function renderHeader() {
        return (
            <tr>
                <th className="info_tabelas">ID</th>
                <th className="info_tabelas">Placa</th>
                <th className="info_tabelas">Nome</th>
                <th className="info_tabelas">Modelo</th>
                <th className="info_tabelas">Preço de Compra</th>
                <th className="info_tabelas">Preço de Venda</th>
                <th className="info_tabelas">Ano de Fabricação</th>
                <th className="info_tabelas">Ano de Modelo</th>
                <th className="info_tabelas">Cor</th>
                <th className="info_tabelas">KM Rodado</th>
                <th className="info_tabelas">Fabricante</th>
                <th className="info_tabelas">Tipo de veiculo</th>
                <th className="info_tabelas">Status</th>
                {exibirAcoes ? <th className="p-3">Ações</th> : false}
            </tr>
        )
    }

    function renderDados() {
        return props.veiculos?.map((veiculo, i) => {
            return (
                <tr key={veiculo.id}
                    className={`${i % 2 === 0 ? 'tabela_ap' : 'tabela_ap'} `}>
                    <td className="info_tabelas">{veiculo.id}</td>
                    <td className="info_tabelas">{veiculo.nome}</td>
                    <td className="info_tabelas">{veiculo.placa}</td>
                    <td className="info_tabelas">{veiculo.modelo}</td>
                    <td className="info_tabelas">{veiculo.precoCompra}</td>
                    <td className="info_tabelas">{veiculo.precoVenda}</td>
                    <td className="info_tabelas">{veiculo.anoFabri}</td>
                    <td className="info_tabelas">{veiculo.anoMod}</td>
                    <td className="info_tabelas">{veiculo.cor}</td>
                    <td className="info_tabelas">{veiculo.kmRodado}</td>
                    <td className="info_tabelas">{veiculo.fabricante}</td>
                    <td className="info_tabelas">{veiculo.tipoVeiculo}</td>
                    <td className="info_tabelas">{veiculo.status}</td>
                    {exibirAcoes 
                    ? renderizarAcoes(veiculo)
                    : false }
                </tr>
            )
        })
    }

    function renderizarAcoes(veiculo: Veiculo) {
        return (
            <td className="flex justify-center">
                {props.veiculoSelecionado ? (
                    <button onClick={() => props.veiculoSelecionado?.(veiculo)} className={`botao_edicao`}>{IconeEdicao}</button>
                ) : false }
                {props.veiculoExcluido ? (
                    <button onClick={() => props.veiculoExcluido?.(veiculo)} className={`botao_remover`}>{IconeLixo}</button>
                ) : false}
            </td>
        )
    }

    return (
        <table className="tabela_separacao">
            <thead className={`tabela_cabecalho`}>
                {renderHeader()}
            </thead>
            <tbody>
                {renderDados()}
            </tbody>
        </table>
    )
}