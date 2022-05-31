import Image from 'next/image'
import React from 'react'

export const ImageSection: React.FC<{}> = () => {
  return (
    <div className=" relative w-full">
      <div></div>
      <Image
        className=" ml-10"
        src={'/Untitled design (6).png'}
        layout="responsive"
        width={530}
        height={900}
        objectPosition="center"
      />
      <div className=" absolute"></div>
    </div>
  )
}
