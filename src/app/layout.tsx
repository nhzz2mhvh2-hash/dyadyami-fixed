import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DYADYAMI | Luxury Expeditions",
  description: "Bespoke expeditions and private residences for the modern explorer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-black text-white">
        {children}
      </body>
    </html>
  );
}
