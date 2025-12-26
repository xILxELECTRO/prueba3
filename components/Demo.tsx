"use client";

import React, { useState, useEffect, useRef } from 'react';
// 1. IMPORTAMOS IMAGE DE NEXT.JS
import Image from 'next/image';
import { Bot, Send, RefreshCcw, Zap, Plus, X, DollarSign, HelpCircle, User, Terminal } from 'lucide-react';

// --- CEREBRO MATEMÁTICO (Sin cambios) ---
const getSimilarity = (str1: string, str2: string) => {
  const track = Array(str2.length + 1).fill(null).map(() =>
    Array(str1.length + 1).fill(null)
  );
  for (let i = 0; i <= str1.length; i += 1) { track[0][i] = i; }
  for (let j = 0; j <= str2.length; j += 1) { track[j][0] = j; }
  for (let j = 1; j <= str2.length; j += 1) {
    for (let i = 1; i <= str1.length; i += 1) {
      const indicator = str1[i - 1] === str2[j - 1] ? 0 : 1;
      track[j][i] = Math.min(
        track[j][i - 1] + 1,
        track[j - 1][i] + 1,
        track[j - 1][i - 1] + indicator
      );
    }
  }
  const distance = track[str2.length][str1.length];
  const longest = Math.max(str1.length, str2.length);
  return (longest - distance) / longest;
};

const checkIntent = (userText: string, keywords: string[]) => {
  const words = userText.toLowerCase().split(' ');
  return keywords.some(keyword => 
    words.some(word => word === keyword || getSimilarity(word, keyword) > 0.75)
  );
};

const MENU_OPTIONS = [
  { label: "Ver Precios", text: "precio", icon: <DollarSign className="w-4 h-4" /> },
  { label: "¿Qué haces?", text: "funciones", icon: <HelpCircle className="w-4 h-4" /> },
  { label: "Contacto Humano", text: "humano", icon: <User className="w-4 h-4" /> }
];

