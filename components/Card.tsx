import Link from "next/link"
import { FaGithub,FaXTwitter } from "react-icons/fa6";
import { FaLinkedin , FaInstagram } from "react-icons/fa";

const Card = () => {
  return (
    <>

    {/* mobile view */}
    <div className=" mt-16  m-auto  w-[96vw] h-[10vh] bg-zinc-800 hover:bg-zinc-900 shadow-lg shadow-gray-500/50  hover:bg-gradient-to-r hover:from-cyan-700 hover:to-blue-600 hover:shadow-sky-600    sm:hidden  text-white rounded-xl flex flex-col items-center">
      <h1 className="text-xl text-center mt-1">Connect With Me</h1>

        <div className="links flex justify-around gap-x-3 mt-5   ">

          <div className="github">
          <Link href={"https://github.com/ani2607"} target="_blank" ><FaGithub size={25} /></Link>
          </div>
          <div className="linkedin">
          <Link href={"https://www.linkedin.com/in/aniket-sharma-4638a5243/"} target="_blank" ><FaLinkedin size={25} /></Link>
          </div>
          <div className="twitter">
          <Link href={"https://twitter.com/_aniket22_"} target="_blank" ><FaXTwitter size={25} /></Link>
          </div>
          <div className="instagram">
          <Link href={"https://www.instagram.com/_aniket22_/"} target="_blank" ><FaInstagram size={25} /></Link>
          </div>
          
            
        </div>
      
    </div> 

    {/* desktop view */}
    </>
  )
}
export default Card
