import Titulo from "./titulo";

interface LayoutProps {
    titulo: string;
    children: any;
}

export default function Layout(props: LayoutProps) {
    return (
        <div className={`layout`}>
            <Titulo>{props.titulo}</Titulo>
            <div className="p-5">
                {props.children}
            </div>
        </div>
    );
}
