import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Z&DIntelligent ai | Automatización de Ventas",
  description: "Revoluciona tu atención al cliente con Inteligencia Artificial y Chatbots avanzados.",
  icons: {
    icon: '/logo.png', 
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      {/* Mantenemos el fondo degradado que ya configuramos antes */}
      <body className={`${inter.className} min-h-screen bg-gradient-to-b from-neutral-800 via-neutral-950 to-black bg-fixed text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}