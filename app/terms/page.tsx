"use client";

import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  Scale, 
  FileText, 
  ShieldAlert, 
  CreditCard, 
  UserX, 
  RefreshCcw, 
  Globe, 
  Lock 
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
    <main className="min-h-screen bg-black text-neutral-300 selection:bg-fuchsia-500/30">
      <Navbar />

      <div className="pt-32 pb-20 px-6 container mx-auto max-w-7xl">
        
        {/* HEADER */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-fuchsia-500/20 bg-fuchsia-500/5 text-fuchsia-400 text-xs font-bold uppercase tracking-widest mb-6">
            <Scale className="w-4 h-4" />
            <span>Marco Legal</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Términos y Condiciones de Uso
          </h1>
          <p className="text-lg text-neutral-400">
            Última actualización: Enero 2026. Por favor lea estos términos cuidadosamente antes de utilizar nuestros servicios de Inteligencia Artificial.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* --- SIDEBAR DE NAVEGACIÓN (STICKY) --- */}
          <aside className="hidden lg:block lg:col-span-3">
            <div className="sticky top-32 p-6 rounded-2xl bg-neutral-900/30 border border-white/5 backdrop-blur-sm">
              <h3 className="text-white font-bold mb-4 px-2">Tabla de Contenidos</h3>
              <nav className="space-y-1">
                {tocItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-200 ${
                      activeSection === item.id 
                        ? 'bg-fuchsia-500/10 text-fuchsia-400 font-medium translate-x-1' 
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
          <div className="lg:col-span-9 space-y-16">
            
            {/* 1. INTRODUCCIÓN */}
            <section id="intro" className="legal-section">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <FileText className="w-6 h-6 text-fuchsia-500" /> 1. Introducción y Aceptación
              </h2>
              <p className="mb-4">
                Bienvenido a <strong>Z&DInteligent.ai</strong> ("Nosotros", "La Empresa"). Estos Términos y Condiciones ("Términos") rigen el acceso y uso de nuestra plataforma, software, APIs y servicios de automatización (colectivamente, el "Servicio").
              </p>
              <p className="p-4 bg-fuchsia-900/10 border-l-4 border-fuchsia-500 text-fuchsia-200 rounded-r-lg text-sm">
                AL HACER CLIC EN "ACEPTAR", REGISTRARSE O UTILIZAR EL SERVICIO, USTED ACEPTA VINCULARSE LEGALMENTE A ESTOS TÉRMINOS. SI ESTÁ SUSCRIBIENDO ESTE ACUERDO EN NOMBRE DE UNA EMPRESA, USTED DECLARA QUE TIENE LA AUTORIDAD PARA VINCULAR A DICHA ENTIDAD.
              </p>
            </section>

            {/* 2. CUENTAS */}
            <section id="accounts">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Lock className="w-6 h-6 text-fuchsia-500" /> 2. Cuentas y Seguridad
              </h2>
              <ul className="list-disc pl-5 space-y-3 text-neutral-400 marker:text-fuchsia-500">
                <li><strong>Registro:</strong> Usted debe proporcionar información precisa y completa al crear su cuenta. Es su responsabilidad mantener esta información actualizada.</li>
                <li><strong>Seguridad:</strong> Usted es responsable de salvaguardar la contraseña que utiliza para acceder al Servicio. Z&DInteligent.ai no será responsable de ninguna pérdida o daño derivado de su incumplimiento en proteger sus credenciales.</li>
                <li><strong>Uso Compartido:</strong> Está prohibido compartir credenciales de acceso con terceros no autorizados. Cada licencia de usuario es personal e intransferible.</li>
              </ul>
            </section>

            {/* 3. PROPIEDAD INTELECTUAL */}
            <section id="ip">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <ShieldAlert className="w-6 h-6 text-fuchsia-500" /> 3. Propiedad Intelectual y Contenido
              </h2>
              <div className="space-y-4">
                <p><strong>3.1 Propiedad de la Plataforma:</strong> El Servicio, incluyendo su código fuente, algoritmos, diseño, logotipos y software subyacente, es propiedad exclusiva de Z&DInteligent.ai y está protegido por leyes de derechos de autor y propiedad industrial internacionales.</p>
                <p><strong>3.2 Sus Datos (Input):</strong> Usted conserva todos los derechos sobre los datos, textos y archivos que suba a la plataforma ("Datos del Usuario").</p>
                <p><strong>3.3 Resultados (Output):</strong> Z&DInteligent.ai le cede a usted todos los derechos, títulos e intereses sobre el contenido generado por la IA como resultado de sus inputs, sujeto al cumplimiento de estos términos y al pago de las tarifas correspondientes.</p>
              </div>
            </section>

            {/* 4. IA Y RESPONSABILIDAD */}
            <section id="ai-disclaimer">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <RefreshCcw className="w-6 h-6 text-orange-500" /> 4. Naturaleza de la Inteligencia Artificial
              </h2>
              <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6">
                <p className="mb-4">
                  El Usuario reconoce y acepta que los servicios basados en Inteligencia Artificial (IA) y Modelos de Lenguaje (LLMs):
                </p>
                <ul className="space-y-2 text-sm text-neutral-400">
                  <li className="flex gap-2"><span className="text-orange-500">⚠</span> Pueden generar información incorrecta, ofensiva o sesgada ("Alucinaciones").</li>
                  <li className="flex gap-2"><span className="text-orange-500">⚠</span> No deben utilizarse como única fuente para la toma de decisiones críticas (médicas, legales, financieras).</li>
                  <li className="flex gap-2"><span className="text-orange-500">⚠</span> La calidad del resultado depende directamente de la calidad de las instrucciones (prompts) proporcionadas por el Usuario.</li>
                </ul>
                <p className="mt-4 font-medium text-white">
                  Z&DInteligent.ai no garantiza la precisión absoluta de los resultados generados por la IA y se deslinda de cualquier responsabilidad por el uso que el Usuario dé a dicha información.
                </p>
              </div>
            </section>

            {/* 5. PAGOS */}
            <section id="payments">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <CreditCard className="w-6 h-6 text-fuchsia-500" /> 5. Pagos, Facturación y Reembolsos
              </h2>
              <p className="mb-4">
                El uso de ciertas funciones requiere el pago de tarifas de suscripción. Al contratar un plan de pago:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-neutral-400 marker:text-fuchsia-500">
                <li><strong>Facturación Automática:</strong> Las suscripciones se renuevan automáticamente al final de cada ciclo de facturación a menos que se cancelen con al menos 24 horas de antelación.</li>
                <li><strong>Impuestos:</strong> Todos los precios mostrados son netos. El Usuario es responsable de pagar los impuestos aplicables (como el IVA en México) que se desglosarán en la factura.</li>
                <li><strong>Política de Reembolsos:</strong> Debido a la naturaleza digital del servicio y los costos computacionales incurridos, <strong>no ofrecemos reembolsos</strong> por períodos parciales o meses no utilizados, salvo que la ley local exija lo contrario.</li>
              </ul>
            </section>

            {/* 6. INDEMNIZACIÓN */}
            <section id="indemnification">
              <h2 className="text-2xl font-bold text-white mb-6">6. Indemnización</h2>
              <p>
                Usted acepta defender, indemnizar y eximir de responsabilidad a Z&DInteligent.ai, sus directores, empleados y afiliados, frente a cualquier reclamo, daño, obligación, pérdida, responsabilidad, costo o deuda y gasto (incluyendo honorarios de abogados) que surjan de: (i) su uso y acceso al Servicio; (ii) su violación de cualquier término de estos Términos; o (iii) su violación de cualquier derecho de un tercero, incluyendo derechos de autor o privacidad.
              </p>
            </section>

            {/* 7. TERMINACIÓN */}
            <section id="termination">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <UserX className="w-6 h-6 text-red-500" /> 7. Suspensión y Terminación
              </h2>
              <p className="mb-4">
                Podemos terminar o suspender su cuenta de forma inmediata, sin previo aviso ni responsabilidad, por cualquier motivo, incluyendo, entre otros:
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="bg-neutral-900 p-4 rounded-lg border border-neutral-800">
                  <span className="text-red-400 font-bold block mb-1">Falta de Pago</span>
                  Si sus métodos de pago son rechazados tras múltiples intentos.
                </div>
                <div className="bg-neutral-900 p-4 rounded-lg border border-neutral-800">
                  <span className="text-red-400 font-bold block mb-1">Uso Indebido</span>
                  Uso del servicio para spam, actividades ilegales o ingeniería inversa.
                </div>
              </div>
            </section>

            {/* 8. LEY APLICABLE */}
            <section id="law">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Globe className="w-6 h-6 text-fuchsia-500" /> 8. Ley Aplicable y Jurisdicción
              </h2>
              <p>
                Estos Términos se regirán por las leyes de los <strong>Estados Unidos Mexicanos</strong>. Cualquier disputa relacionada con estos Términos se someterá a la jurisdicción exclusiva de los tribunales competentes en el Estado de México o Ciudad de México, renunciando el Usuario a cualquier otro fuero que pudiera corresponderle por su domicilio presente o futuro.
              </p>
            </section>

            {/* CONTACTO */}
            <div className="border-t border-neutral-800 pt-10 mt-20">
              <h3 className="text-xl font-bold text-white mb-2">¿Dudas Legales?</h3>
              <p className="text-neutral-500">
                Si tiene preguntas sobre cómo interpretamos estos términos, contáctenos en: <a href="mailto:legal@zdinteligent.ai" className="text-fuchsia-400 hover:text-white underline decoration-fuchsia-500/30">legal@zdinteligent.ai</a>
              </p>
            </div>

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
  { id: 'accounts', label: '2. Cuentas y Seguridad' },
  { id: 'ip', label: '3. Propiedad Intelectual' },
  { id: 'ai-disclaimer', label: '4. Aviso sobre IA' },
  { id: 'payments', label: '5. Pagos y Reembolsos' },
  { id: 'indemnification', label: '6. Indemnización' },
  { id: 'termination', label: '7. Terminación' },
  { id: 'law', label: '8. Ley Aplicable' },
];