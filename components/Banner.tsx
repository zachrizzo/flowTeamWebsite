import React from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import SphereAnimateThreejs from './SphereAnimateThreejs'
import Threecomponet from './3Dcomponet'
export default function Banner() {
  const router = useRouter()
  return (
    <div className=" relative w-full flex-1 items-center  justify-center">
      <Image
        src={'/Untitled design (4).png'}
        layout="responsive"
        width={430}
        height={200}
        objectPosition="center"
      />
      <div className="absolute top-1/2 flex w-full items-center justify-center ">
        <div className=" w-[34%] rounded-[20px] bg-[#ffffff] p-4 text-center shadow-2xl">
          <h1 className=" text-3xl text-[#7026f8ae]">
            Productivity On A Whole New Level
          </h1>
          <button
            onClick={() => {
              router.push('/UserProfilePage')
            }}
            className="  my-3 rounded-full bg-gray-50 px-9 py-4 font-bold text-[#7B3AF5] shadow-md transition duration-150 hover:shadow-lg active:scale-90 "
          >
            Lets Get Started
          </button>
          {/* <Threecomponet
            customBoolean={false}
            ThreeDShape={<SphereAnimateThreejs />}
          /> */}
        </div>
      </div>
    </div>
  )
}
