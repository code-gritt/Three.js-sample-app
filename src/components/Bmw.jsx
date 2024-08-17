import React from "react";
import {
  OrbitControls,
  PresentationControls,
  Stage,
  useGLTF,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Threed from "./Threed";
import { Humanoid } from "./Humanoid";
import { Walk } from "./Walk";

function Model(props) {
  const { scene } = useGLTF("/walk-transformed.glb");
  return <primitive object={scene} scale={0.01} {...props} />;
}

const Bmw = () => {
  return (
    <>
      <Canvas
        dpr={[1, 2]}
        shadows
        camera={{ fov: 45 }}
        style={{ position: "absolute" }}
        environment="city"
        intensity={0.6}
      >
        <color attach="background" args={["#101010"]} />
        <PresentationControls
          speed={1.5}
          global
          zoom={0.5}
          polar={[-0.1, Math.PI / 4]}
        >
          <Stage environment={null}>
            {/* <Model scale={0.01} /> */}
            {/* <Threed scale={0.01} /> */}.{/* <Humanoid scale={0.01} /> */}
            <Walk scale={0.01} />
          </Stage>
          <OrbitControls enableZoom={true} autoRotate />
        </PresentationControls>
      </Canvas>
    </>
  );
};

export default Bmw;
