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
const UserProfilePage: React.FC<{}> = () => {
  const [usersName, setUsersName] = useState('')
  const [company, setCompany] = useState('')
  const [numberOfEnrolledEmpoyees, setNumberOfEnrolledEmployees] = useState(0)
  const [phnoeNumber, setPhoneNumber] = useState('')
  const [recentClockins, setRecentClockins] = useState([])
  const [listofEmployees, setListofEmployess] = useState([])
  const router = useRouter()
  const [activeStatus, setActiveStatus] = useState(null)
  const [companyDB, setCompanyDB] = useState(null)
  const dispatch = useDispatch()
  const companySubscriptionStatus = useSelector(selectCompanySubscriptionStatus)

  // useEffect(() => {
  // const s = async () => {
  useEffect(() => {
    try {
      onSnapshot(
        collection(db, 'customers', auth.currentUser?.email, 'subscriptions'),
        where('status', '==', 'active'),
        (querySnapshot) => {
          const tasks = []
          querySnapshot.forEach((snap: any) => {
            const status = snap.get('status')
            setActiveStatus(status)
            if (status == 'active') {
              dispatch(setCompanySubscriptionStatus(true))
            }
          })

          //dispatch(setUserSubscriptionStatus(doc.get('status')))
        }
      )
    } catch (e) {
      // alert(e + 'your account is no longer active')
    }
  }, [auth.currentUser])
  // GetUserActiveStatus({ activeState: setActiveStatus })
  getCompany({ companyState: setCompanyDB })

  // }
  // return () => {
  //
  // }, [])
  const isInitialMount = useRef(true)

  useEffect(() => {
    // if (isInitialMount.current) {
    //   isInitialMount.current = false
    // } else {
    if (activeStatus != 'active') {
      // alert(activeStatus)

      router.push('/PaymentScreen')
    } else {
      dispatch(setCompanySubscriptionStatus(true))
      // alert(activeStatus)
    }
    // Your useEffect code here to be run on update
    // }
  }, [])
  // useEffect(() => {

  const active = async () => {}
  // return () => {
  active()
  // }
  // }, [activeStatus])

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
