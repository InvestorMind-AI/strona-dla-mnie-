/* eslint-disable */
'use client';

import { useEffect, useState, useRef, useMemo } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment } from '@react-three/drei';

function NetworkScene() {
  const group = useRef<THREE.Group>(null);
  const linesRef = useRef<THREE.LineSegments>(null);
  const meshRef = useRef<THREE.InstancedMesh>(null);

  const particleCount = 120;
  const maxDistance = 6;

  // Initialize random positions and velocities
  const [positions, velocities] = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    const vel = [];
    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 40; // x
      pos[i * 3 + 1] = (Math.random() - 0.5) * 40; // y
      pos[i * 3 + 2] = (Math.random() - 0.5) * 40; // z
      vel.push(new THREE.Vector3(
        (Math.random() - 0.5) * 0.01,
        (Math.random() - 0.5) * 0.01,
        (Math.random() - 0.5) * 0.01
      ));
    }
    return [pos, vel];
  }, []);

  const dummy = useMemo(() => new THREE.Object3D(), []);

  useFrame(() => {
    if (!meshRef.current || !linesRef.current) return;

    const linePositions = [];
    const lineColors = [];
    const p1 = new THREE.Vector3();
    const p2 = new THREE.Vector3();

    for (let i = 0; i < particleCount; i++) {
      // Simulate camera moving forward by moving particles along Z towards camera
      positions[i * 3 + 2] += 0.03; 
      
      // Apply slight random velocities
      positions[i * 3] += velocities[i].x;
      positions[i * 3 + 1] += velocities[i].y;

      // Wrap around logic for infinite loop
      if (positions[i * 3 + 2] > 10) positions[i * 3 + 2] = -30;
      if (positions[i * 3] > 20) positions[i * 3] = -20;
      if (positions[i * 3] < -20) positions[i * 3] = 20;
      if (positions[i * 3 + 1] > 20) positions[i * 3 + 1] = -20;
      if (positions[i * 3 + 1] < -20) positions[i * 3 + 1] = 20;

      // Update instanced mesh
      dummy.position.set(positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2]);
      
      // Slowly rotate spheres
      dummy.rotation.x += velocities[i].y;
      dummy.rotation.y += velocities[i].x;
      dummy.updateMatrix();
      
      meshRef.current.setMatrixAt(i, dummy.matrix);
    }
    meshRef.current.instanceMatrix.needsUpdate = true;

    // Update lines connecting nearby points
    for (let i = 0; i < particleCount; i++) {
      p1.set(positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2]);
      for (let j = i + 1; j < particleCount; j++) {
        p2.set(positions[j * 3], positions[j * 3 + 1], positions[j * 3 + 2]);
        const dist = p1.distanceTo(p2);
        
        if (dist < maxDistance) {
          linePositions.push(p1.x, p1.y, p1.z, p2.x, p2.y, p2.z);
          
          // Fading color based on distance
          const alpha = 1.0 - (dist / maxDistance);
          // Neon blue/cyan hues
          lineColors.push(
            0.0 * alpha, 0.4 * alpha, 0.8 * alpha, // point 1 color
            0.0 * alpha, 0.4 * alpha, 0.8 * alpha  // point 2 color
          );
        }
      }
    }

    linesRef.current.geometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
    linesRef.current.geometry.setAttribute('color', new THREE.Float32BufferAttribute(lineColors, 3));
    linesRef.current.geometry.computeBoundingSphere();
  });

  return (
    <group ref={group}>
      <instancedMesh ref={meshRef} args={[undefined, undefined, particleCount]}>
        <sphereGeometry args={[0.2, 32, 32]} />
        <meshPhysicalMaterial 
          color="#06b6d4"
          emissive="#1d4ed8"
          emissiveIntensity={0.5}
          transmission={0.9} 
          opacity={1}
          metalness={0.1}
          roughness={0.05}
          ior={1.5}
          thickness={0.5}
          transparent
        />
      </instancedMesh>
      <lineSegments ref={linesRef}>
        <bufferGeometry />
        <lineBasicMaterial 
          vertexColors={true} 
          blending={THREE.AdditiveBlending}
          transparent={true}
          opacity={0.8}
          depthWrite={false}
        />
      </lineSegments>
    </group>
  );
}

export default function Background3D() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 -z-50 bg-[#020617] overflow-hidden pointer-events-none">
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 60, near: 0.1, far: 100 }}>
          <color attach="background" args={['#020617']} />
          <fog attach="fog" args={['#020617', 5, 25]} />
          
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={2} color="#3b82f6" />
          <directionalLight position={[-10, -10, -5]} intensity={1} color="#06b6d4" />
          
          <NetworkScene />
          
          <Environment preset="city" />
        </Canvas>
      </div>
      
      {/* Subtle digital noise overlay */}
      <div className="absolute inset-0 z-10 opacity-[0.05] mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#020617] via-transparent to-[#020617]"></div>
    </div>
  );
}
