"use client";
import { useState } from "react";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import Link from "next/link";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlinePerson } from "react-icons/md";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { AiOutlineContacts } from "react-icons/ai";

const Navbar = () => {
  const [mode, setMode] = useState(false);
  return (
    <>
      <nav className="hidden sm:flex bg-zinc-800 text-white h-16 sticky top-0  items-center  flex-row flex-wrap justify-around gap-x-2 ">
        <div className="name text-3xl">Aniket Sharma</div>  


        <div className="icons flex justify-center items-center gap-x-3 ">
          <div className="home   ">
            <Link className="flex items-center gap-1  hover:border-b-yellow-600
            hover:border-b-[3px]   hover:transition-all hover:duration-75 hover:delay-200   " href={"/"}>
              <IoHomeOutline className="-mt-1" size={25} />
             <span className="text-xl">Home</span>
            </Link>
          </div>
          <div className="about">
            <Link className="flex items-center gap-1  hover:border-b-yellow-600
            hover:border-b-[3px]   hover:transition-all hover:duration-75 hover:delay-200"  href={"/about"}>
              <MdOutlinePerson size={25} />
             <span className="text-xl">About</span>
            </Link>
          </div>

          <div className="projects">
            <Link className="flex items-center gap-1  hover:border-b-yellow-600
            hover:border-b-[3px]   hover:transition-all hover:duration-75 hover:delay-200"  href={"/projects"}>
              <AiOutlineFundProjectionScreen size={25} />
            <span className="text-xl">Projects</span>
            </Link>
          </div>

          <div className="contact">
            <Link className="flex items-center gap-1  hover:border-b-yellow-600
            hover:border-b-[3px]   hover:transition-all hover:duration-75 hover:delay-200"  href={"/contact"}>
              <AiOutlineContacts size={27} />
            <span className="text-xl">Contact Me</span>
            </Link>
          </div>
        </div>
      </nav>

      <nav className="sm:hidden bg-zinc-900 backdrop-blur-sm flex justify-around items-center p-2 rounded-full fixed z-10 text-white  w-80 ml-7   ">
        <div className="name text-2xl">Aniket Sharma</div>
        <button className="mode " onClick={() => setMode((prev) => !prev)}>
          {mode ? (
            <MdOutlineDarkMode size={27} />
          ) : (
            <MdOutlineLightMode size={28} />
          )}
        </button>
      </nav>
      </>
  );
};

export default Navbar;
