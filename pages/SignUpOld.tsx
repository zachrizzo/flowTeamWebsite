import { NextPage } from 'next'
import React, { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
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
const SignUp: React.FC<{}> = () => {
  const router = useRouter()
  const [email, setEmail] = useState('')

  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')
  const [company, setCompany] = useState('')
  const [numberOfEmployees, setNumberOfEmployees] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [fullName, setFullName] = useState('')
  const [companyAddress, setCompanyAddress] = useState('')

  const dateInMM = Date.now()
  const auth = getAuth()
  const randomNumberCompanyId = Math.random() * 1000000 + 1
  const companyID = randomNumberCompanyId.toString()
  const SignUpNewUser = () => {
    try {
      createUserWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
          const user = userCredential.user.uid
          const userEmail: string = auth.currentUser?.email!

          try {
            await setDoc(
              doc(db, 'users', userEmail),
              {
                fullName: fullName,
                company: company?.toLowerCase(),
                email: email?.toLowerCase(),
                phoneNumber: phoneNumber,
                companyAdress1: companyAddress,
                //   companyAdress2: companyAdress2,
                //   companyAdressCity: companyAdressCity,
                //   companyAdressState: companyAdressState,
                //   companyAdressZipCode: companyAdressZipCode,
                uid: user,
                adminUser: true,
                companyID: companyID,
                dateOfSignUpInMM: dateInMM,
              },
              { merge: true }
            )
          } catch (error) {
            alert(error)
            console.log('i got an error ${error}')
          }

          // user.displayName(company);
          // user.phoneNumber(phoneNumber);
        })

        .then(async () => {
          try {
            await setDoc(
              doc(db, 'companys', company.toLowerCase()),
              {
                company: company.toLowerCase(),
                // companyEmail: companyEmail.toLowerCase(),
                phoneNumber: phoneNumber,
                numberOfEmployees: numberOfEmployees,
                numberOfEmployeesCurrentlySignedUp: 1,
                companyAdress1: companyAddress,
                //   companyAdress2: companyAdress2,
                //   companyAdressCity: companyAdressCity,
                //   companyAdressState: companyAdressState,
                //   companyAdressZipCode: companyAdressZipCode,
                adminUsers: arrayUnion(email.toLowerCase()),
                companyID: companyID,
                dateOfSignUp: serverTimestamp(),
                dateOfSignUpInMM: dateInMM,
              },
              { merge: true }
            )
          } catch (error) {
            alert(error)
            console.log('i got an error ${error}')
          }
        })
        .then(async () => {
          try {
            await setDoc(
              doc(
                db,
                'companys',
                company.toLowerCase(),
                'address',
                companyAddress
              ),
              {
                address: companyAddress,
                timestamp: serverTimestamp(),
              },

              { merge: true }
            )
          } catch (e) {
            alert(e)
          }
        })
        .catch((error) => {
          alert(error)
          const errorCode = error.code
          const errorMessage = error.message
          // ..
        })
    } catch (e) {
      console.log(e)
    }
  }
  return (
    <div className=" items-center justify-center">
      <Head>
        <title>Sign Up</title>
        <link rel="icon" href="/Flow team Android 512px.png" />
      </Head>
      <Header />
      <main className=" flex flex-1 flex-col items-center justify-center py-5 ">
        <h1 className=" py-5 text-2xl font-semibold text-[#3939397c]">
          Sign Up Your Company
        </h1>{' '}
        <form>
          <div className="  m-4 flex w-full">
            <TextInput
              onChange={setCompany}
              // value={company}
              widthPercentage={80}
              placeHolder="Company Name"
            />
          </div>
          <div className=" m-4 flex w-full">
            <TextInput
              onChange={setFullName}
              // value={fullName}
              widthPercentage={80}
              placeHolder="Full Name"
            />
          </div>
          <div className=" m-4 flex w-full">
            <TextInput
              onChange={setCompanyAddress}
              // value={companyAddress}
              widthPercentage={80}
              placeHolder="Compamy Address"
            />
          </div>
          <div className=" m-4 flex w-full">
            <TextInput
              onChange={setPhoneNumber}
              // value={phoneNumber}
              widthPercentage={80}
              placeHolder="Phone Number"
            />
          </div>
          <div className=" m-4 flex w-full">
            <TextInput
              onChange={setEmail}
              // value={email}
              widthPercentage={80}
              placeHolder="Email"
            />
          </div>
          <div className=" m-4 flex w-full">
            <TextInput
              onChange={setNumberOfEmployees}
              // value={numberOfEmployees}
              widthPercentage={50}
              placeHolder="Number of Employees"
            />
          </div>
          <div className=" m-4 flex w-full">
            <TextInput
              onChange={setPassword}
              // value={password}
              widthPercentage={80}
              placeHolder="Password"
            />
          </div>
          <div className=" m-4 flex w-full">
            <TextInput
              onChange={setPassword2}
              // value={password2}
              widthPercentage={80}
              placeHolder="Type Password Again"
            />
          </div>
          <MainFuctionButton
            buttonText="Create Account"
            onClick={() => console.log(password)}
          />
        </form>
      </main>
      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
      </footer>
    </div>
  )
}
export default SignUp
