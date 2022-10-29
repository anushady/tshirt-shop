import React from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { OrbitControls } from "@react-three/drei";
import "./App.css";

function Model(props) {
  const { nodes, materials } = useGLTF("/tshirt.glb");
  return (
    <group {...props} dispose={null} scale={0.05}>
      <mesh
        geometry={nodes.OneGodobj.geometry}
        material={materials["Default.001"]}
        position={[0.09, -0.27, -0.07]}
        rotation={[0, -Math.PI / 2, 0]}
      />
    </group>
  );
}

function App() {
  return (
    <>
      <div className="logo">
        <h1>LOGO</h1>
      </div>
      <div className="checkoutcont">
        <h1>GOD T-Shirt</h1>
        <h2>$40.50</h2>
        <p>select size</p>
        <ul>
          <li>XS</li>
          <li>S</li>
          <li>M</li>
          <li>L</li>
          <li>XL</li>
          <li>XXL</li>
        </ul>
        <button>CHECK OUT</button>
      </div>
      <div className="canv">
        <Canvas>
          <OrbitControls />
          <ambientLight intensity={0.6} />
          <directionalLight intensity={0.5} />
          <directionalLight intensity={0.9} />
          <directionalLight intensity={1} />

          <Model />
        </Canvas>
      </div>
    </>
  );
}

export default App;
