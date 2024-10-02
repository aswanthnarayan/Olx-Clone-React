import React from 'react'
import logo from '../assets/LOGO.svg'
import {InputWithDropdown} from '../components/DropDownInput'
import {InputWithButton} from '../components/SearchInput'
import { FaAngleDown } from "react-icons/fa6";
import '../App.css'
import { Button } from '@material-tailwind/react';


const Navbar = () => {
  return (
    <div className='bg-[#EFF1F3] flex justify-center items-center py-2 px-6 gap-4 mb-[5px] sticky top-0 z-50'>
        <img src={logo} alt="" />
        <InputWithDropdown/>
        <InputWithButton/>
        <div className='flex items-center '>
          <p className='font-bold'>English</p>
          <FaAngleDown size={25}/>
        </div>
        <div className='flex items-center gap-4'>
        <p className='font-bold underline'>Login</p>
        <div className=' test bg-black rounded-full p-1.5 '>
          <Button className='rounded-full text-black bg-white px-3 md:px-5 py-1.5 text-sm'>+Sell</Button>
        </div>
    </div>
    </div>
  )
}

export default Navbar