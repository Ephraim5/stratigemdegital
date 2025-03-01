import { useGLTF } from "@react-three/drei";
import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Earth = () => {
  const { scene } = useGLTF("./planet/scene.gltf");
  return <primitive object={scene} scale={2.5} position={[0, 0, 0]} />;
};

const MovingLight = () => {
  const lightRef = useRef();

  useFrame(({ camera, scene }) => {
    if (lightRef.current) {
      // Move the light to the camera position
      lightRef.current.position.copy(camera.position);

      // Make the light point at the Earth (assumed to be at [0, 0, 0])
      lightRef.current.target.position.set(0, 0, 0);
      lightRef.current.target.updateMatrixWorld();
    }
  });

  return (
    <spotLight
      ref={lightRef}
      intensity={6}
      distance={30}
      angle={0.5}
      penumbra={1}
      castShadow
    />
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.2,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={3} castShadow />
        
        {/* Light that follows the camera and points at Earth */}
        <MovingLight />

        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        
        <Earth />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
