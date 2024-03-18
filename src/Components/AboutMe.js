import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn,faGithub,faHtml5 } from '@fortawesome/free-solid-svg-icons'
import { about } from '../utils/constants'
import madhu from '../assets/madhu2.jpg'

const AboutMe = () => {
    return(
        <div className="flex mx-32 my-20 h-[96vh] pt-[8vh]">
            <div  className="w-2/6  px-6 py-6">
                <img src={madhu}
                alt="profilepicture"
                className="rounded-md shadow-lg"/>
                <div>

                </div>
            </div>
            <div className="px-10 py-6 w-4/6 ">
            <h1 className="text-6xl mb-3">{about.heading}</h1>
            <p className="text-lg">{about.about1}</p>
            <p className="text-lg">{about.about2}</p>
            <p className='text-lg font-bold mt-3'>Skills</p>
            <div className='flex my-3'>
                <ul className='flex flex-wrap'>
                    <li>
                    <button className='shadow-lg rounded-md w-[150px] mx-3 mb-5  px-4 py-2'>Html5</button>
                    </li>
                    <li>
                    <button className='shadow-lg rounded-md  w-[150px] mx-3 mb-5  px-4 py-2'>CSS3</button>
                    </li>
                    <li>
                    <button className='shadow-lg rounded-md w-[150px] mx-3 mb-5  px-4 py-2'>Bootstrap</button>
                    </li>
                    <li>
                    <button className='shadow-lg rounded-md w-[150px] mx-3 mb-5   px-4 py-2'>Tailwind CSS</button>
                    </li>
                    <li>
                    <button className='shadow-lg rounded-md w-[150px] mx-3 mb-5  px-4 py-2'>Javascript</button>
                    </li>
                    <li>
                    <button className='shadow-lg rounded-md w-[150px] mx-3 mb-5  px-4 py-2'>ReactJs</button>
                    </li>
                    <li>
                    <button className='shadow-lg rounded-md w-[150px] mx-3 mb-5  px-4 py-2'>Redux</button>
                    </li>
                    <li>
                    <button className='shadow-lg rounded-md w-[150px] mx-3 mb-5  px-4 py-2'>Webpack</button>
                    </li>
                    <li>
                    <button className='shadow-lg rounded-md w-[150px] mx-3 mb-5  px-4 py-2'>Python</button>
                    </li>
                    <li>
                    <button className='shadow-lg rounded-md w-[150px] mx-3 mb-5  px-4 py-2'>MySql</button>
                    </li>
                    <li>
                    <button className='shadow-lg rounded-md w-[150px] mx-3 mb-5  px-4 py-2'>Git</button>
                    </li>
                </ul>
            </div>
            </div>
        </div>
    )
}

export default AboutMe