import React from 'react'
import { Sphere, MeshDistortMaterial } from '@react-three/drei'
export default function SphereAnimateThreejs({ scale }) {
  return (
    <Sphere args={[1, 100, 200]} scale={scale} visible={true}>
      <MeshDistortMaterial color={'#7B3AF5'} attach="material" />
    </Sphere>
  )
}
