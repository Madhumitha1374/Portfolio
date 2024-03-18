import YouTube from "../assets/Youtube.png"
import Netflix from "../assets/Netflix.png"
import YumHub from "../assets/Yumhub.png"

export const header = {
    name : "Madhu Mitha",
    home : "Home",
    aboutMe : "About Me",
    myWork : "My Work"
}

export const main = {
    name : "Madhu Mitha Marthala",
    work : "I am React Js Developer"
}

export const about = {
    heading : "About Me",
    about1 : "Hi I am Madhu Mitha Marthala, a 23 year old ReactJs developer with 1.8 years of expereince living in Kadapa, India. I am actively looking for an oppurtuniy.",
    about2 : "I have experience working with Javascript, React, redux, HTML, CSS, Tailwind CSS, MYSQL and Git.I am a quick learner and I am always looking to expand my knowledge and skill set. I am a team player and I am excited to work with others to create amazing applications"

}



export const projects = [
  {
    id : 1,
    name : "YouTube",
    // url : "../assets/youtube.png"
    url : {YouTube},
    githubLink : "https://github.com/Madhumitha1374/YouTube/tree/master",
    demoLink : "https://mad-52a9b.web.app/"
  },
  {
    id : 2,
    name : "Netflix",
    // url : "../assets/Netflix.png"
    url : {Netflix},
    githubLink : "https://github.com/Madhumitha1374/netflix-gpt"
  },
  {
    id : 3,
    name : "YumHub",
    // url : "../assets/YubHub.png"
    url : {YumHub},

  },
]