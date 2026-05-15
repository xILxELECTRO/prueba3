"use client";

import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  Shield, 
  Lock, 
  Eye, 
  Camera, 
  Globe, 
  Mail, 
  FileText,
  Database // <-- ¡Aquí estaba el detalle! Ya agregamos el icono que faltaba
} from 'lucide-react';

// Definimos la estructura que deben tener los elementos de la tabla de contenidos
interface TocItem {
  id: string;
  label: string;
}

export default function PrivacyPage() {
  const [activeSection, setActiveSection] = useState<string>('intro');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      let current = '';
      
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        if (window.scrollY >= sectionTop - 150) {
          current = section.getAttribute('id') || '';
        }
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  };

  return (
    <main className="min-h-screen bg-[#faf8fc] text-[#1a202c] selection:bg-purple-500/30">
      <Navbar />

      <div className="pt-32 pb-20 px-6 container mx-auto max-w-7xl relative z-10">
        
        {/* FONDO DECORATIVO */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-200/40 rounded-full blur-[120px] -z-10 pointer-events-none" />

        {/* HEADER */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-200 bg-white text-purple-600 text-xs font-bold uppercase tracking-widest mb-6 shadow-sm">
            <Shield className="w-4 h-4" />
            <span>Centro de Privacidad</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-[#1a202c] mb-6 tracking-tight">
            Política de Privacidad
          </h1>
          <p className="text-lg text-slate-500">
            Última actualización: Mayo 2026. Tu privacidad y seguridad son fundamentales para nuestro proyecto de inclusión.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* --- SIDEBAR DE NAVEGACIÓN (STICKY) --- */}
          <aside className="hidden lg:block lg:col-span-3">
            <div className="sticky top-32 p-6 rounded-[2rem] bg-white border border-purple-100 shadow-sm">
              <h3 className="font-bold text-[#1a202c] mb-4 px-2 uppercase tracking-wider text-sm">Contenido</h3>
              <nav className="space-y-1">
                {tocItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full text-left px-4 py-3 rounded-xl text-sm transition-all duration-300 font-medium ${
                      activeSection === item.id 
                        ? 'bg-purple-50 text-purple-600 translate-x-2 border-l-2 border-purple-600' 
                        : 'text-slate-500 hover:text-purple-600 hover:bg-slate-50 border-l-2 border-transparent'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* --- CONTENIDO LEGAL --- */}
          <div className="lg:col-span-9 space-y-16 text-justify leading-relaxed text-slate-600">
            
            {/* 1. INTRODUCCIÓN */}
            <section id="intro" className="scroll-mt-32">
              <h2 className="text-2xl font-bold text-[#1a202c] mb-6 flex items-center gap-3 border-b border-slate-100 pb-4">
                <FileText className="w-6 h-6 text-purple-600" /> 1. Introducción
              </h2>
              <p className="mb-4">
                En el proyecto <strong>SilentHelp</strong> ("nosotros" o "la Aplicación"), desarrollado por estudiantes del Instituto Tecnológico de la Gustavo A. Madero, valoramos su privacidad por encima de todo. Esta Política explica cómo tratamos la información al utilizar nuestro simulador y herramientas de traducción de Lengua de Señas Mexicana (LSM).
              </p>
              <p className="p-5 bg-purple-50 border-l-4 border-purple-600 text-purple-900 rounded-r-xl text-sm font-medium">
                Al ser una herramienta académica e inclusiva, nuestro objetivo no es recopilar datos comerciales, sino facilitar la comunicación de manera segura y privada.
              </p>
            </section>

            {/* 2. USO DE LA CÁMARA */}
            <section id="camera-usage" className="scroll-mt-32">
              <h2 className="text-2xl font-bold text-[#1a202c] mb-6 flex items-center gap-3 border-b border-slate-100 pb-4">
                <Camera className="w-6 h-6 text-purple-600" /> 2. Privacidad de la Cámara y Procesamiento Local
              </h2>
              <p className="mb-4">Para que SilentHelp pueda traducir la Lengua de Señas Mexicana, requerimos acceso a la cámara de su dispositivo. Queremos ser absolutamente transparentes sobre cómo funciona esto:</p>
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="bg-white p-6 rounded-2xl border border-purple-100 shadow-sm">
                  <h3 className="font-bold text-[#1a202c] mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500"></span> Procesamiento Local
                  </h3>
                  <p className="text-sm text-slate-500">
                    El flujo de video capturado por su cámara se procesa <strong>estrictamente en su dispositivo</strong> (en su navegador o teléfono) mediante algoritmos de Visión por Computadora.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-purple-100 shadow-sm">
                  <h3 className="font-bold text-[#1a202c] mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-fuchsia-500"></span> Cero Almacenamiento
                  </h3>
                  <p className="text-sm text-slate-500">
                    <strong>No grabamos, no guardamos y no transmitimos</strong> su rostro, su entorno ni los videos de sus señas a ningún servidor externo. Una vez que la IA lee la posición de las manos, la imagen se descarta instantáneamente.
                  </p>
                </div>
              </div>
            </section>

            {/* 3. DATOS QUE RECOPILAMOS */}
            <section id="data-collection" className="scroll-mt-32">
              <h2 className="text-2xl font-bold text-[#1a202c] mb-6 flex items-center gap-3 border-b border-slate-100 pb-4">
                <Database className="w-6 h-6 text-purple-600" /> 3. Información Técnica
              </h2>
              <p>Aunque no almacenamos video, la plataforma web puede recopilar información técnica básica y anónima para garantizar el funcionamiento del sitio, como:</p>
              <ul className="list-disc pl-5 mt-4 space-y-3 text-slate-600 marker:text-purple-600">
                <li><strong>Datos del formulario de contacto:</strong> Si decide escribirnos (nombre y correo), usaremos esa información exclusivamente para responder a su consulta.</li>
                <li><strong>Estadísticas de uso anónimas:</strong> Información general sobre qué secciones de los módulos educativos se visitan más, para mejorar el contenido didáctico.</li>
                <li><strong>Rendimiento del dispositivo:</strong> Datos básicos del navegador para asegurar que los modelos de IA corran fluidamente.</li>
              </ul>
            </section>

            {/* 4. TERCEROS */}
            <section id="ai-third-parties" className="scroll-mt-32">
              <h2 className="text-2xl font-bold text-[#1a202c] mb-6 flex items-center gap-3 border-b border-slate-100 pb-4">
                <Globe className="w-6 h-6 text-purple-600" /> 4. Tecnologías de Terceros
              </h2>
              <p className="mb-4">
                SilentHelp utiliza librerías de código abierto y frameworks de Inteligencia Artificial proporcionados por terceros para la detección de puntos de referencia de las manos (hand-tracking).
              </p>
              <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl">
                <p className="text-sm text-slate-600 leading-relaxed">
                  Estas librerías se ejecutan del lado del cliente. No compartimos información personal identificable con los creadores de estas librerías. Todo el entrenamiento de nuestra Red Neuronal (LSTM) para detectar el vocabulario en LSM se realizó previamente de manera aislada.
                </p>
              </div>
            </section>

            {/* 5. SEGURIDAD */}
            <section id="security" className="scroll-mt-32">
              <h2 className="text-2xl font-bold text-[#1a202c] mb-6 flex items-center gap-3 border-b border-slate-100 pb-4">
                <Lock className="w-6 h-6 text-purple-600" /> 5. Seguridad de los Datos
              </h2>
              <p>
                Aunque la recopilación de datos es mínima, el sitio web de SilentHelp cuenta con protocolos estándar de seguridad (como certificados SSL) para garantizar que cualquier interacción con la página, como el envío de un correo mediante nuestro formulario de contacto, esté cifrada y segura.
              </p>
            </section>

            {/* 6. DERECHOS */}
            <section id="rights" className="scroll-mt-32">
              <h2 className="text-2xl font-bold text-[#1a202c] mb-6 flex items-center gap-3 border-b border-slate-100 pb-4">
                <Eye className="w-6 h-6 text-purple-600" /> 6. Transparencia y Control
              </h2>
              <p className="mb-4">
                Usted tiene el control absoluto. En cualquier momento puede:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-slate-600 marker:text-purple-600">
                <li>Revocar el permiso de la cámara directamente desde los ajustes de su navegador o teléfono.</li>
                <li>Solicitar la eliminación de cualquier correo electrónico que nos haya enviado a través de la sección de contacto.</li>
              </ul>
            </section>

            {/* 7. CONTACTO */}
            <section id="contact" className="scroll-mt-32 border-t border-purple-100 pt-10">
              <h2 className="text-2xl font-bold text-[#1a202c] mb-6 flex items-center gap-3">
                <Mail className="w-6 h-6 text-purple-600" /> 7. Contacto
              </h2>
              <p className="mb-4">
                Si tiene alguna duda sobre cómo funciona nuestra tecnología o nuestras prácticas de privacidad, el equipo desarrollador está a su disposición.
              </p>
              <a href="mailto:contacto@silenthelp.mx" className="inline-flex items-center gap-3 px-6 py-3 bg-white border border-purple-200 rounded-xl text-purple-600 hover:bg-purple-600 hover:text-white transition-all shadow-sm font-bold">
                <Mail className="w-5 h-5" /> contacto@silenthelp.com
              </a>
            </section>

          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

// Datos para la tabla de contenidos con su tipado correspondiente
const tocItems: TocItem[] = [
  { id: 'intro', label: '1. Introducción' },
  { id: 'camera-usage', label: '2. Privacidad de Cámara' },
  { id: 'data-collection', label: '3. Información Técnica' },
  { id: 'ai-third-parties', label: '4. Terceros' },
  { id: 'security', label: '5. Seguridad' },
  { id: 'rights', label: '6. Transparencia' },
  { id: 'contact', label: '7. Contacto' },
];