export default function Demo() {
  const [messages, setMessages] = useState([
    { role: 'bot', text: '¡Hola! 👋 Un gusto saludarte. ¿Te gustaría saber cómo puedo automatizar tus ventas?' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [chatContext, setChatContext] = useState<'idle' | 'waiting_for_functions' | 'waiting_for_prices'>('waiting_for_functions');
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const resetChat = () => {
    setMessages([{ role: 'bot', text: '¡Hola! 👋 Un gusto saludarte. ¿Te gustaría saber cómo puedo automatizar tus ventas?' }]);
    setChatContext('waiting_for_functions');
  };

  const handleSend = (textOverride?: string) => {
    const textToSend = textOverride || input;
    if (!textToSend.trim()) return;

    if (textOverride) setIsMenuOpen(false);

    setMessages(prev => [...prev, { role: 'user', text: textToSend }]);
    setInput('');
    setIsTyping(true);

    let botResponse = '';
    let nextContext = chatContext; 
    const cleanText = textToSend.toLowerCase().trim();

    if (checkIntent(cleanText, ['hola', 'ola', 'buenas', 'hi', 'alo', 'hey'])) {
      botResponse = '¡Hola de nuevo! 👋 Como te decía, puedo revolucionar tu atención al cliente. ¿Quieres ver cómo funciono?';
      nextContext = 'waiting_for_functions';
    } 
    else if (checkIntent(cleanText, ['si', 'sii', 'claro', 'yes', 'por supuesto', 'obvio', 'dale', 'ok'])) {
      if (chatContext === 'waiting_for_functions') {
        botResponse = '¡Genial! 🚀 Funciono así: Me conecto a tu WhatsApp y Web, aprendo toda la información de tu negocio y atiendo clientes 24/7. \n\n¿Te gustaría ver nuestros precios?';
        nextContext = 'waiting_for_prices';
      } 
      else if (chatContext === 'waiting_for_prices') {
        botResponse = 'Nuestros planes inician en solo $49 USD/mes. Es una inversión pequeña para tener un vendedor disponible 24/7. 😉 ¿Te interesa agendar una demo con un humano?';
        nextContext = 'idle';
      } 
      else {
        botResponse = 'Disculpa, me perdí un poco. 😅 ¿A qué te refieres con "sí"? Puedes preguntarme por mis funciones o precios.';
        nextContext = 'idle';
      }
    }
    else if (checkIntent(cleanText, ['precio', 'presio', 'costo', 'pagar', 'plan', 'cuanto', 'vale'])) {
      botResponse = 'Nuestros planes inician en solo $49 USD/mes. 🤑';
      nextContext = 'idle';
    } 
    else if (checkIntent(cleanText, ['funciones', 'hacer', 'sirve', 'capaz', 'info', 'que'])) {
      botResponse = 'Soy capaz de: \n1. Responder preguntas frecuentes.\n2. Agendar citas.\n3. Calificar leads.';
      nextContext = 'idle';
    }
    else if (checkIntent(cleanText, ['humano', 'persona', 'real', 'agente', 'contacto'])) {
      botResponse = 'Entiendo. Transferiré el chat a un humano inmediatamente. (Simulación de transferencia...)';
      nextContext = 'idle';
    }
    else {
      botResponse = 'Interesante... 🤔 Como soy un Bot de Prueba, a veces necesito que seas más específico. Intenta decir "Hola" o "Precios".';
    }

    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, { role: 'bot', text: botResponse }]);
      setChatContext(nextContext);
    }, 1000);
  };

  return (
    <section id="demo" className="py-24 bg-transparent overflow-hidden relative">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-violet-900/10 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-900/30 border border-violet-500/30 text-violet-400 text-xs font-medium mb-6">
              <Zap className="w-3 h-3 text-yellow-400 fill-yellow-400" />
              Respuesta en milisegundos
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Inteligente, rápido y <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">
                fácil de usar
              </span>
            </h2>

            <div className="bg-neutral-900/80 border border-neutral-800 p-6 rounded-2xl mb-8 relative overflow-hidden group hover:border-violet-500/40 transition-colors shadow-2xl">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-violet-500 to-fuchsia-500" />
              <div className="flex items-start gap-4">
                <div className="p-3 bg-violet-500/10 rounded-xl text-violet-400 mt-1">
                  <Terminal className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-2 flex items-center gap-2">
                    Simulador de Prueba
                    <span className="px-2 py-0.5 rounded-full bg-violet-500/20 text-violet-300 text-[10px] uppercase tracking-wider border border-violet-500/20 animate-pulse">
                      Live Demo
                    </span>
                  </h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">
                    Estás interactuando con una versión de prueba. Sigue el hilo de la conversación (ej. responde "Sí" cuando pregunte) para ver cómo recuerda el contexto.
                  </p>
                </div>
              </div>
            </div>

          </div>

          <div className="lg:w-1/2 w-full flex justify-center">
            <div className="relative w-[350px] bg-black border-[10px] border-neutral-900 rounded-[3rem] shadow-2xl shadow-violet-900/20 overflow-hidden h-[650px] flex flex-col">
              
              {/* Header Celular */}
              <div className="bg-neutral-900 p-4 pt-12 border-b border-neutral-800 flex items-center justify-between z-10">
                <div className="flex items-center gap-3">
                  
                  {/* --- AQUÍ CAMBIAMOS EL ICONO POR TU LOGO --- */}
                  <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center shadow-lg border border-neutral-800 overflow-hidden">
                     <Image 
                        src="/logo1.png" 
                        alt="Bot Avatar" 
                        width={40} 
                        height={40} 
                        className="object-cover"
                     />
                  </div>
                  {/* ------------------------------------------- */}

                  <div>
                    <h3 className="font-bold text-white text-sm">Z&D Bot</h3>
                    <p className="text-xs text-green-400 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span> En línea
                    </p>
                  </div>
                </div>
                <button 
                  onClick={resetChat}
                  className="text-neutral-500 hover:text-white transition-colors p-2"
                >
                  <RefreshCcw className="w-4 h-4" />
                </button>
              </div>

              <div ref={scrollRef} className="flex-1 p-4 overflow-y-auto bg-neutral-950 space-y-4 scroll-smooth">
                {messages.map((msg, idx) => (
                  <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[85%] p-3.5 rounded-2xl text-sm leading-relaxed shadow-sm whitespace-pre-line ${
                      msg.role === 'user' 
                        ? 'bg-violet-600 text-white rounded-tr-none' 
                        : 'bg-neutral-800 text-neutral-200 rounded-tl-none border border-neutral-700'
                    }`}>
                      {msg.text}
                    </div>
                  </div>
                ))}
                
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-neutral-800 px-4 py-3 rounded-2xl rounded-tl-none flex gap-1.5 items-center border border-neutral-700">
                      <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full animate-bounce"></span>
                      <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full animate-bounce delay-100"></span>
                      <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full animate-bounce delay-200"></span>
                    </div>
                  </div>
                )}
              </div>

              <div className="p-4 bg-neutral-900 border-t border-neutral-800 relative z-20">
                
                {isMenuOpen && (
                  <div className="absolute bottom-40 right-4 flex flex-col gap-2 z-30 animate-in slide-in-from-bottom-5 fade-in duration-200">
                    {MENU_OPTIONS.map((option, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSend(option.text)}
                        className="flex items-center gap-3 px-4 py-3 bg-neutral-800 hover:bg-violet-600 border border-neutral-700 text-white text-sm rounded-xl shadow-xl transition-colors text-right justify-end"
                      >
                        <span className="font-medium">{option.label}</span>
                        <span className="p-1 bg-white/10 rounded-full">{option.icon}</span>
                      </button>
                    ))}
                  </div>
                )}

                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className={`absolute -top-16 right-4 w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 z-10 ${
                    isMenuOpen 
                      ? 'bg-neutral-700 text-white rotate-180' 
                      : 'bg-violet-600 text-white hover:bg-violet-500 hover:scale-110'
                  }`}
                >
                  {isMenuOpen ? <X className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
                </button>

                <form 
                  onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                  className="flex gap-2"
                >
                  <input 
                    type="text" 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Escribe un mensaje..."
                    className="flex-1 bg-neutral-950 border border-neutral-800 rounded-full px-4 py-3 text-sm text-white focus:outline-none focus:border-violet-500 placeholder:text-neutral-600 transition-colors"
                  />
                  <button 
                    type="submit"
                    disabled={!input.trim()}
                    className="p-3 bg-neutral-800 rounded-full hover:bg-violet-600 disabled:opacity-50 text-white transition-colors"
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </form>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}