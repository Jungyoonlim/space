import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';

export const Planet = ({ planet, index }) => {
    export meshRef = useRef();


    return (
        <Sphere ref={meshRef} args={[planet.radius, 32, 32]}>
            
        </Sphere>
    );
};