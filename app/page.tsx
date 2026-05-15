import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Demo from '@/components/Demo';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Spotlight from '@/components/Spotlight';

export default function Home() {
  return (
    // Envolvemos toda la página en el color morado súper clarito de fondo
    <main className="relative min-h-screen bg-[#faf8fc] selection:bg-purple-600 selection:text-white overflow-hidden">
      
      {/* 1. El efecto de luz del mouse que afecta a toda la página */}
      <Spotlight />

      {/* 2. La barra de navegación superior */}
      <Navbar />

      {/* 3. La sección principal (Impacto visual y botón de descarga) */}
      <Hero />

      {/* 4. Las tarjetas 3D que giran con los pilares del proyecto */}
      <Services />

      {/* 6. El formulario de contacto empático */}
      <Contact />

      {/* 7. El pie de página con derechos y redes sociales */}
      <Footer />

    </main>
  );
}