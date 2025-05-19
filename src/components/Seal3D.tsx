
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const SealModel = ({ position = [0, 0, 0], scrollY = 0 }: { position?: [number, number, number], scrollY?: number }) => {
  const mainBodyRef = useRef<THREE.Group>(null);
  const rightFlipperRef = useRef<THREE.Mesh>(null);
  const leftFlipperRef = useRef<THREE.Mesh>(null);
  const rightMaracaRef = useRef<THREE.Mesh>(null);
  const leftMaracaRef = useRef<THREE.Mesh>(null);
  
  // Animation based on time and scroll position
  useFrame(({ clock }) => {
    if (mainBodyRef.current) {
      // Gentle body movement
      mainBodyRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.5) * 0.1;
      mainBodyRef.current.position.y = Math.sin(clock.getElapsedTime()) * 0.05;
    }
    
    // Animate flippers
    if (rightFlipperRef.current && leftFlipperRef.current) {
      rightFlipperRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 2) * 0.2;
      leftFlipperRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 2 + 0.5) * 0.2;
    }
    
    // Animate maracas with faster movement
    if (rightMaracaRef.current && leftMaracaRef.current) {
      rightMaracaRef.current.rotation.z = Math.sin(clock.getElapsedTime() * 8) * 0.3;
      leftMaracaRef.current.rotation.z = Math.sin(clock.getElapsedTime() * 8 + Math.PI) * 0.3;
      
      // Add slight up and down motion to the maracas
      rightMaracaRef.current.position.y = Math.sin(clock.getElapsedTime() * 8) * 0.05;
      leftMaracaRef.current.position.y = Math.sin(clock.getElapsedTime() * 8 + Math.PI) * 0.05;
    }
  });
  
  return (
    <group position={position} rotation={[0, Math.PI * 0.1, 0]}>
      {/* Main body group */}
      <group ref={mainBodyRef}>
        {/* Body */}
        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial color="#CFD8DC" />
        </mesh>
        
        {/* Head */}
        <mesh position={[0, 0.8, 0.5]}>
          <sphereGeometry args={[0.7, 32, 32]} />
          <meshStandardMaterial color="#ECEFF1" />
        </mesh>
        
        {/* Left eye */}
        <mesh position={[-0.3, 0.9, 1]}>
          <sphereGeometry args={[0.12, 32, 32]} />
          <meshStandardMaterial color="#263238" />
          
          {/* Eye highlight */}
          <mesh position={[0.05, 0.05, 0.05]}>
            <sphereGeometry args={[0.04, 32, 32]} />
            <meshStandardMaterial color="white" />
          </mesh>
        </mesh>
        
        {/* Right eye */}
        <mesh position={[0.3, 0.9, 1]}>
          <sphereGeometry args={[0.12, 32, 32]} />
          <meshStandardMaterial color="#263238" />
          
          {/* Eye highlight */}
          <mesh position={[0.05, 0.05, 0.05]}>
            <sphereGeometry args={[0.04, 32, 32]} />
            <meshStandardMaterial color="white" />
          </mesh>
        </mesh>
        
        {/* Nose */}
        <mesh position={[0, 0.7, 1.1]} scale={[1, 1, 0.5]}>
          <sphereGeometry args={[0.15, 32, 32]} />
          <meshStandardMaterial color="#546E7A" />
        </mesh>
        
        {/* Smile */}
        <mesh position={[0, 0.5, 1]}>
          <torusGeometry args={[0.3, 0.03, 16, 100, Math.PI]} />
          <meshStandardMaterial color="#37474F" />
        </mesh>
        
        {/* Left flipper */}
        <mesh ref={leftFlipperRef} position={[-0.8, 0, 0]} rotation={[0, 0, -Math.PI / 4]}>
          <capsuleGeometry args={[0.15, 0.3, 8, 16]} />
          <meshStandardMaterial color="#B0BEC5" />
          
          {/* Left maraca */}
          <group ref={leftMaracaRef} position={[-0.4, 0, 0]} rotation={[0, 0, -Math.PI / 4]}>
            <mesh position={[0, 0, 0]} scale={[1, 1.3, 1]}>
              <sphereGeometry args={[0.15, 32, 32]} />
              <meshStandardMaterial color="#FF80AB" />
            </mesh>
            <mesh position={[0, -0.3, 0]}>
              <cylinderGeometry args={[0.03, 0.03, 0.3, 16]} />
              <meshStandardMaterial color="#8D6E63" />
            </mesh>
          </group>
        </mesh>
        
        {/* Right flipper */}
        <mesh ref={rightFlipperRef} position={[0.8, 0, 0]} rotation={[0, 0, Math.PI / 4]}>
          <capsuleGeometry args={[0.15, 0.3, 8, 16]} />
          <meshStandardMaterial color="#B0BEC5" />
          
          {/* Right maraca */}
          <group ref={rightMaracaRef} position={[0.4, 0, 0]} rotation={[0, 0, Math.PI / 4]}>
            <mesh position={[0, 0, 0]} scale={[1, 1.3, 1]}>
              <sphereGeometry args={[0.15, 32, 32]} />
              <meshStandardMaterial color="#64FFDA" />
            </mesh>
            <mesh position={[0, -0.3, 0]}>
              <cylinderGeometry args={[0.03, 0.03, 0.3, 16]} />
              <meshStandardMaterial color="#8D6E63" />
            </mesh>
          </group>
        </mesh>
        
        {/* Tail */}
        <mesh position={[0, -0.6, -0.8]} rotation={[Math.PI / 6, 0, 0]} scale={[1, 0.5, 0.75]}>
          <sphereGeometry args={[0.4, 32, 32]} />
          <meshStandardMaterial color="#B0BEC5" />
        </mesh>
      </group>
    </group>
  );
};

const Seal3D = ({ scrollY = 0 }: { scrollY?: number }) => {
  return (
    <div className="w-full h-[400px] md:h-[500px] lg:h-[600px]">
      <Canvas
        shadows
        camera={{ position: [0, 0, 5], fov: 50 }}
        className="touch-none"
      >
        <ambientLight intensity={0.8} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        <SealModel scrollY={scrollY} />
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 1.5}
          minAzimuthAngle={-Math.PI / 4}
          maxAzimuthAngle={Math.PI / 4}
        />
      </Canvas>
    </div>
  );
};

export default Seal3D;
