import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { EarthMoonClock } from '../components/earthMoon';

const HomePage = () => {

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
        <OrbitControls />
        <ambientLight intensity={0.5}/>
        <EarthMoonClock />
      </Canvas>
    </div>
  );
};