import React, { useEffect, useState } from 'react'
import { NextPage } from 'next'
import { GetUserActiveStatus, auth, getCompany, db } from '../firebase'
import MainFuctionButton from '../components/MainLinkButton'
import PaymentOption from '../components/PaymentOption'
import Header from '../components/Header'
import {
  selectUserSubscriptionStatus,
  selectCompanySubscriptionStatus,
  selectCompany,
} from '../slices/globalSlice'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { collection, onSnapshot, where } from 'firebase/firestore'
const PaymentScreen: NextPage<{}> = () => {
  const companySubscriptionStatus = useSelector(selectCompanySubscriptionStatus)
  const router = useRouter()
  const [activeStatus, setActiveStatus] = useState(null)
  const [refresh, setRefresh] = useState(false)

  GetUserActiveStatus({ activeState: setActiveStatus })

  useEffect(() => {
    // if (activeStatus != 'active') {
    //   // dispatch(setCompanySubscriptionStatus(true))
    //   router.push('/UserProfilePage')
    // } else {

    // }

    if (activeStatus == 'active') {
      router.push('/UserProfilePage')
    } else {
      setRefresh(!refresh)
    }
  }, [])

  const comoanystatus = () => {
    if (companySubscriptionStatus) {
      return <h1>active</h1>
    }
  }
  return (
    <div className=" flex h-full w-full flex-col justify-center">
      <Header />
      <div className=" m-10">
        {auth.currentUser?.uid && (
          <h2 className=" text-center text-3xl">
            Welcome {auth.currentUser?.email} {comoanystatus()}
          </h2>
        )}
        <h2 className=" items-center text-center text-2xl ">
          At Flow team We Pride our selfs in giving you the best tools you need
          to grow your Business and different plans that grow with you!
        </h2>
      </div>
      <div
        className="  flex h-[500px] items-center justify-center
       sm:grid-cols-4 sm:flex-col md:grid-rows-4 md:flex-row "
      >
        <PaymentOption
          priceNumber="$0"
          description="Free for up to two team Members. Enjoy Full Access To all of the features Flow Team has to offer!"
          price="price_1L51P5H0CaTAz4DN9hLYuuTd"
          title="Free"
        />

        <PaymentOption
          priceNumber="$24"
          description="Enjoy Full Access To all of the features Flow Team has to offer for a team of up to 10!"
          price="price_1L51DZH0CaTAz4DNAwGnezbm"
          title="basic"
        />
        <PaymentOption
          priceNumber="$30"
          description="Enjoy Full Access To all of the features Flow Team has to offer for a team of up to 25!"
          price="price_1L4WYlH0CaTAz4DNj8OlOaNN"
          title="Pro"
        />
        <PaymentOption
          priceNumber="$58"
          description="Full Access for The Entire team, no mater the size!"
          price="price_1L51IwH0CaTAz4DNTp4BjatB"
          title="Enterprise"
        />
      </div>
      <MainFuctionButton
        buttonText="refresh"
        onClick={() => {
          setRefresh(!refresh)
        }}
        buttonWidth={'w-[80%]'}
      />
    </div>
  )
}
export default PaymentScreen
