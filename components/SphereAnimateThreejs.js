import React from 'react'
import { Sphere, MeshDistortMaterial } from '@react-three/drei'
export default function SphereAnimateThreejs({
  positionArray,
  rotationArray,
  scale,
}) {
  return (
    <Sphere
      position={positionArray}
      args={[1, 100, 200]}
      rotation={rotationArray}
      scale={scale}
    >
      <MeshDistortMaterial color={'#7B3AF5'} attach="material" />
    </Sphere>
  )
}
