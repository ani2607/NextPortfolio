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
    <div className="text-white">
      <nav className="hidden sm:flex bg-zinc-800 h-12 items-center  flex-row justify-evenly ">
        <div className="name text-3xl">Aniket Sharma</div>


        <div className="icons flex ">
          <div className="home">
            <Link className="flex items-center gap-1" href={"/"}>
             <span className="text-xl">Home</span> <IoHomeOutline size={25} />
            </Link>
          </div>
          <div className="about">
            <Link className="flex items-center gap-1"  href={"/about"}>
             <span className="text-xl">About</span>
              <MdOutlinePerson size={25} />
            </Link>
          </div>

          <div className="projects">
            <Link className="flex items-center gap-1"  href={"/projects"}>
            <span className="text-xl">Projects</span>
              <AiOutlineFundProjectionScreen size={25} />
            </Link>
          </div>

          <div className="contact">
            <Link className="flex items-center gap-1"  href={"/contact"}>
            <span className="text-xl">Contact Me</span>
              <AiOutlineContacts size={27} />
            </Link>
          </div>
        </div>
      </nav>

      <nav className="sm:hidden bg-zinc-900 backdrop-blur-sm flex justify-around items-center p-2 rounded-full fixed z-10  w-80 ml-7   ">
        <div className="name text-2xl">Aniket Sharma</div>
        <button className="mode " onClick={() => setMode((prev) => !prev)}>
          {mode ? (
            <MdOutlineDarkMode size={27} />
          ) : (
            <MdOutlineLightMode size={28} />
          )}
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
