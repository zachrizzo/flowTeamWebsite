import React from 'react'
import MainFuctionButton from './MainLinkButton'
import { directtocheckOut } from '../firebase'
const PaymentOption: React.FC<{
  description: string
  title: string
  priceNumber: string
  price: string
}> = ({ price, title, description, priceNumber }) => {
  return (
    <div className=" m-10 flex h-[80%] w-[25%] grid-rows-4 flex-col items-center  rounded-[20px] p-4 shadow-2xl duration-500 hover:scale-[1.10] ">
      <div
        className=" M
      -[10px] flex h-[25%]"
      >
        <h2 className="  text-center text-2xl">{title}</h2>
      </div>
      <div className=" flex h-[25%] text-center">
        <p> {description}</p>
      </div>
      <div className=" flex  h-[25%] text-2xl text-[#7B3AF5]">
        <p>{priceNumber}</p>
      </div>

      <div className=" flex h-[25%] w-full items-center justify-center text-center ">
        <MainFuctionButton
          buttonWidth={'w-[90%]'}
          buttonText={'Try For Free'}
          onClick={() => {
            directtocheckOut({ price: price })
          }}
        />
      </div>
    </div>
  )
}
export default PaymentOption
