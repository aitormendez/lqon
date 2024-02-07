/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 /Volumes/C/Documentos C/Trabajos/LQON (Lo quieras o no)/metro 3D/exportados gLTF/anden.glb /Users/aitor/Documents/Sites/lqon/public/models/anden.glb /Volumes/C/Documentos C/Trabajos/LQON (Lo quieras o no)/ 
*/

import { useGLTF, Text } from "@react-three/drei";

export default function Anden({
  nombreEstacion,
  materialPlano,
  materialCartel,
  tipo,
  ...props
}) {
  const { nodes, materials } = useGLTF("../models/anden.glb");
  let nombres = [];

  for (let i = 0; i < 7; i++) {
    nombres.push(
      <Text
        key={`nombre-${i}`}
        position={[i * 60 - 190, 22.2, -6.4]}
        rotation-x={0.4}
        font="../fonts/helveue-bold-webfont.woff"
        fontSize={1.5}
        color="#AC0000"
        textAlign="left"
      >
        {nombreEstacion}
      </Text>
    );
  }

  return (
    <group {...props} dispose={null}>
      {nombres}

      <mesh position={[-250, 18, -14.8]} material={materials.negro}>
        <boxGeometry args={[100, 60, 40]} />
      </mesh>

      <mesh position={[250, 18, -14.8]} material={materials.negro}>
        <boxGeometry args={[100, 60, 40]} />
      </mesh>

      <mesh
        geometry={nodes.anden.geometry}
        material={materials["baked.suelo"]}
      />
      <mesh
        geometry={nodes.pared.geometry}
        material={
          tipo === "accion"
            ? materials["baked.pared"]
            : materials["baked.pared-sin-cartel"]
        }
        position={[0, 9.5, -10]}
      />
      <mesh
        geometry={nodes.pasillo.geometry}
        material={materials["baked.pasillo"]}
      />
      <mesh
        geometry={nodes.soportes.geometry}
        material={materials.negro}
        position={[86.607, 22.256, -55.019]}
      />
      <mesh
        geometry={nodes.banco.geometry}
        material={materials.banco}
        position={[-151.306, 13.101, -8.752]}
      />
      {tipo === "accion" && (
        <>
          <mesh
            geometry={nodes.cartelmarco.geometry}
            material={materials.negro}
          />
          <mesh
            geometry={nodes.cartelcartel001.geometry}
            material={materials[materialCartel]}
            position={[0, 0, 0.08]}
          />
          <mesh
            geometry={nodes.mapamarco.geometry}
            material={materials["marco.plano"]}
            position={[0, 0, -1.351]}
          />
          <mesh
            geometry={nodes.mapamapa001.geometry}
            material={materials[materialPlano]}
            position={[0, 0, -0.572]}
          />
        </>
      )}
    </group>
  );
}

useGLTF.preload("../models/anden.glb");
