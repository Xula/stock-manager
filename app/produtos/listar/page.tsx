"use client";

import { Card, Typography, Table, Button } from "antd";
import type { ColumnsType } from "antd/es/table";
import { useRouter } from "next/navigation";

const { Title } = Typography;

interface Produto {
  id: number;
  nome: string;
  categoria: string;
  marca: string;
  unidadeMedida: string;
}

const PRODUTOS: Produto[] = [
  { id: 1, nome: "Smartphone Galaxy S24", categoria: "Eletrônicos", marca: "Samsung", unidadeMedida: "Unidade (UN)" },
  { id: 2, nome: "Camiseta Dry-Fit", categoria: "Vestuário", marca: "Nike", unidadeMedida: "Unidade (UN)" },
  { id: 3, nome: "Leite Integral 1L", categoria: "Alimentos", marca: "Nestlé", unidadeMedida: "Litro (L)" },
  { id: 4, nome: "Detergente Neutro", categoria: "Limpeza", marca: "Unilever", unidadeMedida: "Unidade (UN)" },
  { id: 5, nome: "Refrigerante Cola 2L", categoria: "Bebidas", marca: "Genérica", unidadeMedida: "Litro (L)" },
];

export default function ListarProdutosPage() {
  const router = useRouter();

  const columns: ColumnsType<Produto> = [
    { title: "Nome", dataIndex: "nome", key: "nome" },
    { title: "Categoria", dataIndex: "categoria", key: "categoria" },
    { title: "Marca", dataIndex: "marca", key: "marca" },
    { title: "Unidade de Medida", dataIndex: "unidadeMedida", key: "unidadeMedida" },
    {
      title: "Ações",
      key: "acoes",
      render: () => (
        <Button type="link" onClick={() => router.push("/produtos/editar")}>
          Editar
        </Button>
      ),
    },
  ];

  return (
    <div className="flex items-start justify-center min-h-full p-6">
      <Card className="w-full max-w-4xl">
        <Title level={2}>Listar Produtos</Title>
        <Table
          dataSource={PRODUTOS}
          columns={columns}
          rowKey="id"
          pagination={false}
        />
      </Card>
    </div>
  );
}
