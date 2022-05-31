/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: sriniwasj (https://sketchfab.com/sriniwasj)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/apple-iphone-xs-max-08e76b5bd30847f6a23d4748b85ef62b
title: Apple iPhone XS Max
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Iphone({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/IphoneXsMax.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.5}>
        <group
          position={[1.32, 5.74, -0.18]}
          rotation={[1.57, 0.01, 1.57]}
          scale={[0.09, 0.2, 0.43]}
        >
          <mesh
            geometry={nodes.BackCamerasCover001_0.geometry}
            material={materials['Glass.001']}
          />
        </group>
        <group position={[-0.07, 2.67, 0.08]} scale={[0.99, 1, 1]}>
          <mesh geometry={nodes.Front_0.geometry} material={materials.Black} />
        </group>
        <group position={[-0.07, 2.67, 0.12]} scale={[0.98, 0.99, 1]}>
          <mesh
            geometry={nodes.Screen_0.geometry}
            material={materials.Wallpaper}
          />
        </group>
        <group
          position={[-2.06, 5, 0.08]}
          rotation={[3.09, -1.56, -1.57]}
          scale={[0.05, 0.05, 0.03]}
        >
          <mesh
            geometry={nodes.PowerButton_0.geometry}
            material={materials['Frame.001']}
          />
        </group>
        <group
          position={[-2.06, 4.99, 0.08]}
          rotation={[3.09, -1.56, -1.57]}
          scale={[0.05, 0.05, 0.03]}
        >
          <mesh
            geometry={nodes.VolumeButtons_2.geometry}
            material={materials['Black.001']}
          />
          <mesh
            geometry={nodes.VolumeButtons_0.geometry}
            material={materials['Frame.001']}
          />
        </group>
        <group
          position={[-0.51, -1.37, 0.08]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.05, 0.05, 0.01]}
        >
          <mesh
            geometry={nodes.Screw_0.geometry}
            material={materials['AppleLogo.001']}
          />
          <mesh
            geometry={nodes.Screw_1.geometry}
            material={materials['Frame.001']}
          />
        </group>
        <group
          position={[1.92, 3.1, 0.08]}
          rotation={[-3.14, 1.55, -1.57]}
          scale={[0.03, 0.03, 0.01]}
        >
          <mesh
            geometry={nodes.SimSlot_0.geometry}
            material={materials['Black.000']}
          />
          <mesh geometry={nodes.SimSlot_1.geometry} material={materials.Anti} />
        </group>
        <group position={[-0.22, 6.45, 0.27]} scale={0.81}>
          <mesh
            geometry={nodes.EarphoneGrill_0.geometry}
            material={materials.FrontSpeakerGrill}
          />
        </group>
        <group
          position={[-2.09, 5.56, 0.06]}
          rotation={[0, -1.57, 0]}
          scale={[0.02, 0.03, 0.03]}
        >
          <mesh
            geometry={nodes.MuteSwitch_0.geometry}
            material={materials['Frame.001']}
          />
        </group>
        <group position={[0, 0.25, -0.13]} scale={[0.16, 0.16, 0]}>
          <mesh
            geometry={nodes.iPhoneLogoBack_0.geometry}
            material={materials.iPhoneText}
          />
        </group>
        <group position={[0.32, 6.43, 0.29]} scale={0.06}>
          <mesh
            geometry={nodes.FrontCamera_0.geometry}
            material={materials['FrontCameraBlack.000']}
          />
          <mesh
            geometry={nodes.FrontCamera_1.geometry}
            material={materials['Lens.001']}
          />
        </group>
        <group
          position={[-0.07, 2.67, 0.08]}
          rotation={[-Math.PI, 0, -Math.PI]}
        >
          <mesh
            geometry={nodes.BackGlass_0.geometry}
            material={materials.BackPanel}
          />
        </group>
        <group position={[-0.07, 2.67, 0.08]}>
          <mesh
            geometry={nodes.FrontGlass_0.geometry}
            material={materials.Glass}
          />
          <mesh
            geometry={nodes.FrontGlass_1.geometry}
            material={materials.BlackGlass}
          />
        </group>
        <group position={[1.32, 5.74, -0.17]} scale={0.06}>
          <mesh
            geometry={nodes.FlashLED_0.geometry}
            material={materials['Material.000']}
          />
        </group>
        <group position={[1.32, 5.74, -0.17]} scale={0.16}>
          <mesh
            geometry={nodes.FlashBG_0.geometry}
            material={materials['PinkFlash.000']}
          />
          <mesh
            geometry={nodes.FlashBG_1.geometry}
            material={materials['YellowFlash.000']}
          />
        </group>
        <group position={[0.19, -0.09, -0.13]} scale={[0.13, 0.13, 0]}>
          <mesh
            geometry={nodes.CE_0.geometry}
            material={materials.iPhoneText}
          />
        </group>
        <group
          position={[1.32, 5.76, -0.14]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={0.94}
        >
          <mesh
            geometry={nodes.CameraBump_0.geometry}
            material={materials['Frame.001']}
          />
        </group>
        <group position={[-0.07, 2.67, 0.08]}>
          <mesh
            geometry={nodes.Body_0.geometry}
            material={materials['Frame.001']}
          />
          <mesh
            geometry={nodes.Body_1.geometry}
            material={materials['Black.002']}
          />
        </group>
        <group
          position={[1.32, 6.07, -0.15]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[0.07, 0.07, 0.03]}
        >
          <mesh
            geometry={nodes.BackCameraTopLens_0.geometry}
            material={materials['Lens.001']}
          />
        </group>
        <group position={[1.32, 6.07, -0.17]} scale={[0.1, 0.1, 0.14]}>
          <mesh
            geometry={nodes.BackCameraTopGreyRing_0.geometry}
            material={materials['BackCaneraGrayRIng.000']}
          />
        </group>
        <group position={[1.32, 5.74, -0.17]} scale={[0, 0.2, 0.43]}>
          <mesh
            geometry={nodes.BackCameraP1_0.geometry}
            material={materials['Black.002']}
          />
        </group>
        <group
          position={[1.32, 5.42, -0.15]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[0.07, 0.07, 0.03]}
        >
          <mesh
            geometry={nodes.BackCameraBottomLens_0.geometry}
            material={materials['Lens.001']}
          />
        </group>
        <group position={[1.32, 5.42, -0.17]} scale={[0.1, 0.1, 0.14]}>
          <mesh
            geometry={nodes.BackCameraBottomGreyRing_0.geometry}
            material={materials['BackCaneraGrayRIng.000']}
          />
        </group>
        <group
          position={[-0.07, 4.34, -0.13]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[-0.84, 0.84, 0]}
        >
          <mesh
            geometry={nodes.AppleLogo_0.geometry}
            material={materials['AppleLogo.002']}
          />
        </group>
        <group
          position={[-1.49, -1.1, 0.08]}
          rotation={[0, 1.57, -Math.PI]}
          scale={[0.19, 0.18, 0.38]}
        >
          <mesh
            geometry={nodes.AntennaLines_0.geometry}
            material={materials.Antenna}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')
