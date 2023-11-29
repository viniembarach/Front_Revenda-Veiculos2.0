import Pessoa from "@/app/core/Pessoa";
import Entrada from "./entrada";
import { useState } from "react";
import Botao from "./botao";

interface FormularioProps {
    pessoa: Pessoa
    pessoaMudou?: (pessoa: Pessoa) => void
    cancelado?: () => void
}

export default function Formulario(props: FormularioProps) {
    const id = props.pessoa?.id
    const [cpfoucnpj, setCpfoucnpj] = useState(props.pessoa?.cpfoucnpj)
    const [nome, setNome] = useState(props.pessoa?.nome)
    const [telefone, setTelefone] = useState(props.pessoa?.telefone)
    const [cidade, setCidade] = useState(props.pessoa?.cidade)
    const [endereco, setEndereco] = useState(props.pessoa?.endereco)
    const [senha, setSenha] = useState(props.pessoa?.senha)
    const [email, setEmail] = useState(props.pessoa?.email)
    const [tipo, setTipo] = useState(props.pessoa?.tipo)
    const [role, setRole] = useState(props.pessoa?.role)

    return (
        <div>
            {id ? (<Entrada texto="id" valor={id} somenteLeitura></Entrada>) : false}
            <Entrada texto="CPF/CNPJ" valor={cpfoucnpj} onChange={setCpfoucnpj}></Entrada>
            <Entrada texto="Nome" valor={nome} onChange={setNome}></Entrada>
            <Entrada texto="Telefone" valor={telefone} onChange={setTelefone}></Entrada>
            <Entrada texto="Cidade" valor={cidade} onChange={setCidade}></Entrada>
            <Entrada texto="Endereço" valor={endereco} onChange={setEndereco}></Entrada>
            <Entrada texto="Senha" valor={senha} onChange={setSenha}></Entrada>
            <Entrada texto="Email" valor={email} onChange={setEmail}></Entrada>
            <Entrada texto="Tipo" valor={tipo} onChange={setTipo}></Entrada>
            <Entrada texto="Role" valor={role} onChange={setRole}></Entrada>
            <div className="flex justify-end mt-5">
                <Botao className="mr-3" cor="bg-gradient-to-r from-blue-500 to-blue-700"
                    onClick={() => props.pessoaMudou?.(new Pessoa(
                        id, cpfoucnpj, nome, telefone, cidade, endereco, senha, email, tipo, role))}>
                    {id ? 'Alterar' : 'Salvar'}
                </Botao>
                <Botao cor="bg-gradient-to-r from-gray-500 to-gray-700"
                    onClick={props.cancelado}>
                    Cancelar
                </Botao>
            </div>
        </div>
    );
}