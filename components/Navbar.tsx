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
      <nav className="hidden sm:flex bg-zinc-800 text-white h-[70px]  items-center  flex-row flex-wrap justify-around   w-[80vw] rounded-2xl m-auto mt-3
      sticky top-1 ">
        <div className="name text-3xl hover:scale-105 hover:underline
        hover:underline-offset-4
        hover:decoration-wavy hover:decoration-yellow-600">
          <Link href={'/'}>A.S</Link>
          </div>


        <div className="icons flex justify-evenly items-center gap-x-3 ">
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

    {/* mobile view of top navbar */}
      <nav className="sm:hidden bg-zinc-900 backdrop-blur-sm flex justify-around items-center p-2 gap-2 rounded-full sticky top-2 mb-2 z-10  text-white  w-80 ml-7 mt-2 backdrop-brightness-150  ">
        <div className="name text-2xl">A.S</div>
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
