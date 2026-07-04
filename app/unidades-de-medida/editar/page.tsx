"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Card, Typography, Form, Input, Button, Space, message } from "antd";

const { Title } = Typography;

const UNIDADE_MEDIDA_MOCK = {
  nome: "Unidade",
};

export default function EditarUnidadeMedidaPage() {
  const router = useRouter();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    form.setFieldsValue(UNIDADE_MEDIDA_MOCK);
  }, [form]);

  const handleSubmit = () => {
    form.validateFields().then(() => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        message.success("Unidade de medida atualizada com sucesso!");
        router.push("/unidades-de-medida");
      }, 500);
    });
  };

  const handleCancel = () => {
    router.push("/unidades-de-medida");
  };

  return (
    <div className="flex items-start justify-center min-h-full p-6">
      <Card className="w-full max-w-2xl">
        <Title level={2}>Editar Unidade de Medida</Title>

        <Form form={form} layout="vertical" onFinish={handleSubmit}>
          <Form.Item
            label="Nome"
            name="nome"
            rules={[{ required: true, message: "Informe o nome da unidade de medida" }]}
          >
            <Input placeholder="Digite o nome da unidade de medida" />
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
