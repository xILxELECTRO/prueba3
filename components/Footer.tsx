"use client";

import React from 'react';
// 1. Importamos Image de Next.js
import Image from 'next/image';
// Quitamos 'Bot' de la importación porque ya no lo usaremos
import { Github, Twitter, Linkedin } from 'lucide-react';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiOpenai, SiNodedotjs, SiMysql } from 'react-icons/si';

type LogoItem = {
  node: React.ReactNode;
  title: string;
  href: string;
};

// Componente Wrapper para evitar errores de TS
const IconWrapper = ({ children, colorClass }: { children: React.ReactNode, colorClass: string }) => (
  <span className={`flex text-2xl text-white-600 transition-colors duration-300 ${colorClass}`}>
    {children}
  </span>
);

const techLogos: LogoItem[] = [
  { node: <IconWrapper colorClass="hover:text-[#61DAFB]"><SiReact /></IconWrapper>, title: "React", href: "https://react.dev" },
  { node: <IconWrapper colorClass="hover:text-white"><SiNextdotjs /></IconWrapper>, title: "Next.js", href: "https://nextjs.org" },
  { node: <IconWrapper colorClass="hover:text-[#3178C6]"><SiTypescript /></IconWrapper>, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <IconWrapper colorClass="hover:text-[#06B6D4]"><SiTailwindcss /></IconWrapper>, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <IconWrapper colorClass="hover:text-white"><SiOpenai /></IconWrapper>, title: "OpenAI", href: "https://openai.com" },
  { node: <IconWrapper colorClass="hover:text-[#339933]"><SiNodedotjs /></IconWrapper>, title: "Node.js", href: "https://nodejs.org" },
  { node: <IconWrapper colorClass="hover:text-[#4479A1]"><SiMysql /></IconWrapper>, title: "MySQL", href: "https://mysql.com" },
];

export default function Footer() {
  return (
    <footer className="bg-transparent border-t border-white-900 pb-12 pt-0 text-white-400">
      
      <div className="container mx-auto px-6 pt-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-2">
            
            {/* --- AQUÍ AGREGAMOS TU LOGO --- */}
            <div className="flex items-center gap-2 font-bold text-xl text-white mb-4">
              <Image 
                src="/logo1.png" 
                alt="Logo Z&DInteligent" 
                width={40} 
                height={40} 
                className="object-contain"
              />
              <span>Intelligent ai</span>
            </div>
            {/* ----------------------------- */}

            <p className="text-sm leading-relaxed max-w-xs text-white-500">
              Ayudamos a empresas a automatizar su atención al cliente con Inteligencia Artificial avanzada. Sin código, sin complicaciones.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Producto</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/#services" className="hover:text-violet-400 transition-colors">Características</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/about" className="hover:text-violet-400 transition-colors">Sobre Nosotros</a></li>
              <li><a href="/#contact" className="hover:text-violet-400 transition-colors">Contacto</a></li>
              <li><a href="/privacy" className="hover:text-violet-400 transition-colors">Privacidad</a></li>
              <li><a href="/terms" className="hover:text-violet-400 transition-colors">Términos</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white-900 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>© 2025 ZDIntelligent.com Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
            <a href="#" className="hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}