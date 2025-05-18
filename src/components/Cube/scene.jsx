'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useEffect, use } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import * as THREE from 'three';
import gsap from 'gsap';
import { useLenis } from '@/app/context/lenisContext';


function ResponsiveModel() {
  const modelRef = useRef();
  const { scene, animations } = useGLTF('/models/eve_wall-e__eva.glb');
  const { actions } = useAnimations(animations, modelRef);
  const { scroll } = useLenis();

  const floatAmplitude = 0.5;
  const floatSpeed = 1.5;
  const rotationSpeed = 0.3;
  let isFloating = true;


  useEffect(() => {
    if (actions && actions[Object.keys(actions)[0]]) {
      actions[Object.keys(actions)[0]].play();
    }
  }, [actions]);


  useEffect(() => {
    if (!modelRef.current) return;

    modelRef.current.traverse((node) => {
      if (node.isMesh) {
        node.castShadow = true;
        node.receiveShadow = true;
        node.material.metalness = 0.5;
        node.material.roughness = 0.5;
        node.material.envMapIntensity = 1;
      }
    });
  });


  useEffect(() => {
    if (!modelRef.current) return;

    gsap.to(modelRef.current.scale, {
      x: 1,
      y: 1,
      z: 1,
      duration: 1,
      ease: 'power2.out',
      delay: 0.2,
    });

  });

  useFrame(() => {
    if (!modelRef.current) return;

    // Floating effect
    if (isFloating) {
      const scrollOffset = Math.sin(Date.now() * 0.001 * floatSpeed) * floatAmplitude;
      modelRef.current.position.y = scrollOffset;
    }


    // X rotation (you can keep or remove as needed)
    const xRotation = (scroll / window.innerHeight) * Math.PI * 2;
    modelRef.current.rotation.x = xRotation;


  });



  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <primitive
        scale={[0, 0, 0]}
        position={[8, 0, 0]}
        ref={modelRef}
        object={scene}
      />
    </>
  );
}


export default function MyScene() {
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      onCreated={({ gl }) => {
        gl.setClearColor(0x000000, 0);
        gl.shadowMap.enabled = true;
        gl.shadowMap.type = THREE.PCFSoftShadowMap;
        gl.physicallyCorrectLights = true;
        gl.toneMapping = THREE.ACESFilmicToneMapping;
        gl.toneMappingExposure = 2.5;
      }}
      camera={{ position: [8, 0, 16], fov: 50 }}
      style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh' }}
    >
      <ResponsiveModel scroll={scroll} />
    </Canvas>
  );
}