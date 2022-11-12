import React from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { OrbitControls } from "@react-three/drei";
import "./App.css";

function Model(props) {
  const { nodes, materials } = useGLTF("/tshirt.glb");
  return (
    
    <group {...props} dispose={null}  >
      
      <mesh
        geometry={nodes.OneGodobj.geometry}
        material={materials["Default.001"]}
        position={[0.0, -0.27, -0.07]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={0.04}
      />
    </group>
  );
}
function Hover(){

var searchbar = document.getElementById("searchbar")

  searchbar.style.display = "block";
  console.log("mouseenter")

}

function App() {
  return (
    <>
      <div className="logo">
        <img src="logo.gif" alt="" />
      </div>
      <div id="iconcont">
        <div id="cart" >
          <img src="Shopping.svg" alt="" />
        </div>
        <div id="search" >
        
          <form action="">
            
            {/* <button type="submit">Search</button> */}
            <button type="submit" id="searchbtn" onMouseEnter={Hover}><img src="lens.png" alt="" /></button>
            <input type="text" placeholder="Search.." name="search" id="searchbar" />
          </form>
        </div>
        
      </div>
      <div className="checkoutcont">
        {/* <h1>GOD TEE</h1> */}
        <h2>$50</h2>
        <div id="sizecont">
          {/* <label htmlFor="Sizes">Sizes:</label><br /> */}
         
            <ul name="size" id="sizes">
              <li value="xs">XS</li>
              <li value="s">S</li>
              <li value="m">M</li>
              <li value="l">L</li>
              <li value="xl">XL</li>
              <li value="xxl">XXL</li>
            </ul>
        </div>
        <button>BUY</button>
      </div>
      <div className="canv">
        <Canvas>
          <OrbitControls />
          <ambientLight intensity={0.8} color={"#ffffed"} />
          <directionalLight intensity={0.5} />
          <directionalLight intensity={0.9} />
          <directionalLight intensity={1} />

          <Model scale={window.innerWidth>500?1 : 0.8} />
        </Canvas>
        
      </div>
      
    </>
    
  );

}

export default App;
