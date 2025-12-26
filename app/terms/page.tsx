import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function TermsPage() {
  return (
    // Mantenemos bg-transparent para el degradado maestro
    <main className="min-h-screen bg-transparent text-neutral-300 selection:bg-violet-500/30">
      <Navbar />
      
      <div className="container mx-auto px-6 pt-32 pb-20 max-w-4xl">
        
        {/* Encabezado */}
        <div className="mb-12 border-b border-neutral-800 pb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Términos y Condiciones
          </h1>
          <p className="text-neutral-500">
            Última actualización: <span className="text-violet-400">15 de Diciembre, 2025</span>
          </p>
        </div>

        <div className="space-y-12 text-sm md:text-base leading-relaxed text-neutral-400">
          
          {/* SECCIÓN 1 */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-violet-500">01.</span> Aceptación de los Términos
            </h2>
            <p>
              Bienvenido a <strong>Z&DInteligent.ai</strong>. Al acceder, registrarse o utilizar nuestros servicios de automatización de inteligencia artificial ("Servicios"), usted acepta estar legalmente vinculado por estos Términos y Condiciones ("Términos").
            </p>
            <p className="mt-2">
              Si está celebrando este acuerdo en nombre de una empresa u otra entidad legal, usted declara que tiene la autoridad para vincular a dicha entidad a estos términos.
            </p>
          </section>

          {/* SECCIÓN 2 */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-violet-500">02.</span> Descripción del Servicio
            </h2>
            <p>
              Z&DInteligent.ai proporciona una plataforma SaaS (Software as a Service) que permite a las empresas crear, gestionar y desplegar chatbots y agentes de inteligencia artificial para atención al cliente y ventas.
            </p>
            <p className="mt-2">
              Nos reservamos el derecho de modificar, suspender o descontinuar cualquier parte del Servicio en cualquier momento, con o sin previo aviso, para realizar mantenimiento o mejoras.
            </p>
          </section>

          {/* SECCIÓN 3 - CRÍTICA PARA IA */}
          <section>
            <div className="bg-neutral-900/50 border border-violet-500/20 p-6 rounded-xl">
              <h2 className="text-xl md:text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-violet-500">03.</span> Exactitud de la IA y Descargo de Responsabilidad
              </h2>
              <p className="mb-4">
                Usted reconoce que los Servicios utilizan modelos de inteligencia artificial y aprendizaje automático que son probabilísticos por naturaleza.
              </p>
              <ul className="list-disc pl-6 space-y-2 marker:text-violet-500">
                <li><strong>Posibles Errores:</strong> La IA puede generar resultados incorrectos, ofensivos o sesgados ("alucinaciones"). Z&DInteligent.ai no garantiza la precisión, integridad o fiabilidad de ninguna respuesta generada por el bot.</li>
                <li><strong>Supervisión Humana:</strong> Usted es responsable de supervisar y monitorear las interacciones de sus chatbots. No debe confiar en los Servicios para tomar decisiones legales, financieras o médicas sin verificación humana.</li>
                <li><strong>Responsabilidad del Contenido:</strong> Usted asume toda la responsabilidad por el uso de las respuestas generadas y por cualquier daño derivado de dicho uso.</li>
              </ul>
            </div>
          </section>

          {/* SECCIÓN 4 */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-violet-500">04.</span> Propiedad Intelectual
            </h2>
            <ul className="list-disc pl-6 space-y-2 marker:text-violet-500">
              <li><strong>Nuestra Propiedad:</strong> La plataforma, el código fuente, los algoritmos, los logotipos y el diseño de Z&DInteligent.ai son propiedad exclusiva de la Empresa y están protegidos por leyes de derechos de autor.</li>
              <li><strong>Sus Datos:</strong> Usted conserva todos los derechos sobre los datos, textos y archivos que suba a la plataforma ("Datos del Cliente") para entrenar a sus bots. Usted nos otorga una licencia limitada para procesar estos datos únicamente con el fin de prestarle el servicio.</li>
            </ul>
          </section>

          {/* SECCIÓN 5 */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-violet-500">05.</span> Pagos y Cancelación
            </h2>
            <p className="mb-4">
              Los servicios se ofrecen bajo modelos de suscripción (mensual o anual).
            </p>
            <ul className="list-disc pl-6 space-y-2 marker:text-violet-500">
              <li><strong>Facturación:</strong> Los cargos se realizan por adelantado al inicio de cada ciclo de facturación.</li>
              <li><strong>No Reembolsos:</strong> Los pagos no son reembolsables, incluidos los meses parciales o los servicios no utilizados, excepto cuando la ley lo exija.</li>
              <li><strong>Cancelación:</strong> Puede cancelar su suscripción en cualquier momento desde su panel de control. El servicio continuará activo hasta el final del período pagado.</li>
            </ul>
          </section>

          {/* SECCIÓN 6 */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-violet-500">06.</span> Limitación de Responsabilidad
            </h2>
            <p className="uppercase tracking-widest text-xs font-bold mb-2 text-neutral-500">Léase cuidadosamente</p>
            <p>
              En la máxima medida permitida por la ley aplicable, Z&DInteligent.ai NO será responsable por daños indirectos, incidentales, especiales, consecuentes o punitivos, incluyendo pérdida de beneficios, datos o interrupción del negocio, que surjan del uso o la imposibilidad de usar nuestros servicios, incluso si se nos ha advertido de la posibilidad de tales daños.
            </p>
          </section>

          {/* SECCIÓN 7 */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-violet-500">07.</span> Uso Prohibido
            </h2>
            <p>Usted acepta no utilizar el Servicio para:</p>
            <ul className="list-disc pl-6 mt-4 space-y-2 marker:text-violet-500">
              <li>Generar o difundir contenido ilegal, difamatorio, pornográfico o de odio.</li>
              <li>Realizar ingeniería inversa del código fuente de la plataforma.</li>
              <li>Intentar dañar o interrumpir el servicio (ataques DDoS, inyección de virus).</li>
              <li>Crear bots que se hagan pasar por humanos con fines fraudulentos (Scam/Phishing).</li>
            </ul>
            <p className="mt-4 text-red-400">
              La violación de estas normas resultará en la terminación inmediata de su cuenta sin derecho a reembolso.
            </p>
          </section>

          {/* SECCIÓN 8 */}
          <section className="border-t border-neutral-800 pt-8 mt-12">
            <h2 className="text-xl font-bold text-white mb-4">Legislación Aplicable y Contacto</h2>
            <p className="mb-4">
              Estos términos se regirán e interpretarán de acuerdo con las leyes vigentes en su jurisdicción.
            </p>
            <p>
              Para cualquier duda legal relacionada con estos términos, contáctenos en: <span className="text-violet-400 font-medium">legal@zdinteligent.ai</span>
            </p>
          </section>

        </div>
      </div>

      <Footer />
    </main>
  );
}