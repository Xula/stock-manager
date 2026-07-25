"use client";

import { useState } from "react";
import { Card, Typography, Table, Button, Modal, Space, message } from "antd";
import type { ColumnsType } from "antd/es/table";
import { useRouter } from "next/navigation";

const { Title, Text } = Typography;

interface EstoqueItem {
  id: number;
  produto: string;
  quantidade: number;
  precoCompra: number;
  precoVenda: number;
}

// a ideia é que a gente puxe também a unidade de medida do produto e apresente na tabela
// por exemplo, para o caso de um produto "fio de cobre", a quantidade seria "50" + "unidade de medida" (50 metros).
const ESTOQUE_ITEMS: EstoqueItem[] = [
  {
    id: 1,
    produto: "Smartphone Samsung Galaxy",
    quantidade: 50,
    precoCompra: 1200.0,
    precoVenda: 1899.9,
  },
  {
    id: 2,
    produto: "Teclado Mecanico",
    quantidade: 120,
    precoCompra: 85.5,
    precoVenda: 149.9,
  },
  {
    id: 3,
    produto: "Monitor 24 polegadas",
    quantidade: 30,
    precoCompra: 650.0,
    precoVenda: 999.9,
  },
  {
    id: 4,
    produto: "Mouse Gamer",
    quantidade: 200,
    precoCompra: 45.0,
    precoVenda: 89.9,
  },
  {
    id: 5,
    produto: "Notebook Dell",
    quantidade: 15,
    precoCompra: 3200.0,
    precoVenda: 4599.9,
  },
];

function formatarReal(valor: number): string {
  return `R$ ${valor.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

export default function ListarEstoquePage() {
  const router = useRouter();
  const [itens, setItens] = useState<EstoqueItem[]>(ESTOQUE_ITEMS);
  const [modalAberto, setModalAberto] = useState(false);
  const [itemSelecionado, setItemSelecionado] = useState<EstoqueItem | null>(
    null,
  );

  const handleRemover = (item: EstoqueItem) => {
    setItemSelecionado(item);
    setModalAberto(true);
  };

  const handleConfirmarRemocao = () => {
    if (itemSelecionado) {
      setItens((prev) => prev.filter((i) => i.id !== itemSelecionado.id));
      message.success("Item removido com sucesso!");
    }
    setModalAberto(false);
    setItemSelecionado(null);
  };

  const handleCancelarRemocao = () => {
    setModalAberto(false);
    setItemSelecionado(null);
  };

  const columns: ColumnsType<EstoqueItem> = [
    { title: "Produto", dataIndex: "produto", key: "produto" },
    { title: "Quantidade", dataIndex: "quantidade", key: "quantidade" },
    {
      title: "Preco de Compra",
      dataIndex: "precoCompra",
      key: "precoCompra",
      render: (valor: number) => formatarReal(valor),
    },
    {
      title: "Preco de Venda",
      dataIndex: "precoVenda",
      key: "precoVenda",
      render: (valor: number) => formatarReal(valor),
    },
    {
      title: "Ações",
      key: "acoes",
      render: (_, record) => (
        <Space>
          <Button type="link" onClick={() => router.push("/estoque/editar")}>
            Editar
          </Button>
          <Button type="link" danger onClick={() => handleRemover(record)}>
            Remover
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <div className="flex items-start justify-center min-h-full p-6">
      <Card className="w-full max-w-4xl">
        <Title level={2}>Estoque</Title>
        <Table
          dataSource={itens}
          columns={columns}
          rowKey="id"
          pagination={false}
        />

        <Modal
          title="Confirmar remocao"
          open={modalAberto}
          onOk={handleConfirmarRemocao}
          onCancel={handleCancelarRemocao}
          okText="Confirmar"
          cancelText="Cancelar"
          okButtonProps={{ danger: true }}
        >
          {itemSelecionado && (
            <div>
              <Text strong>Produto: </Text>
              <Text>{itemSelecionado.produto}</Text>
              <br />
              <Text strong>Quantidade: </Text>
              <Text>{itemSelecionado.quantidade}</Text>
              <br />
              <Text strong>Preco de Compra: </Text>
              <Text>{formatarReal(itemSelecionado.precoCompra)}</Text>
              <br />
              <Text strong>Preco de Venda: </Text>
              <Text>{formatarReal(itemSelecionado.precoVenda)}</Text>
            </div>
          )}
        </Modal>
      </Card>
    </div>
  );
}
