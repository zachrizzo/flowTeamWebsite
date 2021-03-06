// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFunctions } from 'firebase/functions'
// import { useDispatch, useSelector } from 'react-redux'
// import nodeMailer from 'nodemailer'
import { getFirestore, where } from 'firebase/firestore'
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
  addDoc,
  doc,
} from 'firebase/firestore'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth'
import { async } from '@firebase/util'
import { useDispatch } from 'react-redux'
import { setCompanySubscriptionStatus } from './slices/globalSlice'
import { useRouter } from 'next/router'

// import Email from 'next-auth/providers/email'
// import { setUserSubscriptionStatus } from './slices/globalSlice'
// Your web app's Firebase configuration

const currentDate = new Date()
const Year = currentDate.getFullYear().toString()
const Month = currentDate.getMonth() + (1).toString()
const day = currentDate.getDate().toString

const firebaseConfig = {
  apiKey: 'AIzaSyDGAsPfxD6ND0JVLKuSY6nVTJbLLpgVLdY',
  authDomain: 'task-manager-2-9a235.firebaseapp.com',
  projectId: 'task-manager-2-9a235',
  storageBucket: 'task-manager-2-9a235.appspot.com',
  messagingSenderId: '1003484984079',
  appId: '1:1003484984079:web:a02996d46d3107a5b8047a',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
// const dispatch = useDispatch()
//export const app = !getApps().length ? initializeApp(firebaseConfig) : getApp
export const auth = getAuth(app)
export const db = getFirestore(app)
export const functions = getFunctions(app)

export function getUserInfo({ setUserdata }) {
  onSnapshot(doc(db, 'users', auth.currentUser.email), (doc) => {
    // setCompanyDB(doc.get("company"));
    // dispatch(setCompany(doc.get('company')))
    const data = doc.data
    setUserdata(data)
  })
}
export function SignInToAccount({ email, password }) {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      console.log('it worked')
      // const user = userCredential.user;

      // ...
    })
    .catch((error) => {
      alert(error)
      // const errorCode = error.code;
      // const errorMessage = error.message;
    })
}

export function GetUserActiveStatus({ activeState }) {
  //const dispatch = useDispatch()
  try {
    onSnapshot(
      collection(db, 'customers', auth.currentUser.uid, 'subscriptions'),
      where('status', '==', 'active'),
      (querySnapshot) => {
        const tasks = []
        querySnapshot.forEach((snap) => {
          const status = snap.get('status')
          activeState(status)
          // dispatch(golbalState(status))

          // key: snap.id;
        })
      }
    )
  } catch (e) {
    // alert(e)
  }
}
export function getCompany({ companyState }) {
  try {
    onSnapshot(doc(db, 'users', auth.currentUser.email), (doc) => {
      // setCompanyDB(doc.get("company"));
      //dispatch(setCompany(doc.get('company')))
      companyState(doc.get('company'))
    })
  } catch (e) {
    console.log(e)
  }
}
export function getCompanyDetails({ detailsState, company }) {
  onSnapshot(doc(db, 'companys', company))
}
export async function directtocheckOut({ price }) {
  try {
    const docRef = await addDoc(
      collection(db, 'customers', auth.currentUser.uid, 'checkout_sessions'),
      {
        price: price,
        allow_promotion_codes: true,
        success_url: window.location.origin,
        cancel_url: window.location.origin,
      }
    )
    onSnapshot(docRef, (snap) => {
      const url = snap.get('url')
      // console.log(error);
      // if (error) {
      //   console.log(error);
      if (url) {
        window.open(url)
      } else {
        // alert(' could not get checkout url')
        console.log('no url')
      }
    })

    // setButton(true);
  } catch (e) {
    // alert(e)
  }
}
export function GetListOfTeamMembers({
  NumberOfMembersState,
  TeamMembersState,
  company,
}) {
  onSnapshot(
    query(collection(db, 'users'), where('company', '==', company)),

    (QuerySnap) => {
      const array = []
      QuerySnap.forEach((snap) => {
        array.push(snap.data())
      })
      TeamMembersState(array)
      NumberOfMembersState(array.length)
    }
  )
}
export function TotalHoursWokedTHisWeek({ totalState, company }) {
  try {
    onSnapshot(
      query(collection(db, 'companys', company, 'clockIn')),
      (querySnapshot) => {
        const totalHours = []

        querySnapshot.forEach((snap) => {
          const email = snap.get('email')

          onSnapshot(
            collection(
              db,
              'companys',
              company,
              'clockIn',
              email,
              'year',
              Year,
              'month',
              '4',
              'day'
            ),
            (QuerySnapshots) => {
              const arrayOfHours = []
              QuerySnapshots.forEach((doc) => {
                arrayOfHours.push(doc.get('totalHoursToday'))
              })
              var number = 0
              for (let i = 0; i < arrayOfHours.length; i++) {
                number = arrayOfHours[i] + number
              }
              // console.log(number)
              totalHours.push(number)
              var hours = 0
              for (let x = 0; x < totalHours.length; x++) {
                console.log(x)
                hours = totalHours[x] + hours
              }

              totalState(hours)
            }
          )
        })
      }
    )
  } catch (e) {}
}
