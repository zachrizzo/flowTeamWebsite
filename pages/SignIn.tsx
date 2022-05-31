import { NextPage } from 'next'
import React, { useState, useEffect } from 'react'
import TextInput from '../components/TextInput'
import Header from '../components/Header'
import Head from 'next/head'
import { text } from 'stream/consumers'
import Threecomponet from '../components/3Dcomponet'
import SphereAnimateThreejs from '../components/SphereAnimateThreejs'
import MainFuctionButton from '../components/MainLinkButton'
import { SignInToAccount, auth } from '../firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { useRouter } from 'next/router'
const SignIn: NextPage<{}> = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log(user)
      if (user != null) {
        router.push('/UserProfilePage')
      }
    })
    return () => {
      unsubscribe
    }
  }, [])
  return (
    <div className="  flex h-full w-full flex-col  justify-center">
      <Head>
        <title>Flow Team SignIn</title>
        <link rel="icon" href="/Flow team Android 512px.png" />
      </Head>

      <Header />
      <div className=" flex flex-col items-center justify-center py-9 text-center">
        <h1 className=" mb-11 text-7xl text-[#282828c7]">Welcome!</h1>
        <p> {auth.currentUser?.email}</p>
        <div className=" h-[110px] w-[20%] cursor-pointer justify-center">
          <Threecomponet
            customBoolean={false}
            ThreeDShape={<SphereAnimateThreejs scale={2.5} />}
          />
        </div>
      </div>

      <div className=" flex  items-center justify-center">
        <TextInput
          placeHolder="Email"
          widthPercentage={'w-[60%]'}
          onChange={(text: any) => {
            setEmail(text.target.value)
          }}
        />
      </div>
      <div className=" my-5 flex flex-col items-center justify-center">
        <div className=" mb-11 w-full">
          <TextInput
            placeHolder="Password"
            widthPercentage={'w-[60%]'}
            onChange={(text: any) => {
              setPassword(text.target.value)
            }}
          />
        </div>

        <MainFuctionButton
          buttonText={'Sign In'}
          onClick={() => {
            SignInToAccount({
              email: email,
              password: password,
            })
          }}
          buttonWidth={'w-[50%]'}
        />
      </div>
    </div>
  )
}
export default SignIn
