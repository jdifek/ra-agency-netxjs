

'use client';

import * as THREE from 'three';

import React, { Suspense, useEffect, useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Html } from '@react-three/drei';

interface Logo3DProps {
  url: string;
  size?: number;   // размер Canvas в px
  autoRotate?: boolean;
}
const Model = ({ url, autoRotate }: { url: string; autoRotate?: boolean }) => {
  const { scene } = useGLTF(url);
  const groupRef = useRef<THREE.Group>(null);

  const clonedScene = useMemo(() => scene.clone(true), [scene]);

  useEffect(() => {
    if (!clonedScene || !groupRef.current) return;

    // Центровка
    const box = new THREE.Box3().setFromObject(clonedScene);
    const center = box.getCenter(new THREE.Vector3());
    clonedScene.position.sub(center);

    // Пример материала
    scene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        if (Array.isArray(mesh.material)) {
          mesh.material.forEach((mat) => (mat.side = THREE.DoubleSide));
        } else {
          mesh.material.side = THREE.DoubleSide;
        }
      }
    });
    
    // Масштаб
    groupRef.current.scale.setScalar(0.5); // или авто
  }, [clonedScene]);

  useFrame(() => {
    if (autoRotate && groupRef.current) {
      groupRef.current.rotation.y += 0.003;
    }
  });

  return (
    <group ref={groupRef}>
      <primitive object={clonedScene} />
    </group>
  );
};




export const Logo3D: React.FC<Logo3DProps> = ({ url, size = 160, autoRotate = true }) => {
  return (
    <Canvas
      style={{ width: size, height: size, display: 'block' }}
      camera={{ position: [0, 0, 0.5], fov: 45 }} // ← камеру ближе
      gl={{ antialias: true }}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[2, 2, 3]} intensity={1.2} />
      <Suspense fallback={<Html>Loading...</Html>}>
        <Model url={url} autoRotate={autoRotate} />
      </Suspense>
    </Canvas>
  );
};
