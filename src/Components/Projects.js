import youtube from "../assets/youtube.png"
import Netflix from "../assets/Netflix.png"
import YumHub from "../assets/YubHub.png"
import { Link } from "react-router-dom"

const Projects = () => {
    return(
        <section className='flex flex-col justify-center h-[96vh] pt-[8vh] t'>
            <div className="text-center mb-10">
                <h1 className='text-6xl font-semibold'>My Work</h1>
            </div>
        
        <div className='flex justify-evenly mx-10'>
            <Link to="/project">
            <div className='rounded-md shadow-lg px-5 py-6 mx-7 transition-all duration-700 hover:scale-110 '>
                <img alt = "youtube"
                className=' rounded-md w-[100%] h-[80%] mb-5'
                src={youtube}/>
                <div className="text-center">
                    <h1 className="font-bold text-3xl ">Youtube Clone</h1>
                </div>
            </div>
            </Link>
            
            <div className='rounded-md shadow-lg px-5 py-6 mx-7 transition-all duration-700 hover:scale-110'>
                <img alt = "Netflix"
                className=' rounded-md w-[100%] h-[80%] mb-5'
                src={Netflix}/>
                <div className="text-center">
                    <h1 className="font-bold text-3xl">Netflix-GPT</h1>
                </div>
            </div>
            <div className='rounded-md shadow-lg px-5 py-6 mx-7 transition-all duration-700 hover:scale-110'>
                <img alt = "YumHub"
                className=' rounded-md w-[100%] h-[80%] mb-5'
                src={YumHub}/>
                <div className="text-center">
                    <h1 className="font-bold text-3xl">YumHub</h1>
                </div>
            </div>
            
            
        </div>
        <div className="text-center mt-8">
            <Link to="/work"><button className="rounded-xl font-bold text-lg px-10 text-white py-3 bg-[#41b0bf]">View all my Work</button>
        </Link>
            </div>
        </section>
    )
}

export default Projects