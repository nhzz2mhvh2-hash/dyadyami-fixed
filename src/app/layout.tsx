import type { Metadata } from "next";
import "./tokens.css";
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
      <body className="antialiased bg-void text-primary">
        <div className="grain" />
        {children}
      </body>
    </html>
  );
}
