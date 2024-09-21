import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Planet } from './Planet';
import { TimeSpiral } from './TimeSpiral';
import { planetData } from '../constants/planetData';

export const SolarSystem = () => {
    return (
        <Canvas>
            <OrbitControls />

            {planetData.map((planet, index) => (
                
            ))}
        </Canvas>
    );
};