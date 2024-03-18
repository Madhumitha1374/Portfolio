import React from 'react'
import { Project } from './Project'
import { projects } from '../utils/constants'

export const MyWork = () => {
    return (
        <section className='flex flex-col justify-center pt-[8vh] '>
        <div className="text-center mb-10">
            {/* <h1 className='text-6xl font-semibold'>My Projects</h1> */}
        </div>
        <div className='flex flex-wrap justify-evenly mx-5'>
        {projects.map((each) => <Project proj = {each} key = {each.id}/>)}
        </div>
        <div className='text-center mt-8'>
            <p>Page is getting updated....</p>
            <button className="rounded-xl font-bold text-lg px-10 text-white py-3 bg-[#41b0bf]">Explore My Github for more...</button>
        </div>
        </section>
    )
}
