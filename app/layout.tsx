import type { Metadata } from "next";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import AppLayout from "@/components/AppLayout";
import "./globals.css";

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
    <html lang="pt-br">
      <body>
        <AntdRegistry>
          <div>
            <AppLayout>{children}</AppLayout>
          </div>
        </AntdRegistry>
      </body>
    </html>
  );
}
