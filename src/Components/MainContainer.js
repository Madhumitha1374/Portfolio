import { main } from "../utils/constants"
import AboutMe from "./AboutMe"
import ExpereinceSkills from "./ExpereinceSkills"
import Projects from "./Projects"

const MainContainer = () => {
    return (
        <div>
            <div className='flex flex-col justify-center mx-2 h-[70vh] min-h-fit  border border-red-800 bg-[#41b0bf] text-white font-sans'>
            <div className="flex justify-center">
                <img src="https://akshaysaini.in/img/plane.gif" alt="plane"/>
            </div>
            <div className='flex flex-col gap-7 pt-6 text-center'>
                <h1 className='font-semibold text-5xl'>{main.name}</h1>
                {/* <p className=' animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-5xl text-white font-bold'>I am React Js Developer</p> */}
                <p className='text-2xl font-bold'>{main.work}</p>
                
                <div className='flex justify-center gap-8'>
                    <a href="https://docs.google.com/document/d/e/2PACX-1vRaaqJyXvL-824rxgoWhorVirH9vZWAcnSn6ceHTri4oFxHbCf9pMAJnBPu3K9iQJfonCTdgUqGGbQO/pub" className='bg-[#41b0bf] border border-white rounded-xl py-3 px-4'>Download Resume</a>
                    </div>
            </div>
        </div>
            <AboutMe/>
            <ExpereinceSkills/>
            <Projects/>
        </div>
        
    )
}

export default MainContainer