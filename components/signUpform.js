import React from 'react'
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
function SignUpform() {
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
  const SignUpNewUser = () => {
    try {
      createUserWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
          const user = userCredential.user.uid
          const userEmail = auth.currentUser.email

          try {
            await setDoc(
              doc(db, 'users', userEmail),
              {
                fullName: fullName,
                company: companytext,
                email: email,
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
              doc(db, 'companys', companytext),
              {
                company: companytext,
                // companyEmail: companyEmail.toLowerCase(),
                phoneNumber: phoneNumber,
                numberOfEmployees: numberOfEmployees,
                numberOfEmployeesCurrentlySignedUp: 1,
                companyAdress1: companyAddress,
                //   companyAdress2: companyAdress2,
                //   companyAdressCity: companyAdressCity,
                //   companyAdressState: companyAdressState,
                //   companyAdressZipCode: companyAdressZipCode,
                adminUsers: arrayUnion(email),
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
              doc(db, 'companys', companytext, 'address', companyAddress),
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
        // .then(async () => {
        //   router.push('/UserProfilePage')
        // })
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
    <main className=" flex flex-1 flex-col items-center justify-center py-5 ">
      <h1 className=" py-5 text-2xl font-semibold text-[#3939397c]">
        Sign Up Your Company
      </h1>
      <div className="  m-4 flex w-full">
        <TextInput
          onChange={(text) => setCompany(text.target.value.toLowerCase())}
          // value={company}
          widthPercentage={'w-[60%]'}
          placeHolder="Company Name"
        />
      </div>
      <div className=" m-4 flex w-full">
        <TextInput
          onChange={(text) => setFullName(text.target.value)}
          // value={fullName}
          widthPercentage={'w-[60%]'}
          placeHolder="Full Name"
        />
      </div>
      <div className=" m-4 flex w-full">
        <TextInput
          onChange={(text) => setCompanyAddress(text.target.value)}
          // value={companyAddress}
          widthPercentage={'w-[60%]'}
          placeHolder="Compamy Address"
        />
      </div>
      <div className=" m-4 flex w-full">
        <TextInput
          onChange={(text) => setPhoneNumber(text.target.value)}
          // value={phoneNumber}
          widthPercentage={'w-[60%]'}
          placeHolder="Phone Number"
        />
      </div>
      <div className=" m-4 flex w-full">
        <TextInput
          text="text"
          onChange={(text) => setEmail(text.target.value.toLowerCase())}
          // value={email}
          widthPercentage={'w-[60%]'}
          placeHolder="Email"
        />
      </div>
      <div className=" m-4 flex w-full">
        <TextInput
          onChange={(text) => setNumberOfEmployees(text.target.value)}
          // value={numberOfEmployees}
          widthPercentage={'w-[40%]'}
          placeHolder="Number of Employees"
        />
      </div>
      <div className=" m-4 flex w-full">
        <TextInput
          onChange={(text) => {
            setPassword(text.target.value)
          }}
          // value={password}
          widthPercentage={'w-[60%]'}
          placeHolder="Password"
        />
      </div>
      <div className=" m-4 flex w-full">
        <TextInput
          onChange={(text) => setPassword2(text)}
          // value={password2}
          widthPercentage={'w-[60%]'}
          placeHolder="Type Password Again"
        />
      </div>

      <MainFuctionButton
        buttonText="Create Account"
        onClick={() => {
          SignUpNewUser()
          console.log(companytext)
        }}
      />
    </main>
  )
}

export default SignUpform
