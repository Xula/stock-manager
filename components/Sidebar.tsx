"use client";

import { Layout, Menu } from "antd";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { menuItems } from "@/lib/menu-items";

const { Sider } = Layout;

export default function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
      <Menu
        theme="dark"
        mode="inline"
        selectedKeys={[pathname]}
        items={menuItems}
        onClick={({ key }) => router.push(key)}
      />
    </Sider>
  );
}
