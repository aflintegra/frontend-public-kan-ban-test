"use client";

import {
  Buildings,
  Calculator,
  House,
  PenNib,
  Robot,
  UsersThree,
} from "@phosphor-icons/react";
import Image from "next/image";

export default function Home() {
  const menus = [
    { icon: <House size={24} />, label: "Página inicial" },
    { icon: <UsersThree size={24} />, label: "Gestão de pessoas" },
    { icon: <Buildings size={24} />, label: "Gestão de empresas" },
    { icon: <PenNib size={24} />, label: "Gestão de projetos" },
    { icon: <Calculator size={24} />, label: "Financeiro" },
    { icon: <Robot size={24} />, label: "Automações" },
  ];

  return (
    <div className="flex h-screen">
      <aside className="w-[24%] h-full p-4 border border-r-gray-200 flex flex-col">
        <div className="w-full flex justify-center">
          <Image
            src="./afl-logo.svg"
            alt={"Logo AFL"}
            width={150}
            height={16}
          />
        </div>
        <ul className="flex flex-col px-6 pt-10 gap-3 text-gray-500/80 font-semibold">
          {menus.map((menu, index) => (
            <li key={index} className="flex gap-4 py-2">
              <span>{menu.icon}</span>
              {menu.label}
            </li>
          ))}
        </ul>
      </aside>
      <main className="w-full">
        <header className="w-full flex justify-end px-4 py-2 border border-b-gray-200 border-x-0">
          <div className="w-12 h-12 bg-green-300 rounded-full"></div>
        </header>
        <div className="px-10 pt-12 pb-6">
          <p className="text-lg font-medium">Página inicial</p>
          <h2></h2>
        </div>
      </main>
    </div>
  );
}
