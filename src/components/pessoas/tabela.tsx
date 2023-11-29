import Pessoa from "@/app/core/Pessoa";
import { IconeEdicao, IconeLixo } from "../icones/tabela";

interface TabelaProps {
    pessoas: Pessoa[];
    pessoaSelecionada?: (pessoa: Pessoa) => void;
    pessoaExcluida?: (pessoa: Pessoa) => void;
}

export default function Tabela(props: TabelaProps) {
    const exibirAcoes = props.pessoaSelecionada || props.pessoaExcluida;

    function renderHeader() {
        return (
            <tr>
                <th className="text-left p-3">id</th>
                <th className="text-left p-3">CPF/CNPJ</th>
                <th className="text-left p-3">Nome</th>
                <th className="text-left p-3">Telefone</th>
                <th className="text-left p-3">Cidade</th>
                <th className="text-left p-3">Endereço</th>
                <th className="text-left p-3">Senha</th>
                <th className="text-left p-3">Email</th>
                <th className="text-left p-3">Tipo</th>
                <th className="text-left p-3">Role</th>
                {exibirAcoes ? <th className="p-3">Ações</th> : false}
            </tr>
        );
    }

    function renderDados() {
        return props.pessoas?.map((pessoa, i) => {
            return (
                <tr key={pessoa.id} className={`${i % 2 === 0 ? 'bg-indigo-200' : 'bg-indigo-100'} `}>
                    <td className="text-left p-3">{pessoa.id}</td>
                    <td className="text-left p-3">{pessoa.cpfoucnpj}</td>
                    <td className="text-left p-3">{pessoa.nome}</td>
                    <td className="text-left p-3">{pessoa.telefone}</td>
                    <td className="text-left p-3">{pessoa.cidade}</td>
                    <td className="text-left p-3">{pessoa.endereco}</td>
                    <td className="text-left p-3">{pessoa.senha}</td>
                    <td className="text-left p-3">{pessoa.email}</td>
                    <td className="text-left p-3">{pessoa.tipo}</td>
                    <td className="text-left p-3">{pessoa.role}</td>
                    {exibirAcoes ? renderizarAcoes(pessoa) : false}
                </tr>
            );
        });
    }

    function renderizarAcoes(pessoa: Pessoa) {
        return (
            <td className="flex justify-center">
                {props.pessoaSelecionada ? (
                    <button
                        onClick={() => props.pessoaSelecionada?.(pessoa)}
                        className={`flex justify-center items
                        text-green-600 rounded-full p-2 m-1
                        hover:bg-gray-100`}
                    >
                        {IconeEdicao}
                    </button>
                ) : false}
                {props.pessoaExcluida ? (
                    <button
                        onClick={() => props.pessoaExcluida?.(pessoa)}
                        className={`flex justify-center items
                        text-red-600 rounded-full p-2 m-1
                        hover:bg-gray-100`}
                    >
                        {IconeLixo}
                    </button>
                ) : false}
            </td>
        );
    }

    return (
        <table className="w-full rounded-xl overflow-hidden">
            <thead className={`text-gray-100
            bg-gradient-to-r from-indigo-500 to-indigo-800`}>
                {renderHeader()}
            </thead>
            <tbody>{renderDados()}</tbody>
        </table>
    );
}
