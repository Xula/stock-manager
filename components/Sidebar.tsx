"use client";

import { Layout, Menu } from "antd";
import type { MenuProps } from "antd";
import { usePathname, useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import { menuItems } from "@/lib/menu-items";

const { Sider } = Layout;

function getOpenKeys(pathname: string): string[] {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length >= 2) {
    return ["/" + segments[0]];
  }
  return [];
}

export default function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  const [openKeys, setOpenKeys] = useState<string[]>(() => getOpenKeys(pathname));

  const parentKeys = useMemo(
    () => menuItems?.map((item) => item!.key as string) ?? [],
    []
  );

  const handleOpenChange: MenuProps["onOpenChange"] = (keys) => {
    setOpenKeys(keys);
  };

  const handleClick: MenuProps["onClick"] = ({ key }) => {
    if (!parentKeys.includes(key)) {
      router.push(key);
    }
  };

  return (
    <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
      <Menu
        theme="dark"
        mode="inline"
        selectedKeys={[pathname]}
        openKeys={openKeys}
        onOpenChange={handleOpenChange}
        items={menuItems}
        onClick={handleClick}
      />
    </Sider>
  );
}
