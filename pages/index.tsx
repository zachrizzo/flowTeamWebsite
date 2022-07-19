import type { NextPage } from 'next'
import React, { useMemo, Suspense, useState, useRef, useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Banner'
import Header from '../components/Header'
import SphereAnimateThreejs from '../components/SphereAnimateThreejs'
import IphoneXsMax from '../components/Iphones/IphoneXsMax'
import Threecomponet from '../components/3Dcomponet'
import Iphone from '../components/Scene'
import Iphone13ProMax from '../components/Iphones/Iphone13ProMax'
// import Box from '../components/box'
import RocketAsteroid from '../components/RocketAsteroid'
import TextInput from '../components/TextInput'
import IpadPro from '../components/Iphones/Ipad'
import { ImageSection } from '../components/ImageSection'
import Iphone13proMax2 from '../components/Iphones/Iphone_max2'
import { GetUserActiveStatus } from '../firebase'
import IphoneScroll from '../components/Iphones/Three_IphoneScroll'
import CartoonRocket from '../components/cartoon_rocket'
import { Canvas, useFrame, useThree } from '@react-three/fiber'

import {
  Html,
  useGLTF,
  softShadows,
  ScrollControls,
  useScroll,
  useTexture,
  OrbitControls,
  CameraShake,
} from '@react-three/drei'
const Home: NextPage = () => {
  const rocket: any = useRef()
  //const colorMap = useLoader(TextureLoader, '/Flow team Android 512px.png')
  const [activeStatus, setActiveStatus] = useState(null)
  const [companyDbB, setCompanyDbB] = useState(null)
  const [iphoneScrollInView, setIphoneScrollInView] = useState(false)
  const [iphoneScrollPages, setIphoneScrollPages] = useState(0)
  if (rocket.current && rocket.current.rotation.x === Number) {
    const result = (rocket.current.rotation.x += 0.01)

    useFrame((state, delta) => result)
    // useEffect(() => {
    //   GetUserActiveStatus({ activeState: setActiveStatus })
    // }, [])
  }
  const particles = () => {
    const length = 10 * 10
    const particles = new Float32Array(length * 3)
    for (let i = 0; i < length; i++) {
      let i3 = i * 3
      particles[i3 + 0] = (i % 10) / 10
      particles[i3 + 1] = i / 10 / 10
    }
    return particles
  }

  const listInnerRef: any = useRef()
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0]
      console.log(entry)
      // if (entry.isIntersecting) {
      setIphoneScrollInView(entry.isIntersecting)
      if (entry.isIntersecting == true) {
        setIphoneScrollPages(8)
      } else {
        setIphoneScrollPages(0)
      }
      // }
      // if (entry.isIntersecting == false) {
      //   setIphoneScrollInView(false)
      // }
    })

    observer.observe(listInnerRef.current)
  }, [])

  const onScroll = () => {
    if (listInnerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current
      if (scrollTop + clientHeight === scrollHeight) {
        console.log('half')
      }
    }
  }

  return (
    <div className=" flex min-h-screen flex-col items-center justify-center py-2 will-change-scroll">
      <Head>
        <title>Flow Team</title>
        <link rel="icon" href="/Flow team Android 512px.png" />
      </Head>

      <Header />
      <Banner />
      {/* <ImageSection /> */}

      <main className="flex  w-full flex-1 flex-col items-center justify-center text-center">
        {/* <ImageSection /> */}
        <div className=" flex w-full ">
          <div className=" flex h-screen w-full  flex-row">
            <div className="h-full w-[40%]">
              {/* <Canvas
                shadows
                className="h-[100vh] w-[50%]"
                dpr={[1, 2]}
                camera={{ position: [0, -3.2, 40], fov: 12 }}
              >
                <spotLight position={[2, 10, 3]} intensity={0.5} />
                <ambientLight position={[0, -5, 0]} intensity={0.8} />
                <directionalLight intensity={6}>
                  <orthographicCamera
                    attachObject={['shadow', 'camera']}
                    args={[-10, 10, 10, -10, 0.5, 30]}
                  />
                </directionalLight>
                <OrbitControls
                  makeDefault
                  autoRotate
                  autoRotateSpeed={1}
                  //maxPolarAngle={Math.PI / 2.3}
                  minPolarAngle={Math.PI / 2.3}
                  enableZoom={false}
                  enablePan={false}
                />
                <group scale={1}>
                  <CartoonRocket
                    ref={rocket}
                    // positionArray={[-5, 0, 10]}
                    positionArray={[0, 0, 0]}
                  ></CartoonRocket>
                  <SphereAnimateThreejs
                    rotationArray={[0, 0, 0]}
                    positionArray={[-0.7, -1.8, 0]}
                    //positionArray={[-5, -1.5, 10]}
                    scale={0.5}
                  />
                  <SphereAnimateThreejs
                    rotationArray={[5, 6, 3]}
                    positionArray={[-0.7, -2.5, 0]}
                    // positionArray={[-9.5, -1.4, -3]}
                    scale={0.3}
                  />
                  <SphereAnimateThreejs
                    rotationArray={[1, 0, 3]}
                    positionArray={[-1, -3, 0]}
                    // positionArray={[-10, -1.7, -3]}
                    scale={0.2}
                  />
                </group>
              </Canvas> */}
            </div>
            <div className=" h-screen w-[60%] items-center justify-center justify-items-center">
              <h1 className=" text-center">
                Provide Your team with the tools needed to get the job
              </h1>
            </div>
          </div>
        </div>
        <div className=" flex h-[80vh]  w-full flex-col ">
          <div className="h-full w-full snap-y snap-mandatory snap-center snap-always   ">
            <IphoneScroll
              pages={iphoneScrollPages}
              enabled={iphoneScrollInView}
            />
          </div>
          <div ref={listInnerRef} className=" h-[50px] w-full"></div>
          <points>
            <bufferGeometry>
              <bufferAttribute
                attachObject={['attributes', 'position']}
                count={particles.length / 3}
                array={particles}
                itemSize={3}
              />
            </bufferGeometry>
          </points>
          {/* <Canvas>
            <OrbitControls
              makeDefault
              autoRotate
              autoRotateSpeed={0.5}
              zoomSpeed={0.1}
            />
            <CameraShake
              yawFrequency={1}
              maxYaw={0.05}
              pitchFrequency={1}
              maxPitch={0.05}
              rollFrequency={0.5}
              maxRoll={0.5}
              intensity={0.2}
            />
            <Particles {...props} />
          </Canvas> */}
        </div>
        <div className="h-[50vh] w-full"></div>
      </main>

      <footer className="mt-10 flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <Image
            src="/Flow team Android 512px.png"
            alt="Logo"
            width={50}
            height={50}
          />
        </a>
      </footer>
    </div>
  )
}

export default Home
