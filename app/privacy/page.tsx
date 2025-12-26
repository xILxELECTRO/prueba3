import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function PrivacyPage() {
  return (
    // Usamos bg-transparent para dejar ver el degradado maestro del body
    <main className="min-h-screen bg-transparent text-neutral-300 selection:bg-violet-500/30">
      <Navbar />
      
      <div className="container mx-auto px-6 pt-32 pb-20 max-w-4xl">
        {/* Encabezado del Documento */}
        <div className="mb-12 border-b border-neutral-800 pb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Política de Privacidad
          </h1>
          <p className="text-neutral-500">
            Última actualización: <span className="text-violet-400">15 de Diciembre, 2025</span>
          </p>
        </div>

        <div className="space-y-12 text-sm md:text-base leading-relaxed text-neutral-400">
          
          {/* SECCIÓN 1 */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-violet-500">01.</span> Introducción
            </h2>
            <p className="mb-4">
              En <strong>Z&DInteligent.ai</strong> ("nosotros", "nuestro" o "la Empresa"), valoramos su privacidad y nos comprometemos a proteger su información personal. Esta Política de Privacidad explica cómo recopilamos, usamos, divulgamos y protegemos sus datos cuando visita nuestro sitio web o utiliza nuestros servicios de automatización e Inteligencia Artificial.
            </p>
            <p>
              Al acceder o utilizar nuestros Servicios, usted acepta las prácticas descritas en esta Política. Si no está de acuerdo, le rogamos que no utilice nuestros servicios.
            </p>
          </section>

          {/* SECCIÓN 2 */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-violet-500">02.</span> Información que Recopilamos
            </h2>
            <p className="mb-4">Recopilamos información que usted nos proporciona directamente y datos que se generan automáticamente mediante el uso de nuestros servicios:</p>
            <ul className="list-disc pl-6 space-y-2 marker:text-violet-500">
              <li><strong>Datos de Identificación:</strong> Nombre, dirección de correo electrónico, número de teléfono y nombre de la empresa (recopilados a través de formularios de contacto).</li>
              <li><strong>Datos de Interacción con IA:</strong> Contenido de las conversaciones mantenidas con nuestros chatbots. Aunque estos datos se procesan de forma segura, recomendamos no compartir información financiera sensible o contraseñas en los chats.</li>
              <li><strong>Datos Técnicos:</strong> Dirección IP, tipo de navegador, sistema operativo y datos de navegación para mejorar la experiencia del usuario.</li>
            </ul>
          </section>

          {/* SECCIÓN 3 */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-violet-500">03.</span> Uso de la Información
            </h2>
            <p>Utilizamos su información para los siguientes fines legítimos:</p>
            <ul className="list-disc pl-6 mt-4 space-y-2 marker:text-violet-500">
              <li>Proveer, operar y mantener nuestros servicios de chatbots.</li>
              <li>Mejorar, personalizar y expandir nuestras funcionalidades de IA.</li>
              <li>Entender y analizar cómo utiliza usted nuestros servicios.</li>
              <li>Comunicarnos con usted, ya sea directamente o a través de nuestros socios, para servicio al cliente, actualizaciones y fines de marketing.</li>
              <li>Procesar transacciones y enviar información relacionada, como confirmaciones y facturas.</li>
            </ul>
          </section>
          
          {/* SECCIÓN 4 - CRUCIAL PARA TU NEGOCIO DE IA */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-violet-500">04.</span> Tecnologías de IA y Terceros
            </h2>
            <p className="mb-4">
              Para proporcionar nuestros servicios de automatización inteligente, utilizamos proveedores de modelos de lenguaje de terceros (como OpenAI, Anthropic, o similares).
            </p>
            <div className="bg-neutral-900/50 border border-neutral-800 p-6 rounded-xl">
              <p className="text-neutral-300">
                <strong>Nota Importante:</strong> Los datos enviados a través de nuestros chatbots pueden ser procesados por estos proveedores para generar respuestas. Nos aseguramos de configurar nuestros sistemas para que sus datos no sean utilizados para entrenar modelos públicos sin su consentimiento explícito, priorizando la confidencialidad empresarial ("Enterprise Privacy").
              </p>
            </div>
          </section>

          {/* SECCIÓN 5 */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-violet-500">05.</span> Seguridad de los Datos
            </h2>
            <p>
              Implementamos medidas de seguridad técnicas y organizativas apropiadas (incluyendo encriptación SSL/TLS y firewalls) diseñadas para proteger la seguridad de cualquier información personal que procesamos. Sin embargo, recuerde que ninguna transmisión por Internet es 100% segura.
            </p>
          </section>

          {/* SECCIÓN 6 */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-violet-500">06.</span> Sus Derechos
            </h2>
            <p className="mb-4">Dependiendo de su ubicación, usted puede tener los siguientes derechos:</p>
            <ul className="list-disc pl-6 space-y-2 marker:text-violet-500">
              <li>Derecho a solicitar acceso a los datos personales que tenemos sobre usted.</li>
              <li>Derecho a solicitar la corrección o eliminación de sus datos personales.</li>
              <li>Derecho a oponerse al procesamiento de sus datos.</li>
              <li>Derecho a retirar su consentimiento en cualquier momento.</li>
            </ul>
            <p className="mt-4">
              Para ejercer cualquiera de estos derechos, contáctenos en: <strong>legal@zdinteligent.ai</strong>
            </p>
          </section>

          {/* SECCIÓN 7 */}
          <section className="border-t border-neutral-800 pt-8 mt-12">
            <h2 className="text-xl font-bold text-white mb-4">Contacto</h2>
            <p>
              Si tiene preguntas o comentarios sobre esta política, puede contactarnos por correo electrónico a <span className="text-violet-400">contacto@zdinteligent.ai</span> o por correo postal a nuestras oficinas principales.
            </p>
          </section>

        </div>
      </div>

      <Footer />
    </main>
  );
}