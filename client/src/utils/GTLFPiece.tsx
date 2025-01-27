/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.15 public/assets/piece.glb --types 
*/

//This can be used instead of the models defined in Piece I think. 
//I'm not not too confident to do this before I understand what is happening a bit more

import * as THREE from 'three'
// import React from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

export type GLTFResult = GLTF & {
  nodes: {
    materials1: THREE.Mesh
    materials1_1: THREE.Mesh
    materials1_2: THREE.Mesh
    materials1_3: THREE.Mesh
    materials2: THREE.Mesh
    materials2_1: THREE.Mesh
    materials2_2: THREE.Mesh
    materials2_3: THREE.Mesh
    materials3: THREE.Mesh
    materials3_1: THREE.Mesh
    materials3_2: THREE.Mesh
    materials3_3: THREE.Mesh
  }
  materials: {
    m010: THREE.MeshStandardMaterial
    m007: THREE.MeshStandardMaterial
    n: THREE.MeshStandardMaterial
    m011: THREE.MeshStandardMaterial
    m001: THREE.MeshStandardMaterial
    m002: THREE.MeshStandardMaterial
    n001: THREE.MeshStandardMaterial
    n003: THREE.MeshStandardMaterial
    m004: THREE.MeshStandardMaterial
    m005: THREE.MeshStandardMaterial
    m006: THREE.MeshStandardMaterial
    n002: THREE.MeshStandardMaterial
  }
}

// type ContextType = Record<string, React.ForwardRefExoticComponent<JSX.IntrinsicElements['mesh']>>

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/piece.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group position={[0, 1.5, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.materials1.geometry} material={materials.m010} />
        <mesh geometry={nodes.materials1_1.geometry} material={materials.m007} />
        <mesh geometry={nodes.materials1_2.geometry} material={materials.n} />
        <mesh geometry={nodes.materials1_3.geometry} material={materials.m011} />
      </group>
      <group position={[0, 0.9, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.materials2.geometry} material={materials.m001} />
        <mesh geometry={nodes.materials2_1.geometry} material={materials.m002} />
        <mesh geometry={nodes.materials2_2.geometry} material={materials.n001} />
        <mesh geometry={nodes.materials2_3.geometry} material={materials.n003} />
      </group>
      <group position={[0, 0.57, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.materials3.geometry} material={materials.m004} />
        <mesh geometry={nodes.materials3_1.geometry} material={materials.m005} />
        <mesh geometry={nodes.materials3_2.geometry} material={materials.m006} />
        <mesh geometry={nodes.materials3_3.geometry} material={materials.n002} />
      </group>
    </group>
  )
}

useGLTF.preload('/piece.glb')
