'use client';

import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrthographicCamera } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';
import { useLenis } from '@/app/context/lenisContext';

function FloatingBox() {
  const groupRef = useRef(null)
  const { scroll } = useLenis();

  const panelSources = [
    '/Images/kid.jpg',
    '/Images/suit.jpg',
    '/Images/newyork.jpg',
    '/Images/uncg.jpg',
    '/Images/graduation.jpg',
  ];


  const textures = useLoader(THREE.TextureLoader, panelSources);

  const zoom = 350; // camera zoom level
  const spacing = (window.innerHeight / zoom) * 1.3; // Adjusted spacing

  useFrame(() => {
    if (!groupRef.current) return;

    const offset = 1 * window.innerHeight;
    const adjustedScroll = Math.max(scroll - offset, 0);
    const scrollIndex = adjustedScroll / window.innerHeight;

    const targetX = -scrollIndex * spacing;

    // Smooth horizontal movement
    groupRef.current.position.x = THREE.MathUtils.lerp(
      groupRef.current.position.x,
      targetX,
      0.1
    );

    // Fade effect for each panel
    groupRef.current.children.forEach((child, i) => {
      if (child instanceof THREE.Mesh && child.material instanceof THREE.MeshStandardMaterial) {
        const distanceFromCenter = Math.abs(i - scrollIndex);
        const targetOpacity = THREE.MathUtils.clamp(
          1 - Math.pow(distanceFromCenter, 2),
          0.05,
          1
        );


        child.material.transparent = true;
        child.material.opacity = THREE.MathUtils.lerp(
          child.material.opacity ?? 1,
          targetOpacity,
          0.1
        );
      }
    });
  });


  return (
    <group ref={groupRef}>
      {textures.map((texture, i) => (
        <mesh key={i} position={[i * spacing, 0, 0]} castShadow>
          <planeGeometry args={[2.5, 2]} />
          <meshStandardMaterial
            map={texture}
            side={THREE.DoubleSide}
            transparent
            opacity={1}
          />
        </mesh>
      ))}
    </group>

  );
}

export default function MyScene() {
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        background: 'linear-gradient(to bottom, #f9f9f9, #eaeaea)',
      }}
    >
      <OrthographicCamera
        makeDefault
        position={[-0.3, 0, 10]}
        zoom={350}
        near={0.1}
        far={100}
      />
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <FloatingBox />
    </Canvas>
  );
}
