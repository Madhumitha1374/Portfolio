import React from 'react'
import github from "../assets/github.png"
import play from "../assets/download.png"

export const Project = (params) => {
    const {proj} = params
    const {name, url, githubLink,demoLink} = proj
    return (
        <div className='flex w-4/12 my-3'>
            <div className='rounded-md shadow-lg px-5 py-6 mx-7 transition-all duration-700 hover:scale-110 '>
                <img alt = "youtube"
                className=' rounded-md w-[100%] h-[70%] mb-5'
                src={url[name]}/>
                <div className="text-center">
                    <h1 className="font-bold text-3xl ">{name}</h1>
                    <div className='flex justify-center mt-2'>
                    <a href={githubLink} ><img src={github} alt='github' className='w-7 mr-5 cursor-pointer'/></a>
                    <a href={demoLink} > <img src={play} alt='play' className='w-7 cursor-pointer'/></a>
                    </div>
                </div>
            </div>
            
            
        </div>
    )
}
