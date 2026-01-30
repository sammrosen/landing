import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rosen Systems | Modern Solutions for Modern Businesses",
  description: "Rosen Systems delivers cutting-edge technology solutions that transform how businesses operate. From custom software to cloud infrastructure, we build what you need.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased bg-[#0a0a0a] text-[#ededed]">
        {children}
      </body>
    </html>
  );
}
