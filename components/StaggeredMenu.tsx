import React, { useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import './StaggeredMenu.css';

export interface MenuItem {
  label: string;
  link: string;
}

interface StaggeredMenuProps {
  items: MenuItem[];
  menuButtonColor?: string; 
  accentColor?: string;     
}

const StaggeredMenu: React.FC<StaggeredMenuProps> = ({
  items = [], // Valor por defecto vacío para evitar crash
  menuButtonColor = '#ffffff',
  accentColor = '#a78bfa'
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);

  useLayoutEffect(() => {
    // Si no hay items, no intentes animar nada
    if (!items || items.length === 0) return;

    const ctx = gsap.context(() => {
      tl.current = gsap.timeline({ paused: true });

      // 1. Fondo (Círculo)
      tl.current.to('.menu-overlay', {
        clipPath: 'circle(150% at 95% 5%)', 
        duration: 0.8,
        ease: 'power3.inOut',
      });

      // 2. Enlaces (Texto)
      // Usamos .fromTo para asegurar visibilidad inicial
      tl.current.fromTo('.menu-link-item', 
        { y: 100, opacity: 0 }, 
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
        }, 
        '-=0.4'
      );

      // 3. Línea divisoria
      tl.current.from('.menu-divider', {
        scaleX: 0,
        transformOrigin: 'left',
        duration: 0.6,
        ease: 'power3.out',
      }, '-=0.6');

    }, containerRef);

    return () => ctx.revert();
  }, [items]); // <--- IMPORTANTE: Recalcular si items cambia

  // Controlar abrir/cerrar
  useLayoutEffect(() => {
    if (tl.current) {
      isOpen ? tl.current.play() : tl.current.reverse();
    }
  }, [isOpen]);

  return (
    <div ref={containerRef} className="staggered-menu-container">
      
      {/* TRIGGER BUTTON */}
      <button 
        className={`menu-trigger ${isOpen ? 'is-active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        style={{ color: isOpen ? '#fff' : menuButtonColor }}
      >
        <span className="menu-trigger-text">{isOpen ? 'CERRAR' : 'MENÚ'}</span>
        <div className="hamburger-icon">
          <span className="line line-1"></span>
          <span className="line line-2"></span>
        </div>
      </button>

      {/* OVERLAY */}
      <div className="menu-overlay">
        <div className="menu-content">
          
          <div className="menu-header">
            <span style={{ color: accentColor }}>Navegación</span>
          </div>

          <div className="menu-divider" style={{ backgroundColor: accentColor }}></div>

          <nav className="menu-links">
            {/* Si no hay items, muestra un mensaje de error visible */}
            {items.length > 0 ? (
              items.map((item, index) => (
                <div key={index} className="menu-link-wrapper">
                  <a 
                    href={item.link} 
                    className="menu-link-item"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="link-number" style={{ color: accentColor }}>
                      0{index + 1}
                    </span>
                    {item.label}
                  </a>
                </div>
              ))
            ) : (
              <p style={{color:'white'}}>Cargando enlaces...</p>
            )}
          </nav>

          <div className="menu-footer">
            <p>Intelligent AI &copy; 2025</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default StaggeredMenu;