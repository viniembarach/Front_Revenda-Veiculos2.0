import React from "react";
export default function Navbar(props: any) {
return (
<>
 <nav className="font-sans flex flex-col text-center sm:flex-row sm:text-left
 sm:justify-between py-4 px-6 bg-gray-800 text-stone-100 shadow
 sm:items-baseline w-full">
 <div className="mb-2 sm:mb-0">Sistema de revenda de Veiculos</div>
 <div>
 <a href="/" className="text-lg no-underline hover:text-amber-300 ml-2">
 Home</a>
 <a href="/veiculos" className="text-lg no-underline hover:text-amber-300 ml-2">
 Veiculos</a></div>
 </nav>
</>);}