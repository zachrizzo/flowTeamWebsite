import React, { useState, useRef, useEffect } from 'react'
import { Menu } from '@headlessui/react'
import {
  MenuIcon,
  LogoutIcon,
  LoginIcon,
  HomeIcon,
  UserIcon,
  CreditCardIcon,
} from '@heroicons/react/outline'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Threecomponet from './3Dcomponet'
import SphereAnimateThreejs from './SphereAnimateThreejs'

import { useSession } from 'next-auth/react'
import MainFuctionButton from './MainLinkButton'
import DropDownMenu from './DropDownMenu'
import { MenuItem } from './MenuItem'
import { auth, functions } from '../firebase'
import { getAuth, signOut } from 'firebase/auth'
import { httpsCallable } from 'firebase/functions'
const Header = () => {
  const [openMenu, setOpenMenu] = useState(false)
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const ref = useRef(true)
  // const { data: session } = useSession()
  const Logout = () => {
    const auth = getAuth()
    signOut(auth).then(() => {
      router.push('/')
    })
  }

  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (ref.current && !ref.current.contains(event.target)) {
  //       setOpenMenu(!openMenu)
  //     }
  //   }
  //   document.addEventListener('click', handleClickOutside)
  //   return () => {
  //     document.removeEventListener('click', handleClickOutside)
  //   }
  // }, [openMenu, ref])
  const ShowAuthHeader = () => {
    if (openMenu) {
      if (auth.currentUser) {
        return (
          <div
            ref={ref}
            className=" absolute flex justify-start duration-[500s] ease-in"
          >
            <DropDownMenu
              openMenu={openMenu}
              setOpenMenu={setOpenMenu}
              item={[
                <MenuItem
                  icon={
                    <HomeIcon className=" h-10 w-7 cursor-pointer  text-black duration-[500s] ease-in" />
                  }
                  text={'Home'}
                  onClick={() => {
                    router.push('/')
                  }}
                />,

                <MenuItem
                  icon={
                    <UserIcon className=" h-10 w-7 cursor-pointer  text-black duration-[500s] ease-in" />
                  }
                  text={'Profile'}
                  onClick={() => {
                    router.push('/UserProfilePage')
                  }}
                />,
                <MenuItem
                  icon={
                    <CreditCardIcon className=" h-10 w-7 cursor-pointer  text-black duration-[500s] ease-in" />
                  }
                  text={'Payment'}
                  onClick={async () => {
                    setLoading(true)
                    const createPortalLink = httpsCallable(
                      functions,
                      'ext-firestore-stripe-payments-createPortalLink'
                    )
                    const { data } = await createPortalLink({
                      returnUrl: window.location.origin,
                    })
                    window.open(data.url)
                    setLoading(false)
                  }}
                />,
                <MenuItem
                  icon={
                    <LogoutIcon className=" h-10 w-7 cursor-pointer  text-black duration-[500s] ease-in" />
                  }
                  text={'Logout'}
                  onClick={Logout}
                />,
              ]}
            />
          </div>
        )
      } else {
        return (
          <div
            ref={ref}
            className=" absolute flex justify-start duration-[500s] ease-in"
          >
            <DropDownMenu
              openMenu={openMenu}
              setOpenMenu={setOpenMenu}
              item={[
                <MenuItem
                  icon={
                    <HomeIcon className=" h-10 w-7 cursor-pointer  text-black duration-[500s] ease-in" />
                  }
                  text={'Home'}
                  onClick={() => {
                    router.push('/')
                  }}
                />,
                <MenuItem
                  icon={
                    <LoginIcon className=" h-10 w-7 cursor-pointer  text-black duration-[500s] ease-in" />
                  }
                  text={'Login'}
                  onClick={() => {
                    router.push('/SignIn')
                  }}
                />,
              ]}
            />
          </div>
        )
      }
    } else {
      null
    }
  }
  // console.log(session)
  return (
    <div className="  sticky top-0 z-50 grid  h-[90px] w-full grid-cols-3 flex-row bg-white p-5 shadow-md  md:px-10">
      <div
        className=" flex items-start justify-start text-center"
        onClick={() => {
          router.push('/')
        }}
      >
        {/* <div className=" h-12 w-full">
          <Threecomponet
            customBoolean={true}
            ThreeDShape={<Box boxTexture={'/Flow team Android 512px.png'} />}
          />
        </div> */}
        <div className=" h-[60px] w-[20%] cursor-pointer justify-center">
          <Threecomponet
            customBoolean={false}
            ThreeDShape={<SphereAnimateThreejs scale={2.5} />}
          />
        </div>
        {/* <Image
          src="/Flow team Android 512px.png"
          alt="Logo.png"
          height={50}
          width={50}
          className=" cursor-pointer"
        /> */}
        <h1 className=" ml-7 text-center text-4xl text-[#7B3AF5]">FlowTeam</h1>
      </div>
      <div className=" "></div>
      <div className=" flex items-start justify-end ">
        <div className=" mx-3 text-center">
          <MainFuctionButton
            onClick={() => {
              router.push('/SignUp')
            }}
            buttonText={'Get Started'}
          />
        </div>
        {/* <button
          onClick={signOut}
          className=" mx-4 rounded-full bg-gray-50 px-9 py-4 font-bold text-[#7b3af5] shadow-md  transition duration-150 hover:shadow-lg active:scale-90 "
        >
          sign out
        </button> */}
        <MainFuctionButton
          onClick={() => {
            router.push('/SignIn')
          }}
          buttonText={'Sign In'}
        />
        {/* <button
          onClick={() => {
            router.push('/SignUp')
          }}
          className="  mx-4 rounded-full bg-gray-50 px-9 py-4 font-bold text-[#7B3AF5]  shadow-md transition duration-150 hover:shadow-lg active:scale-90 "
        >
          Create account
        </button> */}
        {/* <h1>{session?.user?.name}</h1> */}
        <div className=" mx-3 flex justify-end">
          <MenuIcon
            onClick={() => {
              setOpenMenu(!openMenu)
            }}
            className=" h-10 w-7 cursor-pointer  text-black duration-[500s] ease-in"
          />

          {ShowAuthHeader()}
        </div>
      </div>
    </div>
  )
}
export default Header
