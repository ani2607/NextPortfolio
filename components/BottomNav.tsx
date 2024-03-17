import Link from "next/link"
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlinePerson } from "react-icons/md";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { AiOutlineContacts } from "react-icons/ai";

const BottomNav = () => {
  return (
    <div className="fixed z-10   bottom-2  w-[97vw] ml-1   rounded-full  p-2  sm:hidden text-white flex justify-around items-center  gap-2 bg-zinc-900   backdrop-blur-sm   ">

        <div className="home">
            <Link  href= {"/"}><IoHomeOutline  size={25} /></Link>
        </div>
        <div className="about">
        <Link href= {"/about"}><MdOutlinePerson size={25} /></Link>
        </div> 
        
        <div className="projects">
        <Link href= {"/projects"}><AiOutlineFundProjectionScreen size={25} /></Link>
        </div>

        <div className="contact">
        <Link href= {"/contact"}><AiOutlineContacts size={27} /></Link>
        </div>

    
      
    </div>
  )
}

export default BottomNav
