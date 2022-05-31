import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'

import { OrbitControls, TransformControls } from '@react-three/drei'
import classNames from 'classnames'

export default function Threecomponet({
  ThreeDShape,
  ThreeDShape2,
  ThreeDShape3,
  ThreeDShape4,
  ThreeDShape5,
  ThreeDShape6,
  customBoolean,
  enableZoom,
  bgColor,
  ambientLightIntensity,
  directionalLightIntensity,
  pointLightIntensity,
  pointLightPositionArray,
}) {
  var custom = customBoolean
  if (custom == true) {
    return (
      <Canvas className={classNames(` bg-[] h-full w-full `)}>
        <ambientLight intensity={ambientLightIntensity} />
        <OrbitControls enableZoom={enableZoom} />
        <directionalLight
          position={[-2, -5, -2]}
          intensity={directionalLightIntensity}
        />
        <pointLight
          position={pointLightPositionArray}
          intensity={pointLightIntensity}
        />

        <Suspense fallback={null}>{ThreeDShape}</Suspense>

        <Suspense fallback={null}>{ThreeDShape2}</Suspense>
        <Suspense fallback={null}>{ThreeDShape3}</Suspense>
        <Suspense fallback={null}>{ThreeDShape4}</Suspense>
        <Suspense fallback={null}>{ThreeDShape5}</Suspense>
        <Suspense fallback={null}>{ThreeDShape6}</Suspense>
      </Canvas>
    )
  } else {
    return (
      <Canvas className=" h-full w-full ">
        <ambientLight intensity={0.5} />
        <OrbitControls enableZoom={false} />
        <directionalLight position={[-2, -5, -2]} intensity={1} />
        <pointLight position={[10, 10, 10]} in />
        <Suspense fallback={null}>{ThreeDShape}</Suspense>
        <Suspense fallback={null}>{ThreeDShape2}</Suspense>
      </Canvas>
    )
  }
}
