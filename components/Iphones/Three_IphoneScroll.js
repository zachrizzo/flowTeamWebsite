import * as THREE from 'three'
import { forwardRef, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import {
  Html,
  useGLTF,
  softShadows,
  ScrollControls,
  useScroll,
  useTexture,
} from '@react-three/drei'
import useRefs from 'react-use-refs'
import Iphone13proMax2 from '../Iphones/Iphone_max2'
import Iphone13ProMax from '../Iphones/Iphone13ProMax'
import IpadPro from './Ipad'
import classNames from 'classnames'
softShadows()
const rsqw = (t, delta = 0.1, a = 1, f = 1 / (2 * Math.PI)) =>
  (a / Math.atan(1 / delta)) * Math.atan(Math.sin(2 * Math.PI * t * f) / delta)

export default function IphoneScroll() {
  return (
    <Canvas
      shadows
      className=" h-[100vh]"
      dpr={[1, 2]}
      camera={{ position: [0, -3.2, 40], fov: 12 }}
    >
      <ScrollControls pages={8}>
        <Composition />
      </ScrollControls>
    </Canvas>
  )
}

function Composition({ ...props }) {
  const scroll = useScroll()
  const { width, height } = useThree((state) => state.viewport)
  const [visableState, setVisibleState] = useState('hidden')
  const [
    group,
    mbp16,
    mbp14,
    keyLight,
    stripLight,
    fillLight,
    log,
    left,
    right,
    phone3,
  ] = useRefs()
  //   const [textureRed, textureBlue] = useTexture([
  //     '/Chroma Red.jpg',
  //     '/Chroma Blue.jpg',
  //   ])
  useFrame((state, delta) => {
    const r1 = scroll.range(0 / 4, 1 / 4)
    const r2 = scroll.range(1 / 7, 1 / 4)
    const r3 = scroll.visible(0 / 4, 2 / 5)
    const r4 = scroll.visible()
    const r5 = scroll.range(6 / 8, 1 / 4)
    if (r3) {
      setVisibleState('visible')
    } else if (!r3) {
      setVisibleState('hidden')
    }
    mbp16.current
      ? (mbp16.current.rotation.x =
          Math.PI - (Math.PI / 2) * rsqw(r1) + r2 * 0.33)
      : null
    mbp14.current
      ? (mbp14.current.rotation.x =
          Math.PI - (Math.PI / 2) * rsqw(r1) - r2 * 0.33)
      : null
    phone3.current
      ? (phone3.current.rotation.x =
          Math.PI - (Math.PI / 2) * rsqw(r5) - r5 * 0.33)
      : null
    group.current.rotation.y = THREE.MathUtils.damp(
      group.current.rotation.y,
      (-Math.PI / 1) * r5,
      4,
      delta
    )
    group.current.rotation.y = THREE.MathUtils.damp(
      group.current.rotation.y,
      (-Math.PI / 0.7) * r2,
      4,
      delta
    )
    group.current.position.x = THREE.MathUtils.damp(
      group.current.position.x,
      (-width / 7) * r2,
      4,
      delta
    )
    group.current.scale.x =
      group.current.scale.y =
      group.current.scale.z =
        THREE.MathUtils.damp(
          group.current.scale.z,
          1 + 0.24 * (1 - rsqw(r1)),
          4,
          delta
        )
    keyLight.current.position.set(
      0.25 + -15 * (1 - r1),
      4 + 11 * (1 - r1),
      3 + 2 * (1 - r1)
    )
    left.current ? left.current.classList.toggle('show', r3) : null
    right.current ? right.current.classList.toggle('show', r3) : null
  })
  return (
    <>
      <spotLight position={[0, -width * 0.7, 0]} intensity={0.5} />
      <directionalLight ref={keyLight} castShadow intensity={6}>
        <orthographicCamera
          attachObject={['shadow', 'camera']}
          args={[-10, 10, 10, -10, 0.5, 30]}
        />
      </directionalLight>
      <group ref={group} position={[0, -height / 2.65, 0]} {...props}>
        <spotLight
          ref={stripLight}
          position={[width * 2.5, 0, width]}
          angle={0.19}
          penumbra={1}
          intensity={0.25}
        />
        <spotLight
          ref={fillLight}
          position={[0, -width / 2.4, -width * 2.2]}
          angle={0.2}
          penumbra={1}
          intensity={2}
          distance={width * 3}
        />
        {/* <Iphone13proMax2 ref={mbp16} Gltf={'/iphone_ToDo.gltf'}> */}
        <IpadPro ref={mbp16} PositionArray={[-1.5, -1, 0]}>
          <Tag
            ref={left}
            position={[16, 5, 0]}
            head="up to"
            stat="13x"
            expl={`faster\ngraphics\nperformance²`}
          />
        </IpadPro>
        <Iphone13ProMax
          rotationArray={[Math.PI / 2, 5.5, 0]}
          ref={mbp14}
          GLTF={'/Iphone13ProMaxTodoScreen.gltf'}
          PositionArray={[-0.3, 2, 1.5]}
        >
          {/* <Iphone13proMax2 ref={mbp14} Gltf={'/iphone_ToDo.gltf'}> */}
        </Iphone13ProMax>
        <Iphone13ProMax
          rotationArray={[Math.PI / 2, 6.9, 0]}
          ref={phone3}
          GLTF={'/Iphone13ProMaxTodoScreen.gltf'}
          PositionArray={[-2.7, 2, 1.5]}
        ></Iphone13ProMax>

        <Html>
          <div>
            <h1> hi</h1>
          </div>
        </Html>
        <Html
          className=" z-10"
          transform={true}
          sprite={true}
          ref={right}
          center
        >
          <div
            className={classNames(
              ` z-0 w-[150px] ${visableState} mb-[300px] ml-[400px]`
            )}
          >
            <h1 className=" text-left text-lg text-[#7b3af5] opacity-90">
              Time Tracking:
            </h1>
            <h3 className=" text-left text-xs ">
              Keep track of who's where to make sure things are done right!
            </h3>
          </div>
        </Html>
        {/* </Iphone13proMax2> */}
      </group>
    </>
  )
}

/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: akshatmittal (https://sketchfab.com/akshatmittal)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/2021-macbook-pro-14-m1-pro-m1-max-f6b0b940fb6a4286b18a674ef32af2d3
title: 2021 Macbook Pro 14" (M1 Pro / M1 Max)
*/

const Tag = forwardRef(({ head, stat, expl, ...props }, ref) => {
  return (
    <Html ref={ref} className="data" center {...props}>
      <div>
        <div>{head}</div>
        <h1>{stat}</h1>
        <h2>{expl}</h2>
      </div>
    </Html>
  )
})
