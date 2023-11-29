import Venda from "@/app/core/Venda";
import Entrada from "./entrada";
import { useState } from "react";
import { stringParaEntradaDeData } from "@/app/utils/converters";
import Botao from "./botao";

interface FormularioProps {
    venda: Venda
    vendaMudou?: (venda: Venda) => void
    cancelado?: () => void
}

export default function Formulario(props: FormularioProps) {
    const id = props.venda?.id
    const [dataVenda, setDataVenda] = useState(props.venda?.dataVenda)
    const [veiculo, setVeiculo] = useState(props.venda?.veiculo)
    const [cliente, setCliente] = useState(props.venda?.cliente)
    const [vendedor, setVendedor] = useState(props.venda?.vendedor)

    return (
        <div>
            {id ? (<Entrada texto="id" valor={id} somenteLeitura></Entrada>) : false}
            <Entrada texto="Data da Venda" tipo="date" valor={stringParaEntradaDeData(dataVenda)} onChange={setDataVenda}></Entrada>
            <Entrada texto="Veiculo" valor={veiculo} onChange={setVeiculo}></Entrada>
            <Entrada texto="Cliente" valor={cliente} onChange={setCliente}></Entrada>
            <Entrada texto="Vendedor" valor={vendedor} onChange={setVendedor}></Entrada>
            <div className="flex justify-end mt-5">
                <Botao className="mr-3" cor="bg-gradient-to-r from-blue-500 to-blue-700"
                    onClick={() => props.vendaMudou?.(new Venda(
                        id, dataVenda, veiculo, cliente, vendedor))}>
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