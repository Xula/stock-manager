"use client";

import { Card, Typography } from "antd";

const { Title, Text } = Typography;

export default function UsuarioPage() {
  return (
    <div className="flex items-center justify-center min-h-full p-6">
      <Card>
        <Title level={2}>Usuário</Title>
        <Text type="secondary">Em breve...</Text>
      </Card>
    </div>
  );
}
