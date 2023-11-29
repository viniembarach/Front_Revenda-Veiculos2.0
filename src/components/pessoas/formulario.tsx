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
        <div style={{ maxHeight: '75vh' }} className="overflow-y-auto">
            {id ? (<Entrada texto="id" valor={id} somenteLeitura></Entrada>) : false}
            <Entrada texto="CPF/CNPJ" valor={cpfoucnpj} onChange={setCpfoucnpj}></Entrada>
            <Entrada texto="Nome" valor={nome} onChange={setNome}></Entrada>
            <Entrada texto="Telefone" valor={telefone} onChange={setTelefone}></Entrada>
            <Entrada texto="Cidade" valor={cidade} onChange={setCidade}></Entrada>
            <Entrada texto="Endereço" valor={endereco} onChange={setEndereco}></Entrada>
            <Entrada texto="Senha" valor={senha} onChange={setSenha}></Entrada>
            <Entrada texto="Email" valor={email} onChange={setEmail}></Entrada>
            <div className="flex items-center mt-4">
                <label className="text-sm text-gray-600">Tipo:</label>
                <select
                value={tipo}
                onChange={(e) => setTipo(e.target.value)}
                className="ml-2 p-2 border border-gray-300 rounded-md"
                >
                <option value="CLIENTE">Cliente</option>
                <option value="VENDEDOR">Vendedor</option>
                </select>
            </div>
            <div className="flex items-center mt-4">
                <label className="text-sm text-gray-600">Role:</label>
                <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="ml-2 p-2 border border-gray-300 rounded-md"
                >
                <option value="ADMIN">Admin</option>
                <option value="USER">User</option>
                {/* Adicione outras opções conforme necessário */}
                </select>
            </div>
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
