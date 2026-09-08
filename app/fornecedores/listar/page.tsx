"use client";

import { useState } from "react";
import { Card, Typography, Table, Button, Modal, Space, message } from "antd";
import type { ColumnsType } from "antd/es/table";
import { useRouter } from "next/navigation";

const { Title, Text } = Typography;

interface Fornecedor {
  id: number;
  nome: string;
  cnpj: string;
  telefone: string;
  email: string;
}

const FORNECEDORES: Fornecedor[] = [
  {
    id: 1,
    nome: "Distribuidora Alfa LTDA",
    cnpj: "12.345.678/0001-90",
    telefone: "(11) 4002-8922",
    email: "contato@alfa.com.br",
  },
  {
    id: 2,
    nome: "Comercio Beta EIRELI",
    cnpj: "98.765.432/0001-10",
    telefone: "(21) 3456-7890",
    email: "vendas@beta.com.br",
  },
  {
    id: 3,
    nome: "Industria Gamma S.A.",
    cnpj: "45.678.123/0001-45",
    telefone: "(31) 3344-5566",
    email: "comercial@gamma.com.br",
  },
  {
    id: 4,
    nome: "Atacado Delta LTDA",
    cnpj: "78.901.234/0001-67",
    telefone: "(41) 3232-1414",
    email: "pedidos@delta.com.br",
  },
  {
    id: 5,
    nome: "Logistica Epsilon ME",
    cnpj: "23.456.789/0001-12",
    telefone: "(51) 3234-9876",
    email: "contato@epsilon.com.br",
  },
];

export default function ListarFornecedoresPage() {
  const router = useRouter();
  const [fornecedores, setFornecedores] = useState<Fornecedor[]>(FORNECEDORES);
  const [modalAberto, setModalAberto] = useState(false);
  const [fornecedorSelecionado, setFornecedorSelecionado] =
    useState<Fornecedor | null>(null);

  const handleRemover = (fornecedor: Fornecedor) => {
    setFornecedorSelecionado(fornecedor);
    setModalAberto(true);
  };

  const handleConfirmarRemocao = () => {
    if (fornecedorSelecionado) {
      setFornecedores((prev) =>
        prev.filter((f) => f.id !== fornecedorSelecionado.id),
      );
      message.success("Fornecedor removido com sucesso!");
    }
    setModalAberto(false);
    setFornecedorSelecionado(null);
  };

  const handleCancelarRemocao = () => {
    setModalAberto(false);
    setFornecedorSelecionado(null);
  };

  const columns: ColumnsType<Fornecedor> = [
    { title: "Nome", dataIndex: "nome", key: "nome" },
    { title: "CNPJ", dataIndex: "cnpj", key: "cnpj" },
    { title: "Telefone", dataIndex: "telefone", key: "telefone" },
    { title: "Email", dataIndex: "email", key: "email" },
    {
      title: "Ações",
      key: "acoes",
      render: (_, record) => (
        <Space>
          <Button type="link" onClick={() => router.push("/fornecedores/editar")}>
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
        <Title level={2}>Fornecedores</Title>
        <Table
          dataSource={fornecedores}
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
          {fornecedorSelecionado && (
            <div>
              <Text strong>Nome: </Text>
              <Text>{fornecedorSelecionado.nome}</Text>
              <br />
              <Text strong>CNPJ: </Text>
              <Text>{fornecedorSelecionado.cnpj}</Text>
              <br />
              <Text strong>Telefone: </Text>
              <Text>{fornecedorSelecionado.telefone}</Text>
              <br />
              <Text strong>Email: </Text>
              <Text>{fornecedorSelecionado.email}</Text>
            </div>
          )}
        </Modal>
      </Card>
    </div>
  );
}
