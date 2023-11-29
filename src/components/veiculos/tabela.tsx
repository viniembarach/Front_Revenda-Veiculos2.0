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
                <th className="text-left p-3">id</th>
                <th className="text-left p-3">placa</th>
                <th className="text-left p-3">nome</th>
                <th className="text-left p-3">modelo</th>
                <th className="text-left p-3">Preço de Compra</th>
                <th className="text-left p-3">Preço de Venda</th>
                <th className="text-left p-3">Ano de Fabricação</th>
                <th className="text-left p-3">Ano de Modelo</th>
                <th className="text-left p-3">Cor</th>
                <th className="text-left p-3">KM Rodado</th>
                <th className="text-left p-3">Fabricante</th>
                <th className="text-left p-3">Tipo de veiculo</th>
                <th className="text-left p-3">status</th>
                {exibirAcoes ? <th className="p-3">Ações</th> : false}
            </tr>
        )
    }

    function renderDados() {
        return props.veiculos?.map((veiculo, i) => {
            return (
                <tr key={veiculo.id}
                    className={`${i % 2 === 0 ? 'bg-indigo-200' : 'bg-indigo-100'} `}>
                    <td className="text-left p-3">{veiculo.id}</td>
                    <td className="text-left p-3">{veiculo.placa}</td>
                    <td className="text-left p-3">{veiculo.nome}</td>
                    <td className="text-left p-3">{veiculo.modelo}</td>
                    <td className="text-left p-3">{veiculo.precoCompra}</td>
                    <td className="text-left p-3">{veiculo.precoVenda}</td>
                    <td className="text-left p-3">{veiculo.anoFabri}</td>
                    <td className="text-left p-3">{veiculo.anoMod}</td>
                    <td className="text-left p-3">{veiculo.cor}</td>
                    <td className="text-left p-3">{veiculo.kmRodado}</td>
                    <td className="text-left p-3">{veiculo.fabricante}</td>
                    <td className="text-left p-3">{veiculo.tipoVeiculo}</td>
                    <td className="text-left p-3">{veiculo.status}</td>
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
                    <button onClick={() => props.veiculoSelecionado?.(veiculo)} className={`flex justify-center items
                    text-green-600 rounded-full p-2 m-1
                    hover:bg-gray-100`}>{IconeEdicao}</button>
                ) : false }
                {props.veiculoExcluido ? (
                    <button onClick={() => props.veiculoExcluido?.(veiculo)} className={`flex justify-center items
                    text-red-600 rounded-full p-2 m-1
                    hover:bg-gray-100`}>{IconeLixo}</button>
                ) : false}
            </td>
        )
    }

    return (
        <table className="w-full rounded-xl overflow-hidden">
            <thead className={`text-gray-100
            bg-gradient-to-r from-indigo-500 to-indigo-800`}>
                {renderHeader()}
            </thead>
            <tbody>
                {renderDados()}
            </tbody>
        </table>
    )
}