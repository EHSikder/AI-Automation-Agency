import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Trail } from '@react-three/drei';
import * as THREE from 'three';

// --- Configuration ---
const GRID_ROWS = 40;
const GRID_COLS = 20;
const GRID_SPACING = 2.5;

// --- Tube Cursor (Mouse Trail) ---
const TubeCursor = () => {
  const { viewport, camera } = useThree();
  const ref = useRef<THREE.Mesh>(null);

  useFrame(({ pointer }) => {
    if (!ref.current) return;
    // Map mouse to 3D world at z=2 (slightly above the grid)
    const x = (pointer.x * viewport.width) / 2;
    // CRITICAL: Add camera.position.y to tracking so it stays with mouse while scrolling
    const y = (pointer.y * viewport.height) / 2 + camera.position.y;
    
    // Position relative to camera to stay on screen
    ref.current.position.set(x, y, 2); 
  });

  return (
    <Trail
      width={0.6}
      length={5}
      color="#A3FFE4" // Mint Glow
      attenuation={(t) => t * t}
    >
      <mesh ref={ref}>
        <sphereGeometry args={[0.1, 8, 8]} />
        <meshBasicMaterial color="#A3FFE4" transparent opacity={0} />
      </mesh>
    </Trail>
  );
};

// --- Scroll Camera Rig ---
// Flies the camera forward/down as user scrolls
const ScrollRig = () => {
  useFrame((state) => {
    const scrollY = window.scrollY;
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    const progress = maxScroll > 0 ? scrollY / maxScroll : 0;

    // Move camera down Y to traverse the infinite grid
    const targetY = -progress * 60; // Flight distance
    
    // Smooth movement
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, targetY, 0.08);
    
    // Dynamic tilt based on mouse
    state.camera.rotation.x = 0.2 + (state.pointer.y * 0.05);
    state.camera.rotation.y = -(state.pointer.x * 0.1);
  });
  return null;
};

// --- Interactive Hexagon Grid ---
const ReactiveGrid = () => {
  const { viewport, camera, pointer } = useThree();
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);
  
  // Initialize grid positions
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < GRID_ROWS; i++) {
      for (let j = 0; j < GRID_COLS; j++) {
        const x = (j - GRID_COLS / 2) * GRID_SPACING;
        const y = -i * GRID_SPACING + 10; // Start slightly above and go down
        const z = -5; // Base depth
        temp.push({ x, y, z, baseScale: Math.random() * 0.5 + 0.5 });
      }
    }
    return temp;
  }, []);

  useFrame((state) => {
    if (!meshRef.current) return;

    // Calculate mouse position in world space (approximate projection)
    const mouseX = (pointer.x * viewport.width) / 2;
    const mouseY = (pointer.y * viewport.height) / 2 + camera.position.y;

    particles.forEach((particle, i) => {
      // Logic: Loop seamless scrolling
      // If particle is too far above camera, move it to bottom
      let currentY = particle.y;
      
      // Simple loop logic for visual density
      // (Advanced infinite loop requires more complex index management, 
      // but for this effect, a tall static grid is sufficient)

      // Interaction Logic
      const dist = Math.sqrt(
          Math.pow(mouseX - particle.x, 2) + 
          Math.pow(mouseY - currentY, 2)
      );

      // Effect radius = 8 units
      const influence = Math.max(0, 1 - dist / 8); 
      
      // Update transform
      dummy.position.set(particle.x, currentY, particle.z + influence * 2); // Raise up on hover
      dummy.scale.setScalar(particle.baseScale + influence * 1.5); // Scale up on hover
      
      // Rotation for visual flair
      dummy.rotation.x = influence * 2;
      dummy.rotation.y = influence * 2;

      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);

      // Color Update based on interaction
      const color = new THREE.Color();
      if (influence > 0.1) {
          // Electric Cyan/Purple on hover
          color.setHSL(0.5 + influence * 0.2, 0.9, 0.5 + influence * 0.5); 
      } else {
          // Dark Navy/Grey normally
          color.setHex(0x1A1A1D);
      }
      meshRef.current.setColorAt(i, color);
    });
    
    meshRef.current.instanceMatrix.needsUpdate = true;
    if (meshRef.current.instanceColor) meshRef.current.instanceColor.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, particles.length]}>
      {/* Hexagon shape (Cylinder with 6 segments) */}
      <cylinderGeometry args={[1, 1, 0.5, 6]} /> 
      <meshStandardMaterial 
        roughness={0.2} 
        metalness={0.8} 
        emissive="#6C63FF"
        emissiveIntensity={0.2}
      />
    </instancedMesh>
  );
};

const Background3D = () => {
  return (
    <div className="fixed inset-0 z-0 bg-[#0A1A2F]">
      <Canvas
        camera={{ position: [0, 0, 15], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: false }}
      >
        <color attach="background" args={['#0A1A2F']} />
        <fog attach="fog" args={['#0A1A2F', 5, 40]} />

        {/* Lights */}
        <ambientLight intensity={0.4} />
        <pointLight position={[0, 0, 10]} intensity={1} color="#30C6FF" />
        <directionalLight position={[10, 10, 5]} intensity={1} color="#6C63FF" />

        <ScrollRig />
        <TubeCursor />
        <ReactiveGrid />

      </Canvas>
    </div>
  );
};

export default Background3D;