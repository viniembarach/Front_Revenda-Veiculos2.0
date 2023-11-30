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
                <th className="text-left p-3">ID</th>
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
                <tr key={pessoa.id} className={`${i % 2 === 0 ? 'tabela_ap' : 'tabela_ap'} `}>
                    <td className="info_tabelas">{pessoa.id}</td>
                    <td className="info_tabelas">{pessoa.cpfoucnpj}</td>
                    <td className="info_tabelas">{pessoa.nome}</td>
                    <td className="info_tabelas">{pessoa.telefone}</td>
                    <td className="info_tabelas">{pessoa.cidade}</td>
                    <td className="info_tabelas">{pessoa.endereco}</td>
                    <td className="info_tabelas">{pessoa.senha}</td>
                    <td className="info_tabelas">{pessoa.email}</td>
                    <td className="info_tabelas">{pessoa.tipo}</td>
                    <td className="info_tabelas">{pessoa.role}</td>
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
                        className={`botao_edicao`}
                    >
                        {IconeEdicao}
                    </button>
                ) : false}
                {props.pessoaExcluida ? (
                    <button
                        onClick={() => props.pessoaExcluida?.(pessoa)}
                        className={`botao_remover`}
                    >
                        {IconeLixo}
                    </button>
                ) : false}
            </td>
        );
    }

    return (
        <table className="tabela_separacao">
            <thead className={`tabela_cabecalho`}>
                {renderHeader()}
            </thead>
            <tbody>{renderDados()}</tbody>
        </table>
    );
}
