/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 /Volumes/C/Documentos C/Trabajos/LQON (Lo quieras o no)/metro 3D/exportados gLTF/anden.glb /Users/aitor/Documents/Sites/lqon/public/models/anden.glb /Volumes/C/Documentos C/Trabajos/LQON (Lo quieras o no)/ 
*/

import React, { useRef } from "react";
import { useGLTF, Text } from "@react-three/drei";

const Nombre = () => {
  return (
    <Text
      position={[-50, 22.2, -6.4]}
      rotation-x={0.4}
      font="../fonts/helveue-bold-webfont.woff"
      fontSize={1.5}
      color="#AC0000"
    >
      Oscar Cabanas
    </Text>
  );
};

export default function Model(props) {
  const { nodes, materials } = useGLTF("../models/anden.glb");

  var nombres = [];
  for (var i = 0; i < 7; i++) {
    nombres.push(
      <Text
        key={`nombre-${i}`}
        position={[i * 60 - 190, 22.2, -6.4]}
        rotation-x={0.4}
        font="../fonts/helveue-bold-webfont.woff"
        fontSize={1.5}
        color="#AC0000"
      >
        Oscar Cabanas
      </Text>
    );
  }
  return (
    <group {...props} dispose={null}>
      {/* <Nombre /> */}
      {nombres}
      <mesh
        geometry={nodes.anden.geometry}
        material={materials["baked.suelo"]}
      />

      <mesh position={[-250, 18, -14.8]} material={materials.negro}>
        <boxGeometry args={[100, 60, 40]} />
      </mesh>

      <mesh position={[250, 18, -14.8]} material={materials.negro}>
        <boxGeometry args={[100, 60, 40]} />
      </mesh>

      <mesh
        geometry={nodes.pared.geometry}
        material={materials["baked.pared"]}
        position={[0, 9.5, -10]}
      />
      <mesh
        geometry={nodes["soporte-señal2"].geometry}
        material={materials.negro}
        position={[-119.313, 22.358, -6.77]}
        rotation={[0.461, 0, 0]}
      />
      <mesh
        geometry={nodes["soporte-señal1"].geometry}
        material={materials.negro}
        position={[90.592, 22.358, -6.77]}
        rotation={[0.461, 0, 0]}
      />
      <mesh
        geometry={nodes.pasillo.geometry}
        material={materials["baked.pasillo"]}
      />
      <mesh
        geometry={nodes.Cube.geometry}
        material={materials.negro}
        position={[65.908, 22.256, -55.019]}
      />
      <mesh
        geometry={nodes["soporte-señal-pasillo1"].geometry}
        material={materials.negro}
        position={[86.607, 22.256, -55.019]}
      />
      <mesh
        geometry={nodes["soporte-señal-pasillo2"].geometry}
        material={materials.negro}
        position={[65.908, 22.256, -88.961]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh geometry={nodes.cartelmarco.geometry} material={materials.negro} />
      <mesh
        geometry={nodes.bancos.geometry}
        material={materials.blanco}
        position={[161.677, 13.215, -8.752]}
      />
      <mesh
        geometry={nodes.mapamapa001.geometry}
        material={materials["plano.002"]}
        position={[0, 0, -0.572]}
      />
      <mesh
        geometry={nodes.cartelcartel001.geometry}
        material={materials["Cartel.002"]}
        position={[0, 0, 0.08]}
      />
      <mesh
        geometry={nodes.mapamarco.geometry}
        material={materials.blanco}
        position={[0, 0, -1.351]}
      />
    </group>
  );
}

useGLTF.preload("../models/anden.glb");