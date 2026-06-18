"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Card,
  Typography,
  Form,
  Input,
  Select,
  Upload,
  Button,
  Space,
  message,
} from "antd";
import type { UploadFile, UploadProps } from "antd";
import { UploadOutlined, PlusOutlined } from "@ant-design/icons";

const { Title } = Typography;
const { TextArea } = Input;

const CATEGORIAS = [
  { value: "eletronicos", label: "Eletrônicos" },
  { value: "vestuario", label: "Vestuário" },
  { value: "alimentos", label: "Alimentos" },
  { value: "bebidas", label: "Bebidas" },
  { value: "limpeza", label: "Limpeza" },
];

const MARCAS = [
  { value: "samsung", label: "Samsung" },
  { value: "nike", label: "Nike" },
  { value: "nestle", label: "Nestlé" },
  { value: "unilever", label: "Unilever" },
  { value: "generica", label: "Genérica" },
];

const UNIDADES_MEDIDA = [
  { value: "un", label: "Unidade (UN)" },
  { value: "kg", label: "Quilograma (KG)" },
  { value: "l", label: "Litro (L)" },
  { value: "m", label: "Metro (M)" },
  { value: "cx", label: "Caixa (CX)" },
];

const PRODUTO_MOCK = {
  nome: "Smartphone Galaxy S24",
  descricao: "Smartphone Samsung Galaxy S24 128GB",
  categoria: "eletronicos",
  marca: "samsung",
  unidadeMedida: "un",
};

function beforeUpload(file: File) {
  const isImage = file.type.startsWith("image/");
  if (!isImage) {
    message.error("Você só pode enviar arquivos de imagem!");
  }
  return isImage || Upload.LIST_IGNORE;
}

export default function EditarProdutoPage() {
  const router = useRouter();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [codigoBarrasFile, setCodigoBarrasFile] = useState<UploadFile[]>([]);
  const [imagemFile, setImagemFile] = useState<UploadFile[]>([]);

  useEffect(() => {
    form.setFieldsValue(PRODUTO_MOCK);
  }, [form]);

  const handleSubmit = () => {
    form.validateFields().then(() => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        message.success("Produto atualizado com sucesso!");
        router.push("/produtos/listar");
      }, 500);
    });
  };

  const handleCancel = () => {
    router.push("/produtos/listar");
  };

  const handleCodigoBarrasChange: UploadProps["onChange"] = ({ fileList }) => {
    setCodigoBarrasFile(fileList);
  };

  const handleImagemChange: UploadProps["onChange"] = ({ fileList }) => {
    setImagemFile(fileList);
  };

  return (
    <div className="flex items-start justify-center min-h-full p-6">
      <Card className="w-full max-w-2xl">
        <Title level={2}>Editar Produto</Title>

        <Form form={form} layout="vertical" onFinish={handleSubmit}>
          <Form.Item
            label="Nome do Produto"
            name="nome"
            rules={[{ required: true, message: "Informe o nome do produto" }]}
          >
            <Input placeholder="Digite o nome do produto" />
          </Form.Item>

          <Form.Item
            label="Código de Barras / QR Code"
            name="codigoBarras"
          >
            <Upload
              listType="picture-card"
              fileList={codigoBarrasFile}
              onChange={handleCodigoBarrasChange}
              beforeUpload={beforeUpload}
              maxCount={1}
            >
              {codigoBarrasFile.length < 1 && (
                <div>
                  <PlusOutlined />
                  <div style={{ marginTop: 8 }}>Upload</div>
                </div>
              )}
            </Upload>
          </Form.Item>

          <Form.Item
            label="Descrição do Produto"
            name="descricao"
          >
            <TextArea
              rows={4}
              placeholder="Digite a descrição do produto"
            />
          </Form.Item>

          <Form.Item
            label="Categoria"
            name="categoria"
            rules={[{ required: true, message: "Selecione uma categoria" }]}
          >
            <Select
              placeholder="Selecione uma categoria"
              options={CATEGORIAS}
            />
          </Form.Item>

          <Form.Item
            label="Marca"
            name="marca"
            rules={[{ required: true, message: "Selecione uma marca" }]}
          >
            <Select
              placeholder="Selecione uma marca"
              options={MARCAS}
            />
          </Form.Item>

          <Form.Item
            label="Unidade de Medida"
            name="unidadeMedida"
            rules={[{ required: true, message: "Selecione uma unidade de medida" }]}
          >
            <Select
              placeholder="Selecione uma unidade de medida"
              options={UNIDADES_MEDIDA}
            />
          </Form.Item>

          <Form.Item
            label="Imagem do Produto"
            name="imagem"
          >
            <Upload
              listType="picture-card"
              fileList={imagemFile}
              onChange={handleImagemChange}
              beforeUpload={beforeUpload}
              maxCount={1}
            >
              {imagemFile.length < 1 && (
                <div>
                  <PlusOutlined />
                  <div style={{ marginTop: 8 }}>Upload</div>
                </div>
              )}
            </Upload>
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
