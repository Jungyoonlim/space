"use client";

import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export const EarthMoonClock = (): JSX.Element => {
    const earthRef = useRef<THREE.Mesh | null>(null);
    const moonRef = useRef<THREE.Mesh | null>(null);

    useFrame(({ clock }) => {
        const t = clock.getElapsedTime();

        // Rotate Earth
        if (earthRef.current) earthRef.current.rotation.y = t * 0.1;

        // Orbit Moon around Earth
        if (moonRef.current){
            moonRef.current.position.x = Math.cos(t * 0.05) * 3;
            moonRef.current.position.z = Math.sin(t * 0.05) * 3; 
        }
    });
        
    return (
        <group>
            <mesh ref={earthRef}>
                <sphereGeometry args={[1, 32, 32]} />
                <meshBasicMaterial color="blue" transparent opacity={0.7} />
            </mesh>

            <mesh ref={moonRef}>
                <sphereGeometry args={[0.27, 32, 32]} />
                <meshBasicMaterial color="blue" transparent opacity={0.7} />
            </mesh>
        </group>
    );
};
