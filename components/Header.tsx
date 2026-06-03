"use client";

import { Layout, Button, Space } from "antd";
import { NotificationOutlined, SettingOutlined } from "@ant-design/icons";

const { Header } = Layout;

export default function HeaderComponent() {
  return (
    <Header
      style={{
        background: "#001529",
        padding: "0 24px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <span
        style={{
          color: "#fff",
          fontSize: "18px",
          fontWeight: "bold",
        }}
      >
        Stock Manager
      </span>
      <Space>
        <Button
          type="text"
          icon={<NotificationOutlined />}
          style={{ color: "#fff" }}
        />
        <Button
          type="text"
          icon={<SettingOutlined />}
          style={{ color: "#fff" }}
        />
      </Space>
    </Header>
  );
}
