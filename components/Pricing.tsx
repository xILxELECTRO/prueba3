import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: "Starter",
    price: "$49",
    period: "/mes",
    description: "Ideal para emprendedores y pequeños negocios.",
    features: ["1 Chatbot de IA", "Hasta 500 conversaciones", "Soporte por Email", "Integración Web Básica"],
    highlight: false
  },
  {
    name: "Pro Business",
    price: "$99",
    period: "/mes",
    description: "Para empresas que necesitan escalar ventas.",
    features: ["3 Chatbots (Web + WhatsApp)", "Conversaciones Ilimitadas", "Entrenamiento con tus PDFs", "Soporte Prioritario 24/7", "Dashboard de Analítica"],
    highlight: true 
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Soluciones a medida para grandes volúmenes.",
    features: ["Bots Ilimitados", "API Access Completo", "Gerente de Cuenta Dedicado", "Entrenamiento Avanzado", "SLA de 99.9%"],
    highlight: false
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-white-950 relative overflow-hidden">
      {/* Fondo decorativo */}
      <div className="absolute top-1/2 left-1/2 -tranwhite-x-1/2 -tranwhite-y-1/2 w-[800px] h-[500px] bg-fuchsia-600/10 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white-50 mb-4">
            Planes simples y <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-violet-400">transparentes</span>
          </h2>
          <p className="text-white-400">Sin comisiones ocultas. Cancela cuando quieras.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative p-8 rounded-2xl border transition-all duration-300 ${
                plan.highlight 
                  ? 'bg-white-900 border-violet-500 shadow-2xl shadow-violet-500/20 scale-105 z-10' 
                  : 'bg-white-900/50 border-white-800 hover:border-white-700'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -tranwhite-x-1/2 bg-gradient-to-r from-violet-500 to-fuchsia-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                  Más Popular
                </div>
              )}
              
              <h3 className="text-xl font-bold text-white-100 mb-2">{plan.name}</h3>
              <div className="flex items-baseline mb-4">
                <span className="text-4xl font-extrabold text-white">{plan.price}</span>
                <span className="text-white-400 ml-2">{plan.period}</span>
              </div>
              <p className="text-white-400 text-sm mb-8">{plan.description}</p>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-white-300 text-sm">
                    <Check className={`w-5 h-5 ${plan.highlight ? 'text-violet-400' : 'text-white-500'}`} />
                    {feature}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 rounded-lg font-bold transition-all ${
                plan.highlight 
                  ? 'bg-violet-500 hover:bg-violet-400 text-white-950' 
                  : 'bg-white-800 hover:bg-white-700 text-white'
              }`}>
                Elegir Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}