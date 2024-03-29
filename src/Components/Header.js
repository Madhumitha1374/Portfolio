import React from 'react'
import { header } from '../utils/constants'

export const Header = () => {
    return (
        <div className='flex bg-white sticky top-0 justify-around align-middle items-center h-[10vh]'>
                <h1 className=' text-4xl font-customFont'>{header.name}</h1>
                <ul className='flex list-none gap-12 justify-between'>
                    <li className=' text-2xl cursor-pointer' onClick={() => window.location.href = "/"}>{header.home}</li>
                    <li className=' text-2xl cursor-pointer'>{header.aboutMe}</li>
                    <li className=' text-2xl cursor-pointer' onClick={() => window.location.href = "/work"}>{header.myWork}</li>
                </ul>
        </div>
    )
}
