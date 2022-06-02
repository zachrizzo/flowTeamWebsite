import React, { useState, useEffect, useRef } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Banner'
import Header from '../components/Header'

import SphereAnimateThreejs from '../components/SphereAnimateThreejs'
import { useRouter } from 'next/router'
import { GetUserActiveStatus, auth, getCompany, db } from '../firebase'
import { useDispatch, useSelector } from 'react-redux'
import {
  setCompanySubscriptionStatus,
  selectCompanySubscriptionStatus,
} from '../slices/globalSlice'
import { collection, onSnapshot, where } from 'firebase/firestore'
import { NextPage } from 'next'
const UserProfilePage: NextPage<{}> = () => {
  const [usersName, setUsersName] = useState('')
  const [company, setCompany] = useState('')
  const [numberOfEnrolledEmpoyees, setNumberOfEnrolledEmployees] = useState(0)
  const [phoneNumber, setPhoneNumber] = useState('')
  const [recentClockins, setRecentClockins] = useState([])
  const [listofEmployees, setListofEmployess] = useState([])
  const router = useRouter()
  const [activeStatus, setActiveStatus] = useState('active')
  const [companyDB, setCompanyDB] = useState(null)
  const dispatch = useDispatch()
  const companySubscriptionStatus = useSelector(selectCompanySubscriptionStatus)

  useEffect(() => {
    const fetch = async () => {
      await GetUserActiveStatus({
        activeState: setActiveStatus,
        route: router.push('/UserProfilePage'),
        active: activeStatus,
      })
    }
    fetch()
  }, [])
  useEffect(() => {
    if (activeStatus != 'active') {
      router.push('/PaymentScreen')
    }
  }, [activeStatus])

  return (
    <div>
      <Head>
        <title>UserProfile</title>
        <link rel="icon" href="/Flow team Android 512px.png" />
      </Head>

      <Header />

      <main className=" h-full, flex w-full flex-col  justify-center text-center">
        <h1 className=" bg-blue mt-5 text-4xl text-[#7026f8ae]">
          Welcome {auth.currentUser?.email}!
        </h1>
        <h1 className=" bg-blue mt-5 text-3xl text-[#7026f8ae]">{companyDB}</h1>
        <h1 className=" bg-blue mt-5 text-3xl text-[#7026f8ae]">
          {activeStatus}
        </h1>
        <div className=" flex h-full w-full grid-cols-2 justify-center ">
          <div className=" flex h-[500px] w-[75%] p-10 px-5">
            <div className="w-full rounded-[30px] bg-[#e6e6e6c6] shadow-2xl">
              <h1>{companyDB}</h1>
            </div>
          </div>
          <div className=" h-[500px] w-[25%] p-10 px-5">
            <div className="w-full rounded-[30px] bg-[#e6e6e6c6] shadow-2xl">
              <h1>hi</h1>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
export default UserProfilePage
