import React, { useEffect, useRef, useState } from 'react'
import { Fragment } from 'react'
import { MenuItem } from './MenuItem'
import {
  MenuIcon,
  LogoutIcon,
  LoginIcon,
  HomeIcon,
} from '@heroicons/react/outline'
const DropDownMenu: React.FC<{
  item: Array<any>
  setOpenMenu: any
  openMenu: any
}> = ({ item, setOpenMenu, openMenu }) => {
  const ref = useRef(null)
  //const [open, setOpen] = useState(false)
  // useEffect(() => {
  //   const handleClickOutside = (event: any) => {
  //     if (ref.current && !ref.current.contains(event.target)) {
  //       setOpen(!open)
  //     }
  //   }
  //   document.addEventListener('click', handleClickOutside, true)
  //   return () => {
  //     document.removeEventListener('click', handleClickOutside, true)
  //   }
  // }, [open])
  return (
    <div
    // ref={ref}
    >
      <div className=" flex w-full justify-end ">
        <div className=" flex justify-end ">
          <MenuIcon
            onClick={() => {
              setOpenMenu(!openMenu)
            }}
            className=" h-10 w-7 cursor-pointer  text-black duration-[500s] ease-in"
          />
        </div>
      </div>
      <div className=" relative mt-[25px] flex w-[200px] translate-x-[5%] translate-y-[-15%]  flex-col items-start overflow-hidden rounded-[20px] bg-[#edededf9] p-2  shadow-2xl duration-[500s] ease-in">
        {item}
      </div>
    </div>
  )
}
export default DropDownMenu
