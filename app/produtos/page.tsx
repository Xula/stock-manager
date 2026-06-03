"use client";

import { Card, Typography } from "antd";

const { Title, Text } = Typography;

export default function ProdutosPage() {
  return (
    <div className="flex items-center justify-center min-h-full p-6">
      <Card>
        <Title level={2}>Produtos</Title>
        <Text type="secondary">Em breve...</Text>
      </Card>
    </div>
  );
}
