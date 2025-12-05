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
    let effect: any = null;
    let interval: any = null;

    const initVanta = () => {
      // Only initialize if Vanta isn't already active
      if (!effect && vantaRef.current) {
        // Critical: Check if THREE and VANTA are loaded globally
        if (!window.THREE || !window.VANTA) {
          return false; // Not ready yet
        }

        try {
          effect = window.VANTA.GLOBE({
            el: vantaRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            // Brand Colors - Updated to Teal
            backgroundColor: 0x0A1A2F, // Deep Navy
            color: 0x6C63FF,           // Electric Purple (Lines)
            color2: 0x00C2B8,          // Teal (Accents)
            size: 1.2,
          });
          setVantaEffect(effect);
          return true; // Success
        } catch (e) {
          console.error("[Background3D] Failed to initialize Vanta:", e);
          return false;
        }
      }
      return true; // Already initialized
    };

    // Attempt to initialize immediately
    const success = initVanta();

    // If not ready, poll every 100ms until scripts load
    if (!success) {
      interval = setInterval(() => {
        if (initVanta()) {
          clearInterval(interval);
        }
      }, 100);
    }

    return () => {
      if (interval) clearInterval(interval);
      if (effect) effect.destroy();
    };
  }, []);

  return (
    <div 
      ref={vantaRef} 
      className="fixed inset-0 z-0 pointer-events-none opacity-60"
      style={{ width: '100%', height: '100vh' }}
    />
  );
};

export default Background3D;