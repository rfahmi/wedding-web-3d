"use client";
import Box from "@/components/Box";
import Draggable from "@/components/Draggable";
import Floor from "@/components/Floor";
import LightBulb from "@/components/LightBulb";
import Controls from "@/components/OrbitControls";
import { Cloud, Sky, SpotLight, Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export default function Home() {
  return (
    <div className="scene">
      <Canvas
        shadows
        className="canvas"
        camera={{
          position: [-6, 20, 20],
          zoom:5
        }}
      >
        <Sky />
        {/* <Cloud/> */}
        {/* <SpotLight /> */}
        <ambientLight color={"white"} intensity={0.3} />
        <LightBulb position={[0, 3, 0]} />
        {/* <Draggable>
        </Draggable> */}
        <Box rotateX={3} rotateY={0.2} onClick={()=>alert('log')}/>
        <Controls />
        <Floor position={[0, -1, 0]} />
      </Canvas>
    </div>
  );
}
