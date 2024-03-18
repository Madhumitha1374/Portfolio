import React from 'react'

export const Project = (params) => {
    const {proj} = params
    const {name, url} = proj
    return (
        <div className='flex justify-evenly mx-10'>
            <div className='rounded-md shadow-lg px-5 py-6 mx-7 transition-all duration-700 hover:scale-110 '>
                <img alt = "youtube"
                className=' rounded-md w-[100%] h-[80%] mb-5'
                src={url}/>
                <div className="text-center">
                    <h1 className="font-bold text-3xl ">{name}</h1>
                </div>
            </div>
            
            
        </div>
    )
}
