"use client";

import React from 'react';
import Image from 'next/image';
import { Github, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 pb-12 pt-16 text-slate-500">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Logo y Descripción */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 font-black text-2xl text-[#1a202c] mb-6">
              <Image 
                src="/SLHP.png" // Asegúrate de que el nombre de tu logo sea correcto
                alt="Logo SilentHelp" 
                width={32} 
                height={32} 
                className="object-contain" 
              />
              Silent<span className="text-purple-600">Help</span>
            </div>
            
            <p className="text-base leading-relaxed max-w-sm text-slate-500 font-light">
              Transformando el silencio en conexión a través de Inteligencia Artificial para la Lengua de Señas Mexicana (LSM).
            </p>
          </div>

          {/* Navegación Principal (Antes "Proyecto") */}
          <div>
            <h4 className="font-black text-[#1a202c] mb-6 uppercase tracking-wider text-sm">Explora</h4>
            <ul className="space-y-3 text-sm font-medium">
              <li><a href="/" className="hover:text-purple-600 transition-colors">Inicio</a></li>
              <li><a href="/about" className="hover:text-purple-600 transition-colors">Sobre nosotros</a></li>
              <li><a href="/#beneficios" className="hover:text-purple-600 transition-colors">Nuestros Pilares</a></li>
            </ul>
          </div>

          {/* Enlaces Legales y de Contacto (Antes "Comunidad") */}
          <div>
            <h4 className="font-black text-[#1a202c] mb-6 uppercase tracking-wider text-sm">Ayuda & Legal</h4>
            <ul className="space-y-3 text-sm font-medium">
              <li><a href="/#contact" className="hover:text-purple-600 transition-colors">Contáctanos</a></li>
              <li><a href="/terms" className="hover:text-purple-600 transition-colors">Términos y Condiciones</a></li>
              <li><a href="/privacy" className="hover:text-purple-600 transition-colors">Políticas de Privacidad</a></li>
            </ul>
          </div>
          
        </div>

        {/* Línea Divisoria Final y Copyright */}
        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono uppercase tracking-widest text-slate-400">
          <p>© {new Date().getFullYear()} Pagina Oficial SilentHelp.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-purple-600 transition-colors"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="hover:text-purple-600 transition-colors"><Linkedin className="w-5 h-5" /></a>
            <a href="#" className="hover:text-purple-600 transition-colors"><Github className="w-5 h-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}