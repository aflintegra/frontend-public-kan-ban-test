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
import { CustomDataTable } from "./_components/CustomDataTable";
import { columns } from "./_components/CustomDataTable/columns";

export default function Home() {
  const menus = [
    { icon: <House size={24} />, label: "Página inicial" },
    { icon: <UsersThree size={24} />, label: "Gestão de pessoas" },
    { icon: <Buildings size={24} />, label: "Gestão de empresas" },
    { icon: <PenNib size={24} />, label: "Gestão de projetos" },
    { icon: <Calculator size={24} />, label: "Financeiro" },
    { icon: <Robot size={24} />, label: "Automações" },
  ];

  const companyData = {
    count: 541,
    page: 1,
    limit: 10,
    total_pages: 55,
    results: {
      title: null,
      data: [
        {
          id: "4af06d51-5087-4b21-a1c5-cfb461ecdad5",
          name: "Teste S.A.",
          razao_social: "Teste S.A.",
          createdat: "2025-02-13T14:10:19.951000Z",
          cnpj: "00.000.000/0001",
          group_name: null,
        },
        {
          id: "75956273-693f-4837-8fc0-d3f53df68425",
          name: "Teste Fluxo Contas a receber",
          razao_social: "Teste Fluxo Contas a receber",
          createdat: "2025-02-10T13:29:17.761000Z",
          cnpj: "00.000.000/0002",
          group_name: null,
        },
        {
          id: "2a92cece-91b6-4811-aa43-ed553e5c7eb8",
          name: "Empresa",
          razao_social: "Empresa",
          createdat: "2025-02-04T20:32:05.315000Z",
          cnpj: "00.000.000/0003",
          status: "inactive",
          group_name: null,
        },
        {
          id: "4981adee-4d8e-4041-a4be-8f3cfbe90f3d",
          name: "Compania teste",
          razao_social: "Compania teste S.a.",
          createdat: "2025-02-04T14:52:54.101000Z",
          cnpj: "00.000.000/0004",
          status: "inactive",
          group_name: null,
        },
        {
          id: "5312e44a-3ae1-4653-8d67-c4cded7d57e2",
          name: "Testes",
          razao_social: "Testes",
          createdat: "2025-01-22T17:16:05.588000Z",
          cnpj: "00.000.000/0005",
          group_name: null,
        },
        {
          id: "92e65ab4-62b6-493e-85e7-f8c9866c8b7f",
          name: "Uma empresa de Teste",
          razao_social: "Uma empresa de Teste",
          createdat: "2025-01-21T18:23:44.428000Z",
          cnpj: "00.000.000/0006",
          group_name: null,
        },
        {
          id: "02f931a2-3d71-4489-88f7-f07abcbd7bfa",
          name: "Empresa T.S.",
          razao_social: "Empresa T.S.",
          createdat: "2025-01-21T16:14:52.371000Z",
          cnpj: "00.000.000/0007",
          group_name: null,
        },
        {
          id: "42e1f623-41b9-4841-8fba-df858510dfdf",
          name: "Testes de Empresa",
          razao_social: "Testes de Empresa",
          createdat: "2025-01-13T13:35:50.917000Z",
          cnpj: "00.000.000/0008",
          group_name: null,
        },
        {
          id: "6dc75a08-a79e-4411-8c89-7270ee2fba4c",
          name: "Teste de Compania",
          razao_social: "Teste de Compania",
          createdat: "2025-01-08T14:07:29.281000Z",
          cnpj: "00.000.000/0009",
          group_name: null,
        },
        {
          id: "b2073e41-cfae-4280-8409-66f2a195004d",
          name: "AFL Consultores",
          razao_social: "AFL Consultores",
          createdat: "2024-12-23T20:28:51.762000Z",
          cnpj: "00.000.000/0010",
          group_name: null,
        },
      ],
    },
  };

  const handleOpenKanBan = () => {
    // lógica que leva a página do kan-ban
  };

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
        <div className="px-10 pt-12 pb-6 h-[90%] flex flex-col gap-12">
          <p className="text-lg font-medium">Página inicial</p>
          <div className="border border-y border-gray-300 rounded-lg">
            <CustomDataTable
              className="rounded-lg border-none"
              key={1}
              totalRows={50}
              columns={columns({
                handleOpenKanBan,
              })}
              data={companyData?.results?.data || []}
              rowCount={companyData?.count || 0}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
