import React from "react";
export default function Navbar(props: any) {
return (
<>
 <nav className="font-sans flex flex-col text-center sm:flex-row sm:text-left
 sm:justify-between py-4 px-6 bg-gray-800 text-stone-100 shadow
 sm:items-baseline w-full">
 <div className="titulo_nav_bar">Sistema de revenda de Veiculos</div>
 <div>
 <a href="/" className="opcao_navbar">
 Home |</a>
 <a href="/veiculos" className="opcao_navbar">
 Veiculos |</a>
 <a href="/pessoas" className="opcao_navbar">
 Pessoas |</a>
 <a href="/vendas" className="opcao_navbar">
 Vendas </a>

</div>
 </nav>
</>);}