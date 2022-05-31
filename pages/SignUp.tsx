import { getProviders, signIn as SignIntoProvider } from 'next-auth/react'
import Header from '../components/Header'
import Head from 'next/head'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { db } from '../firebase'
import MainFuctionButton from '../components/MainLinkButton'
import TextInput from '../components/TextInput'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth'
import {
  arrayUnion,
  deleteDoc,
  documentId,
  DocumentSnapshot,
  increment,
  limit,
  onSnapshot,
  orderBy,
  query,
  QuerySnapshot,
  serverTimestamp,
  Timestamp,
  collection,
  setDoc,
  doc,
} from 'firebase/firestore'
import SignUpForm from '../components/signUpform'
import { NextPage } from 'next'
const SignUp: NextPage<{}> = () => {
  const router = useRouter()
  const [email, setEmail] = useState(null)

  const [password, setPassword] = useState(null)
  const [password2, setPassword2] = useState(null)
  const [companytext, setCompany] = useState(null)
  const [numberOfEmployees, setNumberOfEmployees] = useState(null)
  const [phoneNumber, setPhoneNumber] = useState(null)
  const [fullName, setFullName] = useState(null)
  const [companyAddress, setCompanyAddress] = useState(null)

  const dateInMM = Date.now()
  const auth = getAuth()
  const randomNumberCompanyId = Math.random() * 1000000 + 1
  const companyID = randomNumberCompanyId.toString()

  return (
    <div className="flex h-full w-full flex-col">
      <Head>
        <title>Flow Team Sign Up</title>
        <link rel="icon" href="/Flow team Android 512px.png" />
      </Head>

      <Header />
      <SignUpForm />
      {/* <>
        <div className=" flex items-center justify-center">
          {Object.values(providers).map((provider) => (
            <div className=" flex justify-center p-4" key={provider.name}>
              <button
                className=" text-[#fffff] rounded-[30px] bg-[#116def] p-4"
                onClick={() =>
                  SignIntoProvider(provider.id, { callbackUrl: '/' })
                }
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </> */}
    </div>
  )
}
export default SignUp

// export async function getServerSideProps(context) {
//   const providers = await getProviders()
//   return {
//     props: { providers },
//   }
// }
