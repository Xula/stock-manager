"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card, Typography, Form, Input, Button, Space, message } from "antd";

const { Title } = Typography;

export default function CriarFornecedorPage() {
  const router = useRouter();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    form.validateFields().then(() => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        message.success("Fornecedor cadastrado com sucesso!");
        router.push("/fornecedores/listar");
      }, 500);
    });
  };

  const handleCancel = () => {
    router.push("/fornecedores/listar");
  };

  return (
    <div className="flex items-start justify-center min-h-full p-6">
      <Card className="w-full max-w-2xl">
        <Title level={2}>Criar Fornecedor</Title>

        <Form form={form} layout="vertical" onFinish={handleSubmit}>
          <Form.Item
            label="Nome"
            name="nome"
            rules={[{ required: true, message: "Informe o nome do fornecedor" }]}
          >
            <Input placeholder="Digite o nome do fornecedor" />
          </Form.Item>

          <Form.Item
            label="CNPJ"
            name="cnpj"
            rules={[{ required: true, message: "Informe o CNPJ" }]}
          >
            <Input placeholder="00.000.000/0001-00" />
          </Form.Item>

          <Form.Item
            label="Telefone"
            name="telefone"
            rules={[{ required: true, message: "Informe o telefone" }]}
          >
            <Input placeholder="(00) 00000-0000" />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Informe o email" },
              { type: "email", message: "Informe um email valido" },
            ]}
          >
            <Input type="email" placeholder="email@exemplo.com" />
          </Form.Item>

          <Form.Item>
            <Space>
              <Button type="primary" htmlType="submit" loading={loading}>
                Salvar
              </Button>
              <Button onClick={handleCancel}>
                Cancelar
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}
