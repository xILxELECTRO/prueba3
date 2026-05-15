"use client";

import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  Scale, 
  FileText, 
  ShieldAlert, 
  UserX, 
  RefreshCcw, 
  Globe, 
  Lock,
  Camera,
  Info
} from 'lucide-react';

export default function TermsPage() {
  const [activeSection, setActiveSection] = useState('intro');

  // Efecto para detectar qué sección está visible y actualizar el menú lateral
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
        
        {/* FONDO DECORATIVO LUMINOSO */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-200/40 rounded-full blur-[120px] -z-10 pointer-events-none" />

        {/* HEADER */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-200 bg-white text-purple-600 text-xs font-bold uppercase tracking-widest mb-6 shadow-sm">
            <Scale className="w-4 h-4" />
            <span>Marco Educativo y Legal</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-[#1a202c] mb-6 tracking-tight">
            Términos y Condiciones de Uso
          </h1>
          <p className="text-lg text-slate-500">
            Última actualización: Mayo 2026. Por favor, lea estos términos cuidadosamente antes de utilizar nuestro simulador educativo de Inteligencia Artificial.
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
                <FileText className="w-6 h-6 text-purple-600" /> 1. Naturaleza del Proyecto y Aceptación
              </h2>
              <p className="mb-4">
                Bienvenido a la plataforma web de <strong>SilentHelp</strong>. Este sitio y su simulador interactivo corresponden a una iniciativa estrictamente académica desarrollada por estudiantes del Instituto Tecnológico de la Gustavo A. Madero dentro de la materia de Ingeniería del Conocimiento.
              </p>
              <p className="p-5 bg-purple-50 border-l-4 border-purple-600 text-purple-900 rounded-r-xl text-sm font-medium">
                AL UTILIZAR EL SIMULADOR O RECORRER NUESTROS MÓDULOS EDUCATIVOS, USTED MANIFIESTA SU CONFORMIDAD CON ESTOS TÉRMINOS DE USO enfocado al aprendizaje de la Lengua de Señas Mexicana (LSM).
              </p>
            </section>

            {/* 2. CONDICIONES DE USO DEL SIMULADOR */}
            <section id="usage-rules" className="scroll-mt-32">
              <h2 className="text-2xl font-bold text-[#1a202c] mb-6 flex items-center gap-3 border-b border-slate-100 pb-4">
                <Camera className="w-6 h-6 text-purple-600" /> 2. Condiciones del Simulador y Uso de Cámara
              </h2>
              <p className="mb-4">Para garantizar una experiencia interactiva óptima y un entorno seguro para todos los estudiantes y usuarios, se establecen las siguientes reglas:</p>
              <ul className="list-disc pl-5 space-y-3 text-slate-600 marker:text-purple-600">
                <li><strong>Finalidad Didáctica:</strong> El simulador y los diccionarios integrados deben ser utilizados exclusivamente con fines de aprendizaje, práctica personal o demostración académica de LSM.</li>
                <li><strong>Permisos del Dispositivo:</strong> El uso del reconocimiento en tiempo real requiere el acceso a la cámara. Este permiso es otorgado voluntariamente por el usuario y puede revocarse en cualquier momento desde el navegador.</li>
                <li><strong>Buen Uso:</strong> Queda estrictamente prohibido intentar vulnerar el código fuente, saturar las consultas del asistente interactivo o usar la interfaz para fines ajenos a la inclusión social.</li>
              </ul>
            </section>

            {/* 3. PROPIEDAD INTELECTUAL ACADÉMICA */}
            <section id="ip" className="scroll-mt-32">
              <h2 className="text-2xl font-bold text-[#1a202c] mb-6 flex items-center gap-3 border-b border-slate-100 pb-4">
                <ShieldAlert className="w-6 h-6 text-purple-600" /> 3. Propiedad Intelectual y Derechos de Autor
              </h2>
              <div className="space-y-4">
                <p><strong>3.1 Derechos del Proyecto:</strong> El diseño de la interfaz, el logotipo oficial, la estructura de componentes en React, los estilos y los modelos de datos entrenados para la traducción de LSM son propiedad intelectual del equipo desarrollador del ITGAM.</p>
                <p><strong>3.2 Herramientas de Terceros:</strong> Hacemos uso legítimo de librerías de código abierto (como Lucide Icons, Framer Motion, GSAP y MediaPipe) cuyos derechos pertenecen a sus respectivos autores conforme a sus licencias correspondientes.</p>
              </div>
            </section>

            {/* 4. EXCEPCIÓN DE RESPONSABILIDAD DE LA IA */}
            <section id="ai-disclaimer" className="scroll-mt-32">
              <h2 className="text-2xl font-bold text-[#1a202c] mb-6 flex items-center gap-3 border-b border-slate-100 pb-4">
                <RefreshCcw className="w-6 h-6 text-purple-600" /> 4. Alcance Técnico de la Inteligencia Artificial
              </h2>
              <div className="bg-white border border-purple-100 shadow-sm rounded-2xl p-6">
                <p className="mb-4 font-medium text-[#1a202c]">
                  El usuario reconoce y acepta las siguientes consideraciones respecto a la naturaleza del procesamiento con Inteligencia Artificial (IA):
                </p>
                <ul className="space-y-3 text-sm text-slate-500">
                  <li className="flex gap-2"><span className="text-purple-600 font-bold">•</span> La precisión del simulador puede verse afectada por factores externos como la iluminación del entorno, la calidad de la cámara o la velocidad del dispositivo.</li>
                  <li className="flex gap-2"><span className="text-purple-600 font-bold">•</span> Al ser un prototipo en fase beta enfocado a la Ingeniería del Conocimiento, la traducción automática no debe ser tomada como una certificación oficial de interpretación lingüística en situaciones críticas (legales o médicas).</li>
                </ul>
              </div>
            </section>

            {/* 5. AUSENCIA DE FINES COMERCIALES */}
            <section id="no-commercial" className="scroll-mt-32">
              <h2 className="text-2xl font-bold text-[#1a202c] mb-6 flex items-center gap-3 border-b border-slate-100 pb-4">
                <Info className="w-6 h-6 text-purple-600" /> 5. Carácter No Comercial y Gratuidad
              </h2>
              <p>
                SilentHelp es una plataforma 100% gratuita. No existen planes de suscripción, tarifas ocultas, cargos por procesamiento computacional ni venta de licencias de uso. Cualquier intento de cobro a nombre de este proyecto académico debe ser reportado inmediatamente.
              </p>
            </section>

            {/* 6. LEY APLICABLE */}
            <section id="law" className="scroll-mt-32">
              <h2 className="text-2xl font-bold text-[#1a202c] mb-6 flex items-center gap-3 border-b border-slate-100 pb-4">
                <Globe className="w-6 h-6 text-purple-600" /> 6. Legislación y Marco Normativo
              </h2>
              <p>
                Al ser un proyecto desarrollado e implementado en Ecatepec de Morelos, Estado de México, estos términos se rigen en concordancia con la legislación aplicable en los <strong>Estados Unidos Mexicanos</strong> y los lineamientos internos de proyectos de innovación tecnológica del Tecnológico Nacional de México (TecNM).
              </p>
            </section>

            {/* CONTACTO */}
            <div className="border-t border-purple-100 pt-10 mt-20" id="legal-contact">
              <h3 className="text-xl font-bold text-[#1a202c] mb-2">¿Dudas sobre los Términos?</h3>
              <p className="text-slate-500">
                Si deseas conocer más detalles técnicos o regulatorios sobre nuestra entrega de Ingeniería del Conocimiento, puedes contactar al equipo en: <a href="mailto:contacto@silenthelp.mx" className="text-purple-600 hover:text-purple-800 underline font-bold">contacto@silenthelp.com</a>
              </p>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

// Datos para la tabla de contenidos adaptada
const tocItems = [
  { id: 'intro', label: '1. Naturaleza del Proyecto' },
  { id: 'usage-rules', label: '2. Uso del Simulador' },
  { id: 'ip', label: '3. Propiedad Intelectual' },
  { id: 'ai-disclaimer', label: '4. Alcance de la IA' },
  { id: 'no-commercial', label: '5. Carácter Gratuito' },
  { id: 'law', label: '6. Legislación' },
  { id: 'legal-contact', label: '7. Dudas y Preguntas' },
];