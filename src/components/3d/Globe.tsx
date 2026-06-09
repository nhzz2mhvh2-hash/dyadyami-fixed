'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';
import { motion } from 'framer-motion';

const DESTINATIONS = [
  { name: 'Doha', pos: [1.3, 0.8, 0.5] },
  { name: 'London', pos: [-0.2, 1.4, 0.5] },
  { name: 'New York', pos: [-1.2, 0.8, 0.8] },
  { name: 'Tokyo', pos: [1.4, 0.5, -0.8] },
];

const vertexShader = `
  varying vec3 vNormal;
  varying vec3 vViewPosition;
  void main() {
    vNormal = normalize(normalMatrix * normal);
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    vViewPosition = -mvPosition.xyz;
    gl_Position = projectionMatrix * mvPosition;
  }
`;

const fragmentShader = `
  varying vec3 vNormal;
  varying vec3 vViewPosition;
  uniform vec3 color;
  void main() {
    float intensity = pow(0.7 - dot(vNormal, normalize(vViewPosition)), 2.0);
    gl_FragColor = vec4(color, 1.0) * intensity;
  }
`;

export default function Globe() {
  const meshRef = useRef<THREE.Mesh>(null);
  const atmosphereRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.y = time * 0.05;
    }
    if (atmosphereRef.current) {
      atmosphereRef.current.rotation.y = time * 0.06;
    }
  });

  const globeMaterial = useMemo(() => new THREE.MeshStandardMaterial({
    color: '#06060E', // --color-void
    metalness: 0.9,
    roughness: 0.2,
    emissive: '#0F0F1E', // --color-obsidian
    emissiveIntensity: 0.5,
    wireframe: true,
  }), []);

  return (
    <group>
      <ambientLight intensity={0.1} />
      <pointLight position={[10, 10, 10]} intensity={1.5} color="#C9A96E" /> {/* --color-gold */}
      <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={2} color="#F0EDE6" />

      {/* Atmosphere Glow */}
      <mesh ref={atmosphereRef} scale={1.2}>
        <sphereGeometry args={[2, 64, 64]} />
        <shaderMaterial
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          uniforms={{ color: { value: new THREE.Color('#C9A96E') } }} // Gold Glow
          side={THREE.BackSide}
          transparent
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      <mesh ref={meshRef}>
        <sphereGeometry args={[2, 64, 64]} />
        <primitive object={globeMaterial} attach="material" />

        {DESTINATIONS.map((dest, i) => (
          <group key={i} position={dest.pos as [number, number, number]}>
            <mesh>
              <sphereGeometry args={[0.03, 16, 16]} />
              <meshBasicMaterial color="#C9A96E" />
              <pointLight distance={1} intensity={1} color="#C9A96E" />
            </mesh>
            <Html distanceFactor={8} position={[0, 0.1, 0]}>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-glass-bg backdrop-blur-xl px-3 py-1 rounded-full border border-white/10 text-[8px] text-white uppercase tracking-[0.3em] whitespace-nowrap pointer-events-none shadow-gold"
              >
                {dest.name}
              </motion.div>
            </Html>
          </group>
        ))}
      </mesh>
    </group>
  );
}
