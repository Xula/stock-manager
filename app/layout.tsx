import type { Metadata } from "next";
import { AntdRegistry } from "@ant-design/nextjs-registry";

export const metadata: Metadata = {
  title: "Stock Manager",
  description: "Manage your stock",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col">
        <AntdRegistry>{children}</AntdRegistry>
      </body>
    </html>
  );
}
