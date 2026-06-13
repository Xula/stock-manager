import type { MenuProps } from "antd";

export const menuItems: MenuProps["items"] = [
  {
    label: "Produtos",
    key: "/produtos",
    children: [
      { label: "Opção 1", key: "/produtos/opcao-1" },
      { label: "Opção 2", key: "/produtos/opcao-2" },
    ],
  },
  {
    label: "Unidades de Medida",
    key: "/unidades-de-medida",
    children: [
      { label: "Opção 1", key: "/unidades-de-medida/opcao-1" },
      { label: "Opção 2", key: "/unidades-de-medida/opcao-2" },
    ],
  },
  {
    label: "Estoque",
    key: "/estoque",
    children: [
      { label: "Opção 1", key: "/estoque/opcao-1" },
      { label: "Opção 2", key: "/estoque/opcao-2" },
    ],
  },
  {
    label: "Clientes",
    key: "/clientes",
    children: [
      { label: "Opção 1", key: "/clientes/opcao-1" },
      { label: "Opção 2", key: "/clientes/opcao-2" },
    ],
  },
  {
    label: "Fornecedores",
    key: "/fornecedores",
    children: [
      { label: "Opção 1", key: "/fornecedores/opcao-1" },
      { label: "Opção 2", key: "/fornecedores/opcao-2" },
    ],
  },
  {
    label: "Usuário",
    key: "/usuario",
    children: [
      { label: "Opção 1", key: "/usuario/opcao-1" },
      { label: "Opção 2", key: "/usuario/opcao-2" },
    ],
  },
  {
    label: "Categorias",
    key: "/categorias",
    children: [
      { label: "Opção 1", key: "/categorias/opcao-1" },
      { label: "Opção 2", key: "/categorias/opcao-2" },
    ],
  },
  {
    label: "Marcas",
    key: "/marcas",
    children: [
      { label: "Opção 1", key: "/marcas/opcao-1" },
      { label: "Opção 2", key: "/marcas/opcao-2" },
    ],
  },
  {
    label: "Métodos de pagamento",
    key: "/metodos-de-pagamento",
    children: [
      { label: "Opção 1", key: "/metodos-de-pagamento/opcao-1" },
      { label: "Opção 2", key: "/metodos-de-pagamento/opcao-2" },
    ],
  },
  {
    label: "Movimentações",
    key: "/movimentacoes",
    children: [
      { label: "Opção 1", key: "/movimentacoes/opcao-1" },
      { label: "Opção 2", key: "/movimentacoes/opcao-2" },
    ],
  },
  {
    label: "Ordens de Serviço",
    key: "/ordens-de-servico",
    children: [
      { label: "Opção 1", key: "/ordens-de-servico/opcao-1" },
      { label: "Opção 2", key: "/ordens-de-servico/opcao-2" },
    ],
  },
];
