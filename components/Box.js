// import { createRoot } from 'react-dom/client'
import React, { useRef, useState, useEffect } from 'react'
// import { Canvas, useFrame } from '@react-three/fiber'
import { useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'

// import logo from '/Users/zachrizzo/flowteam_website_nextjs/public/Untitled design (4).png'
export default function Box({ boxTexture }) {
  const texturess = useLoader(TextureLoader, boxTexture)

  return (
    <mesh rotation={[90, 0, 20]}>
      <boxBufferGeometry attach="geometry" args={[3.5, 3.5, 3.5]} />
      <meshStandardMaterial map={texturess} />
      {/* <meshLambertMaterial attach="material" color="#7B3AF5" /> */}
    </mesh>
  )
}
