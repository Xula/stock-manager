"use client";

import { useState } from "react";
import { Card, Typography, Table, Button, Modal, Space, message } from "antd";
import type { ColumnsType } from "antd/es/table";
import { useRouter } from "next/navigation";

const { Title, Text } = Typography;

interface Cliente {
  id: number;
  nome: string;
  cpfCnpj: string;
  email: string;
  telefone: string;
}

const CLIENTES: Cliente[] = [
  {
    id: 1,
    nome: "João da Silva",
    cpfCnpj: "123.456.789-00",
    email: "joao.silva@email.com",
    telefone: "(11) 98765-4321",
  },
  {
    id: 2,
    nome: "Maria Oliveira",
    cpfCnpj: "98.765.432/0001-10",
    email: "maria.oliveira@email.com",
    telefone: "(21) 91234-5678",
  },
  {
    id: 3,
    nome: "Carlos Pereira",
    cpfCnpj: "456.789.123-01",
    email: "carlos.pereira@email.com",
    telefone: "(31) 99876-5432",
  },
  {
    id: 4,
    nome: "Ana Souza",
    cpfCnpj: "12.345.678/0001-90",
    email: "ana.souza@email.com",
    telefone: "(41) 92345-6789",
  },
  {
    id: 5,
    nome: "Pedro Santos",
    cpfCnpj: "789.123.456-02",
    email: "pedro.santos@email.com",
    telefone: "(51) 93456-7890",
  },
];

export default function ListarClientesPage() {
  const router = useRouter();
  const [clientes, setClientes] = useState<Cliente[]>(CLIENTES);
  const [modalAberto, setModalAberto] = useState(false);
  const [clienteSelecionado, setClienteSelecionado] = useState<Cliente | null>(
    null,
  );

  const handleRemover = (cliente: Cliente) => {
    setClienteSelecionado(cliente);
    setModalAberto(true);
  };

  const handleConfirmarRemocao = () => {
    if (clienteSelecionado) {
      setClientes((prev) => prev.filter((c) => c.id !== clienteSelecionado.id));
      message.success("Cliente removido com sucesso!");
    }
    setModalAberto(false);
    setClienteSelecionado(null);
  };

  const handleCancelarRemocao = () => {
    setModalAberto(false);
    setClienteSelecionado(null);
  };

  const columns: ColumnsType<Cliente> = [
    { title: "Nome", dataIndex: "nome", key: "nome" },
    { title: "CPF/CNPJ", dataIndex: "cpfCnpj", key: "cpfCnpj" },
    { title: "Email", dataIndex: "email", key: "email" },
    { title: "Telefone", dataIndex: "telefone", key: "telefone" },
    {
      title: "Ações",
      key: "acoes",
      render: (_, record) => (
        <Space>
          <Button type="link" onClick={() => router.push("/clientes/editar")}>
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
        <Title level={2}>Clientes</Title>
        <Table
          dataSource={clientes}
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
          {clienteSelecionado && (
            <div>
              <Text strong>Nome: </Text>
              <Text>{clienteSelecionado.nome}</Text>
              <br />
              <Text strong>CPF/CNPJ: </Text>
              <Text>{clienteSelecionado.cpfCnpj}</Text>
              <br />
              <Text strong>Email: </Text>
              <Text>{clienteSelecionado.email}</Text>
              <br />
              <Text strong>Telefone: </Text>
              <Text>{clienteSelecionado.telefone}</Text>
            </div>
          )}
        </Modal>
      </Card>
    </div>
  );
}
