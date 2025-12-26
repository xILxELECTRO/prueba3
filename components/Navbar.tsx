"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-neutral-800 bg-neutral-950/80 backdrop-blur-md">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* LOGO + MARCA */}
        <a href="/" className="flex items-center gap-2 font-bold text-2xl tracking-tight text-neutral-50 group">
          
          {/* --- CORRECCIÓN AQUÍ --- */}
          {/* Agregamos 'bg-black', 'rounded-xl' y un borde sutil */}
          <div className="relative group-hover:scale-110 transition-transform duration-300 bg-black rounded-xl overflow-hidden border border-neutral-800 p-0.5">
            <Image 
              src="/logo1.png"
              alt="Logo Z&DInteligent"
              width={50}
              height={50}
              className="object-contain"
              priority
            />
          </div>
          {/* ----------------------- */}
          
          <span>
Inteligent
            <span className="text-violet-400"> ai</span>
          </span>
        </a>

        {/* Menú de Escritorio */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-300">
          <a href="/#features" className="hover:text-violet-400 transition-colors">Soluciones</a>
          <a href="/#demo" className="hover:text-violet-400 transition-colors">Demo</a>

        </div>

        {/* Botón Menú Móvil */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-neutral-300">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Menú Móvil Desplegable */}
      {isOpen && (
        <div className="md:hidden bg-neutral-950 border-b border-neutral-800 p-4 flex flex-col gap-4 text-neutral-300">
          <a href="/#features" onClick={() => setIsOpen(false)}>Soluciones</a>
          <a href="/#demo" onClick={() => setIsOpen(false)}>Demo</a>
        </div>
      )}
    </nav>
  );
}