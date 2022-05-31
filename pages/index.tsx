import type { NextPage } from 'next'
import React, { Suspense, useState, useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Banner'
import Header from '../components/Header'
import SphereAnimateThreejs from '../components/SphereAnimateThreejs'
import IphoneXsMax from '../components/IphoneXsMax'
import Threecomponet from '../components/3Dcomponet'
import Iphone from '../components/Scene'
import Iphone13ProMax from '../components/Iphone13ProMax'
import Box from '../components/box'
import RocketAsteroid from '../components/RocketAsteroid'
import TextInput from '../components/TextInput'
import IpadPro from '../components/Ipad'
import { ImageSection } from '../components/ImageSection'
import Iphone13proMax2 from '../components/Iphone_max2'
import { GetUserActiveStatus } from '../firebase'

const Home: NextPage = () => {
  //const colorMap = useLoader(TextureLoader, '/Flow team Android 512px.png')
  const [activeStatus, setActiveStatus] = useState(null)
  const [companyDbB, setCompanyDbB] = useState(null)
  // useEffect(() => {
  //   GetUserActiveStatus({ activeState: setActiveStatus })
  // }, [])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Flow Team</title>
        <link rel="icon" href="/Flow team Android 512px.png" />
      </Head>

      <Header />
      <Banner />

      <main className="flex  w-full flex-1 flex-col items-center justify-center text-center">
        {/* <ImageSection /> */}
        <div className=" flex h-[500px] w-full ">
          <Threecomponet
            customBoolean={false}
            ThreeDShape={<SphereAnimateThreejs />}
          />
        </div>
        <div className=" flex h-[700px]  w-full flex-col ">
          <div className=" flex h-full grid-cols-2 flex-row ">
            <div className=" flex  w-[50%] ">
              <Threecomponet
                customBoolean={true}
                enableZoom={false}
                ambientLightIntensity={1}
                directionalLightIntensity={0.5}
                pointLightIntensity={10}
                pointLightPositionArray={[0, 8, -10]}
                bgColor={22323}
                // ThreeDShape={
                //   <Iphone13ProMax
                //     GLTF={'/Iphone13ProMaxTodoScreen.gltf'}
                //     PositionArray={[1.5, 0.5, 0]}
                //   />
                // }
                ThreeDShape4={<Iphone13proMax2 Gltf={'/iphone_ToDo.gltf'} />}
                // ThreeDShape2={
                //   <Iphone13ProMax
                //     GLTF={'/ClockIn-2.gltf'}
                //     PositionArray={[-1.5, -0.5, 0]}
                //   />
                // }
                // ThreeDShape3={<IpadPro PositionArray={[-1.5, -3, 0]} />}
                // bgColor={'#000000'}
              />

              {/* <Threecomponet
            customBoolean={true}
            enableZoom={false}
            ambientLightIntensity={600}
            directionalLightIntensity={100}
            pointLightIntensity={100}
            pointLightPositionArray={[-2, 10, -2]}
            ThreeDShape={<Iphone13ProMax />}
          /> */}
              {/* <Threecomponet
            customBoolean={false}
            ThreeDShape={<RocketAsteroid />}
          /> */}
            </div>

            <div className=" flex w-[50%] ">
              <h2>hi</h2>
            </div>
          </div>
        </div>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
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
