import React, { useEffect, useRef, useState } from 'react';

// Declare VANTA on window to avoid TS errors
declare global {
  interface Window {
    VANTA: any;
    THREE: any;
  }
}

const Background3D = () => {
  const vantaRef = useRef<HTMLDivElement>(null);
  const [vantaEffect, setVantaEffect] = useState<any>(null);

  useEffect(() => {
    // Poll for VANTA availability in case scripts load slowly
    const initVanta = () => {
      if (!vantaEffect && window.VANTA && vantaRef.current) {
        try {
          const effect = window.VANTA.GLOBE({
            el: vantaRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            // Brand Colors
            backgroundColor: 0x0A1A2F, // Deep Navy
            color: 0x6C63FF,           // Electric Purple (The Globe Lines)
            color2: 0x30C6FF,          // Cyan (Accents)
            size: 1.2,
          });
          setVantaEffect(effect);
        } catch (e) {
          console.error("Failed to initialize Vanta:", e);
        }
      }
    };

    // Try immediately
    initVanta();

    // Retry after a short delay to ensure scripts loaded
    const timeoutId = setTimeout(initVanta, 500);

    return () => {
      clearTimeout(timeoutId);
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div 
      ref={vantaRef} 
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ width: '100%', height: '100vh' }}
    />
  );
};

export default Background3D;