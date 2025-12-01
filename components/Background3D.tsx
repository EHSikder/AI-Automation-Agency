import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

// The Interactive Object
const InteractiveObject = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  useFrame((state, delta) => {
    // FIX: Clamp delta to max 0.1s. 
    // This ignores large time gaps (like when user switches tabs), preventing the "fast spin" effect.
    const dt = Math.min(delta, 0.1);

    if (meshRef.current) {
      // Basic rotation using safe delta
      meshRef.current.rotation.x += dt * 0.2;
      meshRef.current.rotation.y += dt * 0.25;

      // Mouse interaction (Parallax look)
      const mouseX = state.mouse.x * 2;
      const mouseY = state.mouse.y * 2;
      
      // Smooth lerp for mouse interaction using safe delta
      meshRef.current.rotation.x += (mouseY * 0.5 - meshRef.current.rotation.x) * dt;
      meshRef.current.rotation.y += (mouseX * 0.5 - meshRef.current.rotation.y) * dt;

      // Click reaction (Spin fast)
      if (clicked) {
        meshRef.current.rotation.z += dt * 10;
      }
    }
  });

  // Reset click state after a short burst
  useFrame(() => {
    if (clicked) {
      setTimeout(() => setClicked(false), 500);
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh
        ref={meshRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onClick={(e) => {
          e.stopPropagation();
          setClicked(true);
        }}
        scale={hovered ? 1.2 : 1}
      >
        {/* Icosahedron Geometry (Techy looking shape) */}
        <icosahedronGeometry args={[2.5, 0]} />
        
        {/* Electric Purple Material */}
        <meshStandardMaterial
          color="#6C63FF"
          emissive="#6C63FF"
          emissiveIntensity={hovered ? 0.8 : 0.2}
          wireframe={true}
          transparent
          opacity={0.8}
          roughness={0.1}
          metalness={1}
        />
      </mesh>
    </Float>
  );
};

// Floating Particles (Cyan)
const Particles = () => {
  const count = 100;
  const mesh = useRef<THREE.InstancedMesh>(null);
  const time = useRef(0);
  
  const dummy = new THREE.Object3D();
  const particles = useRef(new Array(count).fill(0).map(() => ({
    position: [
      (Math.random() - 0.5) * 20,
      (Math.random() - 0.5) * 20,
      (Math.random() - 0.5) * 10
    ],
    factor: Math.random() * 0.5 + 0.5,
    speed: Math.random() * 0.02 + 0.005
  })));

  useFrame((state, delta) => {
    if (mesh.current) {
        const dt = Math.min(delta, 0.1);
        time.current += dt;
        const t = time.current;
        
        particles.current.forEach((particle, i) => {
            dummy.position.set(
                (particle.position[0] as number),
                (particle.position[1] as number) + Math.sin(t * particle.factor) * 0.5,
                (particle.position[2] as number)
            );
            
            dummy.rotation.set(0, t * particle.speed, 0);
            
            const scale = 0.05 + Math.sin(t * particle.factor) * 0.02;
            dummy.scale.set(scale, scale, scale);
            
            dummy.updateMatrix();
            mesh.current!.setMatrixAt(i, dummy.matrix);
        });
        mesh.current.instanceMatrix.needsUpdate = true;
    }
  });

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
      <dodecahedronGeometry args={[0.2, 0]} />
      <meshBasicMaterial color="#30C6FF" wireframe />
    </instancedMesh>
  );
};

const Background3D = () => {
  return (
    <div className="fixed inset-0 z-0">
      <Canvas 
        className="w-full h-full"
        camera={{ position: [0, 0, 8], fov: 45 }}
        eventSource={document.getElementById('root') || undefined}
        eventPrefix="client"
      >
        <fog attach="fog" args={['#0A1A2F', 5, 20]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#6C63FF" />
        <spotLight position={[-10, -10, -10]} angle={0.15} penumbra={1} intensity={1} color="#30C6FF" />
        
        <InteractiveObject />
        <Particles />
      </Canvas>
    </div>
  );
};

export default Background3D;