import React from 'react'
import MainContainer from './MainContainer'
import AboutMe from './AboutMe'
import Projects from './Projects'
import ExpereinceSkills from './ExpereinceSkills'
import { Outlet } from 'react-router-dom'

export const Body = () => {
    return (
        <div className='gap-10'>
            <Outlet/>
        
        </div>
    )
}
