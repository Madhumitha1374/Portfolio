import email from "../assets/email.png"
import linkedin from "../assets/linkedin.png"

const ContactMe = () => {
    return (
        <section className="flex flex-col justify-center text-center h-[50vh] mt-[15vh]">
        <p >Get in Touch</p>
        <h1 className="font-bold text-5xl my-3">Contact Me</h1>
        <div className="flex justify-center border border-black px-4 py-2 rounded-lg mx-auto text-center">
            <div className="flex mx-2" >
                <img 
                src={email}
                alt="email icon"
                className="w-8 h-8 mr-1"
                />
                <p className="pt-1"><a href="mailto:exampleemail@gmail.com">madhumithamarthala03@gmail.com</a></p>
            </div>
            <div className="flex mx-2">
                <img 
                src={linkedin}
                alt="linkedin icon"
                className="w-7 h-7 mr-1"/>
                <p className="pt-1"><a href='https://www.linkedin.com/in/madhumitha-marthala-1b5a02147/' >LinkedIn</a></p>
            </div>
        </div>
    </section>
    )
}

export default ContactMe