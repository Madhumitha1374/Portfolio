import React from 'react'
import { Project } from './Project'
import { projects } from '../utils/constants'

export const MyWork = () => {
    return (
        <section className='flex flex-col justify-center h-[96vh] pt-[8vh] t'>
        <div className="text-center mb-10">
            <h1 className='text-6xl font-semibold'>My Projects</h1>
        </div>
            {projects.map((each) => <Project proj = {each}/>)}
        </section>
    )
}
