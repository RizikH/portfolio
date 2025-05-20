'use client';

import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { PerspectiveCamera, useGLTF } from '@react-three/drei';
import { useRef, useEffect, useMemo } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import { useLenis } from '@/app/context/lenisContext';

function FloatingBox() {
  const groupRef = useRef<THREE.Group>(null);
  const { scroll } = useLenis();
  const { size } = useThree();

  const videoSources = useMemo(() => [
    '/Videos/gamingcafe.mp4',
    '/Videos/visualbasic.mp4',
    '/Videos/newyork_loop.mp4',
    '/Videos/northcarolina.mp4',
    '/Videos/graduation.mp4',
  ], []);

  const videoTextures = useMemo(() => {
    return videoSources.map(src => {
      const video = document.createElement('video');
      video.src = src;
      video.crossOrigin = 'anonymous';
      video.loop = true;
      video.muted = true;
      video.playsInline = true;
      video.autoplay = true;
      video.play();

      const texture = new THREE.VideoTexture(video);
      texture.minFilter = THREE.LinearFilter;
      texture.magFilter = THREE.LinearFilter;
      texture.format = THREE.RGBAFormat;
      return texture;
    });
  }, [videoSources]);

  const zoom = 350;
  const spacing = useMemo(() => (size.height / zoom) * 2, [size.height]);

  useFrame(() => {
    if (!groupRef.current) return;

    const offset = size.height;
    const adjustedScroll = Math.max(scroll - offset, 0);
    const scrollIndex = adjustedScroll / size.height;

    const targetX = -scrollIndex * spacing;

    groupRef.current.position.x = THREE.MathUtils.lerp(
      groupRef.current.position.x,
      targetX,
      0.1
    );

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
      {videoTextures.map((texture, i) => (
        <mesh key={i} position={[i * spacing, 0, 0]} castShadow>
          <planeGeometry args={[3, 2]} />
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
        background: '#252525',
      }}
    >
      <PerspectiveCamera
        makeDefault
        position={[0, 0, 2]}
        fov={50}
        near={0.1}
        far={1000}
      />

      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <FloatingBox />
    </Canvas>
  );
}
