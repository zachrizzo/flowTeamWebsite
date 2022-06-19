import React, { useState, useEffect, useRef } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Banner'
import Header from '../components/Header'

import SphereAnimateThreejs from '../components/SphereAnimateThreejs'
import { useRouter } from 'next/router'
import {
  GetUserActiveStatus,
  auth,
  getCompany,
  db,
  GetListOfTeamMembers,
  TotalHoursWokedTHisWeek,
} from '../firebase'
import { useDispatch, useSelector } from 'react-redux'
import {
  setCompanySubscriptionStatus,
  selectCompanySubscriptionStatus,
} from '../slices/globalSlice'
import { collection, onSnapshot, where } from 'firebase/firestore'
import { NextPage } from 'next'
import { ListItem } from '../components/ListItem'
import DividerLine from '../components/dividerLine'
const UserProfilePage: NextPage<{}> = () => {
  const [usersName, setUsersName] = useState('')

  const [numberOfEnrolledEmpoyees, setNumberOfEnrolledEmployees] = useState(0)
  const [phoneNumber, setPhoneNumber] = useState('')
  const [recentClockins, setRecentClockins] = useState([])
  const [listofEmployees, setListofEmployess] = useState([])
  const router = useRouter()
  const [activeStatus, setActiveStatus] = useState('active')
  const [companyDB, setCompanyDB] = useState('')
  const dispatch = useDispatch()
  const companySubscriptionStatus = useSelector(selectCompanySubscriptionStatus)
  const [teamMembers, setTeamMembers] = useState(Array)
  const [numberOfTeamMembers, setNumberOfTeamMembers] = useState(0)
  const [totalHoursWorked, setTotalHoursWorked] = useState(0)
  useEffect(() => {
    const fetch = async () => {
      await GetUserActiveStatus({
        activeState: setActiveStatus,
      })
      getCompany({ companyState: setCompanyDB })
    }
    return () => {
      fetch()
    }
  }, [])

  useEffect(() => {
    if (activeStatus != 'active') {
      router.push('/PaymentScreen')
    }
  }, [activeStatus])
  useEffect(() => {
    GetListOfTeamMembers({
      TeamMembersState: setTeamMembers,
      company: companyDB,
      NumberOfMembersState: setNumberOfTeamMembers,
    })
    TotalHoursWokedTHisWeek({
      totalState: setTotalHoursWorked,
      company: companyDB,
    })
  }, [companyDB])
  const list = teamMembers.map((item: any) => {
    return (
      <div className=" m-5 cursor-pointer rounded-[30px] bg-[#e6e6e6c6] p-2 shadow-lg duration-500 hover:scale-105">
        <h2 className=" m-2 text-xl">{item.fullName}</h2>
        <h3>{item.email}</h3>
      </div>
    )
  })

  const getCurrentNumberOfEnrolledEmployees = () => {
    return (
      <div className=" flex w-full flex-col items-center">
        <h3 className="  text-xl text-[#4a4949] underline">
          Number Of Enrolled Employees
        </h3>
        <h4 className=" text-lg">{numberOfTeamMembers}</h4>
      </div>
    )
  }
  const GetTotalNumbersOfHoursWorkedWorked = () => {
    return (
      <div className=" flex w-full flex-col items-center">
        <h3 className="  text-xl text-[#4a4949] underline">
          Number Of Hours Worked This Month
        </h3>
        <h4 className=" text-lg">{totalHoursWorked}</h4>
      </div>
    )
  }

  return (
    <div>
      <Head>
        <title>UserProfile</title>
        <link rel="icon" href="/Flow team Android 512px.png" />
      </Head>

      <Header />

      <main className=" flex h-[100%] w-full flex-col  justify-center text-center">
        <h1 className=" bg-blue mt-5 text-4xl text-[#7026f8ae]">
          Welcome {auth.currentUser?.email}!
        </h1>

        {/* <h1 className=" bg-blue mt-5 text-3xl text-[#7026f8ae]">{companyDB}</h1>
        <h1 className=" bg-blue mt-5 text-3xl text-[#7026f8ae]">
          {activeStatus}
        </h1> */}
        <div className=" flex h-[80vh] w-full grid-cols-2 justify-center ">
          <div className=" flex h-[50vh] w-[75%] p-10 px-5">
            <div className=" flex h-[70vh] w-full grid-cols-2 justify-center overflow-y-auto rounded-[30px] bg-[#e6e6e6c6] p-8 shadow-2xl">
              {getCurrentNumberOfEnrolledEmployees()}
              {GetTotalNumbersOfHoursWorkedWorked()}
            </div>
          </div>
          <div className=" h-[70vh] w-[25%] p-10 px-5">
            <div className=" w-full overflow-y-auto rounded-[30px]  ">
              <h3 className=" text-xl"> Enrolled Employees</h3>
              <DividerLine width={'w-[10%]'} />
              {list}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
export default UserProfilePage
