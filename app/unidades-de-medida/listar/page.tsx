"use client";

import { Card, Typography, Table, Button, Modal, message } from "antd";
import type { ColumnsType } from "antd/es/table";
import { useRouter } from "next/navigation";

const { Title } = Typography;

interface UnidadeMedida {
  id: number;
  nome: string;
}

const UNIDADES_MEDIDA: UnidadeMedida[] = [
  { id: 1, nome: "Unidade (UN)" },
  { id: 2, nome: "Litro (L)" },
  { id: 3, nome: "Quilograma (kg)" },
  { id: 4, nome: "Metro (m)" },
  { id: 5, nome: "Caixa (CX)" },
];

export default function ListarUnidadesMedidaPage() {
  const router = useRouter();

  const columns: ColumnsType<UnidadeMedida> = [
    { title: "Nome", dataIndex: "nome", key: "nome" },
    {
      title: "Ações",
      key: "acoes",
      render: (_, record) => (
        <>
          <Button type="link" onClick={() => router.push("/unidades-de-medida/editar")}>
            Editar
          </Button>
          <Button
            type="link"
            danger
            onClick={() =>
              Modal.confirm({
                title: "Confirmar exclusão",
                content: `Tem certeza que deseja excluir a unidade de medida "${record.nome}"?`,
                onOk: () => {
                  message.success("Unidade de medida excluída com sucesso!");
                },
              })
            }
          >
            Excluir
          </Button>
        </>
      ),
    },
  ];

  return (
    <div className="flex items-start justify-center min-h-full p-6">
      <Card className="w-full max-w-4xl">
        <Title level={2}>Listar Unidades de Medida</Title>
        <Table
          dataSource={UNIDADES_MEDIDA}
          columns={columns}
          rowKey="id"
          pagination={false}
        />
      </Card>
    </div>
  );
}
