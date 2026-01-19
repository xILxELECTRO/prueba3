import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Spotlight from "@/components/Spotlight"; // <--- 1. IMPORTARLO

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Z&DIntelligent.ai",
  description: "Automatización e Inteligencia Artificial",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.className} relative min-h-screen overflow-x-hidden bg-black`}>
        
        {/* --- FONDO GLOBAL (La Grilla de Rombos) --- */}
        <div className="fixed inset-0 z-[-1]">
           {/* ... aquí va tu código del fondo de rombos que hicimos antes ... */}
           <div 
            className="absolute inset-0 opacity-[0.15]"
            style={{ 
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' stroke-width='1' stroke='rgba(255,255,255,0.1)' fill='none'/%3E%3C/svg%3E")`,
              backgroundSize: '60px 60px'
            }}
          />
        </div>

        {/* --- 2. EL SPOTLIGHT GLOBAL --- */}
        {/* Esto ilumina la grilla de arriba al pasar el mouse */}
        <Spotlight />

        {/* --- CONTENIDO --- */}
        <main className="relative z-10 w-full bg-transparent">
          {children}
        </main>

      </body>
    </html>
  );
}