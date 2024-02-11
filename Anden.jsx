/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 /Users/aitor/Documents/Sites/lqon/public/models/anden.glb 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/anden.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.anden.geometry} material={materials['baked.suelo']} />
      <mesh geometry={nodes.pared.geometry} material={materials['baked.pared']} position={[0, 9.5, -10]} />
      <mesh geometry={nodes.pasillo.geometry} material={materials['baked.pasillo']} />
      <mesh geometry={nodes.soportes.geometry} material={materials.negro} position={[86.607, 22.256, -55.019]} />
      <mesh geometry={nodes['pared-sin-cartel'].geometry} material={materials['baked.pared-sin-cartel']} position={[0, 9.5, -155.814]} />
      <mesh geometry={nodes.soportefragmento.geometry} material={materials['negro.001']} position={[-99.503, 22.358, -6.77]} rotation={[0.461, 0, 0]} scale={[200, 1, 0.175]} />
      <mesh geometry={nodes.cartelmarco.geometry} material={materials.negro} />
      <mesh geometry={nodes.cartelcartel001.geometry} material={materials['cartel-oscar-cabanas']} position={[0, 0, 0.08]} />
      <mesh geometry={nodes.cartelcartel002.geometry} material={materials['cartel-vorja-encikutao']} position={[0, 0, -41.231]} />
      <mesh geometry={nodes.cartelcartel003.geometry} material={materials['cartel-taktel']} position={[0, 0, -50.077]} />
      <mesh geometry={nodes.cartelcartel004.geometry} material={materials['cartel-juan-carlos-gorreta']} position={[0, 0, -58.868]} />
      <mesh geometry={nodes.cartelcartel005.geometry} material={materials['cartel-vicius']} position={[0, 0, -68.376]} />
      <mesh geometry={nodes.cartelcartel006.geometry} material={materials['cartel-grupo-chasky']} position={[0, 0, -77.673]} />
      <mesh geometry={nodes.cartelcartel007.geometry} material={materials['cartel-nono-murcia']} position={[0, 0, -86.657]} />
      <mesh geometry={nodes.cartelcartel008.geometry} material={materials['cartel-el-chirly']} position={[0, 0, -95.393]} />
      <mesh geometry={nodes.cartelcartel009.geometry} material={materials['cartel-briana-weapons']} position={[0, 0, -105.182]} />
      <mesh geometry={nodes.cartelcartel010.geometry} material={materials['cartel-lucia-montenegro']} position={[0, 0, -116.542]} />
      <mesh geometry={nodes.banco.geometry} material={materials.banco} position={[-151.306, 13.101, -8.752]} />
      <mesh geometry={nodes.mapamarco.geometry} material={materials['marco.plano']} position={[0, 0, -1.351]} />
      <mesh geometry={nodes.mapamapa001.geometry} material={materials['plano-oscar-cabanas']} position={[0, 0, -0.572]} />
      <mesh geometry={nodes.mapamapa002.geometry} material={materials['plano-vorja-encikutao']} position={[0, 0, -41.882]} />
      <mesh geometry={nodes.mapamapa003.geometry} material={materials['plano-taxtel']} position={[0, 0, -50.728]} />
      <mesh geometry={nodes.mapamapa004.geometry} material={materials['plano-juan-carlos-gorreta']} position={[0, 0, -59.52]} />
      <mesh geometry={nodes.mapamapa005.geometry} material={materials['plano-vicius']} position={[0, 0, -69.027]} />
      <mesh geometry={nodes.mapamapa006.geometry} material={materials['plano-grupo-chasky']} position={[0, 0, -78.324]} />
      <mesh geometry={nodes.mapamapa007.geometry} material={materials['plano-nono-murcia']} position={[0, 0, -87.308]} />
      <mesh geometry={nodes.mapamapa008.geometry} material={materials['plano-el-chirly']} position={[0, 0, -96.044]} />
      <mesh geometry={nodes.mapamapa009.geometry} material={materials['plano-briana-weapons']} position={[0, 0, -105.834]} />
      <mesh geometry={nodes.mapamapa010.geometry} material={materials['plano-lucia-montenegro']} position={[0, 0, -117.194]} />
    </group>
  )
}

useGLTF.preload('/anden.glb')
