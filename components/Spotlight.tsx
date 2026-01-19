"use client";

import React, { useEffect } from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';

export default function Spotlight() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    // Esta función actualiza las coordenadas cada vez que mueves el mouse
    function handleMouseMove({ clientX, clientY }: MouseEvent) {
      mouseX.set(clientX);
      mouseY.set(clientY);
    }

    // Escuchamos el evento en toda la ventana (window)
    window.addEventListener('mousemove', handleMouseMove);

    // Limpieza al desmontar
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Creamos el gradiente dinámico
  const background = useMotionTemplate`radial-gradient(
    600px circle at ${mouseX}px ${mouseY}px,
    rgba(124, 58, 237, 0.10), /* Color Violeta muy sutil (0.10 opacidad) */
    transparent 80%
  )`;

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300"
      style={{ background: background }}
    />
  );
}