"use client";

import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  Shield, 
  Lock, 
  Eye, 
  Database, 
  Globe, 
  Mail, 
  Server,
  FileText
} from 'lucide-react';

export default function PrivacyPage() {
  const [activeSection, setActiveSection] = useState('intro');

  // Efecto para detectar sección activa al hacer scroll
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
    <main className="min-h-screen bg-black text-neutral-300 selection:bg-violet-500/30">
      <Navbar />

      <div className="pt-32 pb-20 px-6 container mx-auto max-w-7xl">
        
        {/* HEADER */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet-500/20 bg-violet-500/5 text-violet-400 text-xs font-bold uppercase tracking-widest mb-6">
            <Shield className="w-4 h-4" />
            <span>Centro de Privacidad</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Política de Privacidad
          </h1>
          <p className="text-lg text-neutral-400">
            Última actualización: Enero 2026. Tu confianza es nuestra prioridad. Aquí explicamos claramente cómo protegemos tus datos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* --- SIDEBAR DE NAVEGACIÓN (STICKY) --- */}
          <aside className="hidden lg:block lg:col-span-3">
            <div className="sticky top-32 p-6 rounded-2xl bg-neutral-900/30 border border-white/5 backdrop-blur-sm">
              <h3 className="text-white font-bold mb-4 px-2">Contenido</h3>
              <nav className="space-y-1">
                {tocItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-200 ${
                      activeSection === item.id 
                        ? 'bg-violet-500/10 text-violet-400 font-medium translate-x-1' 
                        : 'text-neutral-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* --- CONTENIDO LEGAL --- */}
          <div className="lg:col-span-9 space-y-16 text-justify leading-relaxed">
            
            {/* 1. INTRODUCCIÓN */}
            <section id="intro">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <FileText className="w-6 h-6 text-violet-500" /> 1. Introducción
              </h2>
              <p className="mb-4">
                En <strong>Z&DInteligent.ai</strong> ("nosotros", "nuestro" o "la Empresa"), valoramos su privacidad y nos comprometemos a proteger su información personal. Esta Política de Privacidad explica cómo recopilamos, usamos, divulgamos y protegemos sus datos cuando visita nuestro sitio web o utiliza nuestros servicios de automatización e Inteligencia Artificial.
              </p>
              <p className="p-4 bg-neutral-900 border-l-4 border-violet-500 text-neutral-300 rounded-r-lg text-sm">
                Al acceder o utilizar nuestros Servicios, usted acepta las prácticas descritas en esta Política. Si no está de acuerdo con los términos aquí expuestos, le rogamos que no utilice nuestros servicios.
              </p>
            </section>

            {/* 2. DATOS QUE RECOPILAMOS */}
            <section id="data-collection">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Database className="w-6 h-6 text-violet-500" /> 2. Información que Recopilamos
              </h2>
              <p className="mb-4">Recopilamos información que usted nos proporciona directamente y datos que se generan automáticamente:</p>
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="bg-neutral-900/50 p-6 rounded-2xl border border-white/5">
                  <h3 className="font-bold text-white mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-violet-500"></span> Datos Directos
                  </h3>
                  <ul className="list-disc pl-5 space-y-2 text-sm text-neutral-400 marker:text-violet-500">
                    <li>Identificación: Nombre, email, teléfono.</li>
                    <li>Facturación: Dirección fiscal, método de pago.</li>
                    <li>Soporte: Contenido de sus mensajes o tickets.</li>
                  </ul>
                </div>
                <div className="bg-neutral-900/50 p-6 rounded-2xl border border-white/5">
                  <h3 className="font-bold text-white mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-fuchsia-500"></span> Datos Automáticos
                  </h3>
                  <ul className="list-disc pl-5 space-y-2 text-sm text-neutral-400 marker:text-fuchsia-500">
                    <li>Técnicos: Dirección IP, navegador, sistema operativo.</li>
                    <li>Uso: Páginas visitadas, tiempo de sesión.</li>
                    <li>Interacción IA: Logs de chat (anonimizados).</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 3. USO DE LA INFORMACIÓN */}
            <section id="usage">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Server className="w-6 h-6 text-violet-500" /> 3. Uso de la Información
              </h2>
              <p>Utilizamos su información para los siguientes fines legítimos:</p>
              <ul className="list-disc pl-5 mt-4 space-y-3 text-neutral-400 marker:text-violet-500">
                <li><strong>Operación del Servicio:</strong> Proveer, mantener y mejorar nuestros chatbots y plataformas de automatización.</li>
                <li><strong>IA y Mejora Continua:</strong> Analizar interacciones para refinar la precisión de nuestros modelos (siempre de forma agregada y segura).</li>
                <li><strong>Comunicaciones:</strong> Enviarle actualizaciones técnicas, alertas de seguridad y respuestas a sus consultas.</li>
                <li><strong>Seguridad:</strong> Detectar y prevenir fraudes, abusos o incidentes de seguridad.</li>
              </ul>
            </section>

            {/* 4. IA Y TERCEROS */}
            <section id="ai-third-parties">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Globe className="w-6 h-6 text-violet-500" /> 4. Tecnologías de IA y Terceros
              </h2>
              <p className="mb-4">
                Para proporcionar nuestros servicios de automatización inteligente, utilizamos proveedores de modelos de lenguaje de terceros (como OpenAI, Anthropic, o proveedores de nube como AWS/Vercel).
              </p>
              <div className="bg-violet-900/10 border border-violet-500/20 p-6 rounded-xl">
                <h4 className="font-bold text-violet-300 mb-2">Privacidad en Modelos de IA</h4>
                <p className="text-sm text-violet-200/80 leading-relaxed">
                  Los datos enviados a través de nuestros chatbots pueden ser procesados por estos proveedores para generar respuestas. Sin embargo, configuramos nuestros sistemas bajo estándares empresariales para que sus datos <strong>no sean utilizados para entrenar modelos públicos</strong> sin su consentimiento explícito. Priorizamos la confidencialidad de sus datos comerciales.
                </p>
              </div>
            </section>

            {/* 5. SEGURIDAD */}
            <section id="security">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Lock className="w-6 h-6 text-violet-500" /> 5. Seguridad de los Datos
              </h2>
              <p>
                Implementamos medidas de seguridad técnicas, administrativas y físicas diseñadas para proteger su información contra acceso no autorizado, pérdida o alteración. Esto incluye encriptación SSL/TLS en tránsito y encriptación AES-256 en reposo para datos sensibles. Aunque nos esforzamos por proteger su información, ninguna transmisión por Internet es 100% infalible.
              </p>
            </section>

            {/* 6. DERECHOS ARCO */}
            <section id="rights">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Eye className="w-6 h-6 text-violet-500" /> 6. Sus Derechos (ARCO)
              </h2>
              <p className="mb-4">
                Usted tiene derechos sobre sus datos personales. Puede solicitar:
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="p-4 border border-white/5 rounded-lg hover:border-violet-500/30 transition-colors">
                  <strong className="text-white block mb-1">Acceso</strong>
                  Conocer qué datos tenemos de usted.
                </div>
                <div className="p-4 border border-white/5 rounded-lg hover:border-violet-500/30 transition-colors">
                  <strong className="text-white block mb-1">Rectificación</strong>
                  Corregir datos inexactos o desactualizados.
                </div>
                <div className="p-4 border border-white/5 rounded-lg hover:border-violet-500/30 transition-colors">
                  <strong className="text-white block mb-1">Cancelación</strong>
                  Solicitar la eliminación de sus datos.
                </div>
                <div className="p-4 border border-white/5 rounded-lg hover:border-violet-500/30 transition-colors">
                  <strong className="text-white block mb-1">Oposición</strong>
                  Oponerse al tratamiento de sus datos.
                </div>
              </div>
            </section>

            {/* 7. CONTACTO */}
            <section id="contact" className="border-t border-neutral-800 pt-10">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Mail className="w-6 h-6 text-violet-500" /> 7. Contacto
              </h2>
              <p className="mb-4">
                Si tiene preguntas sobre esta política o desea ejercer sus derechos, nuestro equipo de privacidad está disponible para ayudarle.
              </p>
              <a href="mailto:privacidad@zdinteligent.ai" className="inline-flex items-center gap-2 text-violet-400 hover:text-white transition-colors font-medium">
                <Mail className="w-4 h-4" /> privacidad@zdinteligent.ai
              </a>
            </section>

          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

// Datos para la tabla de contenidos
const tocItems = [
  { id: 'intro', label: '1. Introducción' },
  { id: 'data-collection', label: '2. Datos Recopilados' },
  { id: 'usage', label: '3. Uso de Información' },
  { id: 'ai-third-parties', label: '4. IA y Terceros' },
  { id: 'security', label: '5. Seguridad' },
  { id: 'rights', label: '6. Sus Derechos' },
  { id: 'contact', label: '7. Contacto' },
];