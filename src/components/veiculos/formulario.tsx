import Veiculo from "@/app/core/Veiculo";
import Entrada from "./entrada";
import { useState } from "react";
import Botao from "./botao";

interface FormularioProps {
    veiculo: Veiculo
    veiculoMudou?: (veiculo: Veiculo) => void
    cancelado?: () => void
}

export default function Formulario(props: FormularioProps) {
    const id = props.veiculo?.id
    const [placa, setPlaca] = useState(props.veiculo?.placa)
    const [nome, setNome] = useState(props.veiculo?.nome)
    const [modelo, setModelo] = useState(props.veiculo?.modelo)
    const [precoCompra, setPrecoCompra] = useState(props.veiculo?.precoCompra)
    const [precoVenda, setPrecoVenda] = useState(props.veiculo?.precoVenda)
    const [anoFabri, setAnoFabri] = useState(props.veiculo?.anoFabri)
    const [anoMod, setAnoMod] = useState(props.veiculo?.anoMod)
    const [cor, setCor] = useState(props.veiculo?.cor)
    const [kmRodado, setKmRodado] = useState(props.veiculo?.kmRodado)
    const [fabricante, setFabricante] = useState(props.veiculo?.fabricante)
    const [tipoVeiculo, setTipoVeiculo] = useState(props.veiculo?.tipoVeiculo)
    const [status, setStatus] = useState(props.veiculo?.status)

    return (
        <div style={{ maxHeight: '75vh' }} className="formularios">
            {id ? (<Entrada texto="id" valor={id} somenteLeitura></Entrada>) : false}
            <Entrada texto="Placa" valor={placa} onChange={setPlaca}></Entrada>
            <Entrada texto="Nome" valor={nome} onChange={setNome}></Entrada>
            <Entrada texto="Modelo" valor={modelo} onChange={setModelo}></Entrada>
            <Entrada texto="Preço de Compra" valor={precoCompra} onChange={setPrecoCompra}></Entrada>
            <Entrada texto="Preço de Venda" valor={precoVenda} onChange={setPrecoVenda}></Entrada>
            <Entrada texto="Ano de Fabricação" valor={anoFabri} onChange={setAnoFabri}></Entrada>
            <Entrada texto="Ano de Modelo" valor={anoMod} onChange={setAnoMod}></Entrada>
            <Entrada texto="Cor" valor={cor} onChange={setCor}></Entrada>
            <Entrada texto="KM Rodado" valor={kmRodado} onChange={setKmRodado}></Entrada>
            <Entrada texto="Fabricante" valor={fabricante} onChange={setFabricante}></Entrada>
            <Entrada texto="Tipo do veiculo" valor={tipoVeiculo} onChange={setTipoVeiculo}></Entrada>
            <div className="flex items-center mt-4">
                <label className="text-sm text-gray-600">Status:</label>
                <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    className="ml-2 p-2 border border-gray-300 rounded-md"
                >
                    <option value="EMESTOQUE">Disponivel</option>
                    <option value="VENDIDO">Vendido</option>
                </select>
            </div>
            <div className="flex justify-end mt-5">
                <Botao className="mr-3" cor="bg-gradient-to-r from-blue-500 to-blue-700"
                    onClick={() => props.veiculoMudou?.(new Veiculo(
                        id, placa, nome, modelo, precoCompra, precoVenda, anoFabri, anoMod, cor, kmRodado, fabricante, tipoVeiculo, status))}>
                    {id ? 'Alterar' : 'Salvar'}
                </Botao>
                <Botao cor="bg-gradient-to-r from-gray-500 to-gray-700"
                    onClick={props.cancelado}>
                    Cancelar
                </Botao>
            </div>
        </div>
    )
}