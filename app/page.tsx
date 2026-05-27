"use client";
import Image from "next/image";
import { Button } from "antd";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1>Stock Manager</h1>
      <p>Manage your stock</p>
      <Button type="primary">Button</Button>
    </div>
  );
}
