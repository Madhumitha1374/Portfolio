import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn,faGithub } from '@fortawesome/free-solid-svg-icons'
import { about } from '../utils/constants'
import madhu from '../assets/madhu1.jpg'

const AboutMe = () => {
    return(
        <div className="flex mx-32 my-20 h-[96vh] pt-[8vh]">
            <div  className="w-2/6 border border-black px-6 py-6">
                <img src="madhu"
                alt="profilepicture"
                className="rounded-full border border-black"/>
                <div>
                {/* <FontAwesomeIcon icon={faLinkedinIn} style={{color: "#74C0FC",}} /> */}
                {/* <FontAwesomeIcon icon="fa-brands fa-linkedin" />
                <FontAwesomeIcon icon={faGithub} /> */}
                </div>
            </div>
            <div className="px-10 py-6 w-4/6  border border-black">
            <h1 className="text-6xl mb-3">{about.heading}</h1>
            <p className="text-xl">{about.about1}</p>
            <p className="text-xl">{about.about2}</p>
            </div>
        </div>
    )
}

export default AboutMe