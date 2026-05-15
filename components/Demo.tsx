"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Send, RefreshCcw, Hand, Plus, X, BookOpen, Heart, Info } from 'lucide-react';

const checkIntent = (userText: string, keywords: string[]) => {
  const words = userText.toLowerCase().split(' ');
  return keywords.some(keyword => words.some(word => word.includes(keyword)));
};

const MENU_OPTIONS = [
  { label: "Aprender Saludos", text: "saludos", icon: <Hand className="w-4 h-4" /> },
  { label: "¿Cómo funciona?", text: "info", icon: <Info className="w-4 h-4" /> },
  { label: "Palabras Mágicas", text: "gracias", icon: <Heart className="w-4 h-4" /> }
];

export default function Demo() {
  const [messages, setMessages] = useState([
    { role: 'bot', text: '¡Hola! 👋 Soy tu Asistente de Aprendizaje LSM. Escribe una palabra como "Hola" o "Gracias" y te diré cómo se hace la seña.' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const resetChat = () => {
    setMessages([{ role: 'bot', text: '¡Hola! 👋 Soy tu Asistente de Aprendizaje LSM. Escribe una palabra como "Hola" o "Gracias" y te diré cómo se hace la seña.' }]);
  };

  const handleSend = (textOverride?: string) => {
    const textToSend = textOverride || input;
    if (!textToSend.trim()) return;

    if (textOverride) setIsMenuOpen(false);

    setMessages(prev => [...prev, { role: 'user', text: textToSend }]);
    setInput('');
    setIsTyping(true);

    let botResponse = '';
    const cleanText = textToSend.toLowerCase().trim();

    if (checkIntent(cleanText, ['hola', 'saludos', 'ola'])) {
      botResponse = 'Para decir "Hola" en LSM: \nColoca tu mano derecha en forma de "B" (dedos juntos y estirados) sobre tu sien y muévela hacia adelante, como un saludo militar corto. 🖖';
    } 
    else if (checkIntent(cleanText, ['gracias', 'agradecer', 'por favor'])) {
      botResponse = 'Para decir "Gracias": \nExtiende tu mano dominante con la palma hacia arriba. Coloca la punta del dedo medio de tu otra mano sobre la palma de la mano dominante y levántala ligeramente hacia arriba. ✨';
    }
    else if (checkIntent(cleanText, ['info', 'funciona', 'ayuda'])) {
      botResponse = 'En la versión completa de SilentHelp, podrás encender tu cámara y nuestra IA (MediaPipe + LSTM) traducirá tus movimientos directamente a texto. ¡Aprender será muy fácil! 🚀';
    }
    else {
      botResponse = 'Aún estoy aprendiendo ese vocabulario. 🤔 Intenta con palabras básicas como "Hola", "Gracias" o pregunta "¿Cómo funciona?".';
    }

    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, { role: 'bot', text: botResponse }]);
    }, 1200);
  };

  return (
    <section id="demo" className="py-24 bg-white relative z-20 shadow-sm border-t border-slate-100">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-purple-50 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 border border-purple-200 text-purple-700 text-xs font-bold mb-6 tracking-widest uppercase">
              <BookOpen className="w-4 h-4" />
              Asistente Interactivo
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#1a202c] mb-6">
              Practica tu <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-fuchsia-500">
                vocabulario en vivo
              </span>
            </h2>

            <div className="bg-[#faf8fc] border border-purple-100 p-8 rounded-[2rem] mb-8 relative overflow-hidden group shadow-sm hover:shadow-md transition-shadow">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-purple-500 to-fuchsia-500" />
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white rounded-xl text-purple-600 mt-1 shadow-sm border border-purple-50">
                  <Hand className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-[#1a202c] font-bold text-xl mb-2 flex items-center gap-2">
                    Simulador de Diccionario
                    <span className="px-2 py-1 rounded-full bg-green-100 text-green-700 text-[10px] uppercase tracking-wider font-bold animate-pulse">
                      Beta
                    </span>
                  </h3>
                  <p className="text-slate-500 text-base leading-relaxed">
                    Usa este mini-simulador para buscar cómo se hacen las señas más comunes. En la App oficial, la cámara validará si lo estás haciendo correctamente.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 w-full flex justify-center">
            {/* Celular Claro (Modo Día) */}
            <div className="relative w-[350px] bg-white border-[10px] border-slate-200 rounded-[3rem] shadow-[0_20px_50px_rgba(147,51,234,0.15)] overflow-hidden h-[650px] flex flex-col">
              
              {/* Header Celular */}
              <div className="bg-[#faf8fc] p-4 pt-12 border-b border-purple-100 flex items-center justify-between z-10 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm border border-purple-100 overflow-hidden">
                     <Image src="/logo.png" alt="Bot Avatar" width={40} height={40} className="object-contain p-1" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1a202c] text-sm">SilentHelp Asistente</h3>
                    <p className="text-xs text-green-600 flex items-center gap-1 font-medium">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span> En línea
                    </p>
                  </div>
                </div>
                <button onClick={resetChat} className="text-slate-400 hover:text-purple-600 transition-colors p-2 bg-white rounded-full shadow-sm border border-slate-100">
                  <RefreshCcw className="w-4 h-4" />
                </button>
              </div>

              {/* Área de Chat */}
              <div ref={scrollRef} className="flex-1 p-4 overflow-y-auto bg-slate-50 space-y-4 scroll-smooth">
                {messages.map((msg, idx) => (
                  <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed shadow-sm whitespace-pre-line font-medium ${
                      msg.role === 'user' 
                        ? 'bg-purple-600 text-white rounded-tr-none' 
                        : 'bg-white text-slate-700 rounded-tl-none border border-slate-100'
                    }`}>
                      {msg.text}
                    </div>
                  </div>
                ))}
                
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-white px-4 py-3 rounded-2xl rounded-tl-none flex gap-1.5 items-center border border-slate-100 shadow-sm">
                      <span className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"></span>
                      <span className="w-2 h-2 bg-purple-400 rounded-full animate-bounce delay-100"></span>
                      <span className="w-2 h-2 bg-purple-400 rounded-full animate-bounce delay-200"></span>
                    </div>
                  </div>
                )}
              </div>

              {/* Input Area */}
              <div className="p-4 bg-white border-t border-slate-100 relative z-20">
                
                {isMenuOpen && (
                  <div className="absolute bottom-20 right-4 flex flex-col gap-2 z-30 animate-in slide-in-from-bottom-5 fade-in duration-200">
                    {MENU_OPTIONS.map((option, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSend(option.text)}
                        className="flex items-center gap-3 px-4 py-3 bg-white hover:bg-purple-50 border border-purple-100 text-[#1a202c] text-sm rounded-xl shadow-lg transition-colors text-right justify-end font-bold"
                      >
                        <span>{option.label}</span>
                        <span className="p-1.5 bg-purple-100 text-purple-600 rounded-full">{option.icon}</span>
                      </button>
                    ))}
                  </div>
                )}

                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className={`absolute -top-14 right-4 w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 z-10 border-4 border-white ${
                    isMenuOpen 
                      ? 'bg-slate-200 text-slate-600 rotate-180' 
                      : 'bg-purple-600 text-white hover:bg-fuchsia-500 hover:scale-105'
                  }`}
                >
                  {isMenuOpen ? <X className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </button>

                <form onSubmit={(e) => { e.preventDefault(); handleSend(); }} className="flex gap-2">
                  <input 
                    type="text" value={input} onChange={(e) => setInput(e.target.value)}
                    placeholder="Pregunta por una seña..."
                    className="flex-1 bg-slate-100 border-none rounded-full px-5 py-3 text-sm text-[#1a202c] focus:outline-none focus:ring-2 focus:ring-purple-500/50 placeholder:text-slate-400 transition-shadow font-medium"
                  />
                  <button 
                    type="submit" disabled={!input.trim()}
                    className="p-3 bg-purple-600 rounded-full hover:bg-fuchsia-500 disabled:opacity-50 disabled:bg-slate-300 text-white transition-colors shadow-sm"
                  >
                    <Send className="w-5 h-5 ml-0.5" />
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