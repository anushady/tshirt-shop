import React from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { OrbitControls } from "@react-three/drei";
import "./App.css";

function Model(props) {
  const { nodes, materials } = useGLTF("/tshirt.glb");
  return (
    <group {...props} dispose={null} scale={0.045}>
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
        <h1>GOD TEE</h1>
        <h2>$50</h2>
        <div id="sizecont">
          <label for="Sizes">Sizes</label><br />
          <div id="select">
          <select name="size" id="sizes">
            <option value="xs">XS</option>
            <option value="s">S</option>
            <option value="l">L</option>
            <option value="xl">XL</option>
            <option value="xxl">XXL</option>
          </select>
          </div>
          <button>BUY</button>
        </div>
      </div>
      <div className="canv">
        <Canvas>
          <OrbitControls />
          <ambientLight intensity={0.8} color={"#ffffed"} />
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
