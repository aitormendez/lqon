/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

export default function Torno(props) {
  const { nodes, materials } = useGLTF("../models/torno.glb");

  const tornoTorno = useRef();

  useEffect(() => {
    console.log(tornoTorno);
    tornoTorno.current.rotation.z = 2.36;
    // tornoTorno01.current.rotation.x = 1;
  }, []);

  useFrame((state, delta) => {
    tornoTorno.current.rotateY(delta);
  });
  0;

  return (
    <group {...props} dispose={null}>
      <group ref={tornoTorno} position={[-0.258, 1.476, 0]}>
        <mesh castShadow receiveShadow geometry={nodes.Cylinder009.geometry} />

        <mesh castShadow receiveShadow geometry={nodes.Cylinder009_1.geometry}>
          <meshStandardMaterial color="white" />
        </mesh>

        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder009_2.geometry}
        />
      </group>

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.cuerpo.geometry}
        position={[0, 1, 0]}
      >
        <meshStandardMaterial color="white" />
      </mesh>

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.flecha.geometry}
        position={[-0.491, 1.256, 1.001]}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <meshStandardMaterial color="red" />
      </mesh>
    </group>
  );
}

useGLTF.preload("../models/torno.glb");
