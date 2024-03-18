import React from 'react'
import { header } from '../utils/constants'

export const Footer = () => {
    return (
        <footer className='flex justify-center flex-col gap-6 text-center bg-[#41b0bf] py-5 text-white'>
        <nav >
            <div className='flex justify-center'>
            <ul className='flex list-none gap-12'>
                    <li className=' text-2xl cursor-pointer' onClick={() => window.location.href = "/"}>{header.home}</li>
                    <li className=' text-2xl cursor-pointer'>{header.aboutMe}</li>
                    <li className=' text-2xl cursor-pointer' onClick={() => window.location.href = "/work"}>{header.myWork}</li>
                </ul>
            </div>
        </nav>
        <p>Copyright &#169; 2023 Madhu Mitha Marthala. </p>
    </footer>
    )
}
