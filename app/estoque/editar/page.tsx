"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Card,
  Typography,
  Form,
  InputNumber,
  Button,
  Space,
  message,
} from "antd";

const { Title, Text } = Typography;

const ESTOQUE_MOCK = {
  produto: "Smartphone Samsung Galaxy",
  quantidade: 50,
  precoCompra: 1200.00,
  precoVenda: 1899.90,
};

export default function EditarEstoquePage() {
  const router = useRouter();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    form.setFieldsValue({
      quantidade: ESTOQUE_MOCK.quantidade,
      precoCompra: ESTOQUE_MOCK.precoCompra,
      precoVenda: ESTOQUE_MOCK.precoVenda,
    });
  }, [form]);

  const handleSubmit = () => {
    form.validateFields().then(() => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        message.success("Item de estoque atualizado com sucesso!");
        router.push("/estoque/listar");
      }, 500);
    });
  };

  const handleCancel = () => {
    router.push("/estoque/listar");
  };

  return (
    <div className="flex items-start justify-center min-h-full p-6">
      <Card className="w-full max-w-2xl">
        <Title level={2}>Editar Estoque</Title>

        <Form form={form} layout="vertical" onFinish={handleSubmit}>
          <Form.Item label="Produto">
            <Text strong>{ESTOQUE_MOCK.produto}</Text>
          </Form.Item>

          <Form.Item
            label="Quantidade"
            name="quantidade"
            rules={[
              { required: true, message: "Informe a quantidade" },
              { type: "number", min: 1, message: "Quantidade minima e 1" },
            ]}
          >
            <InputNumber
              placeholder="Digite a quantidade"
              min={1}
              style={{ width: "100%" }}
            />
          </Form.Item>

          <Form.Item
            label="Preco de Compra"
            name="precoCompra"
            rules={[{ required: true, message: "Informe o preco de compra" }]}
          >
            <InputNumber
              prefix="R$"
              placeholder="0,00"
              precision={2}
              step={0.01}
              min={0}
              style={{ width: "100%" }}
            />
          </Form.Item>

          <Form.Item
            label="Preco de Venda"
            name="precoVenda"
            rules={[{ required: true, message: "Informe o preco de venda" }]}
          >
            <InputNumber
              prefix="R$"
              placeholder="0,00"
              precision={2}
              step={0.01}
              min={0}
              style={{ width: "100%" }}
            />
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
