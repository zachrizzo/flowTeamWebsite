import React from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import SphereAnimateThreejs from './SphereAnimateThreejs'
import Threecomponet from './3Dcomponet'
import MainFuctionButton from './MainLinkButton'
export default function Banner() {
  const router = useRouter()
  return (
    <div className=" relative h-[80vh] w-full flex-1 items-center  justify-center">
      <Image
        src={'/Untitled design (8).png'}
        layout="responsive"
        width={430}
        height={200}
        objectPosition="center"
      />
      <div className="absolute top-1/2 flex w-full items-center justify-center ">
        <div className=" w-[34%] rounded-[20px] bg-[#ffffff] p-4 text-center shadow-2xl">
          <h1 className=" text-lg text-[#7026f8ae] md:text-3xl ">
            Productivity On A Whole New Level
          </h1>
          <MainFuctionButton
            buttonText=" Lest Get Started"
            onClick={() => {
              router.push('/SignUp')
            }}
          />
        </div>
      </div>
    </div>
  )
}
