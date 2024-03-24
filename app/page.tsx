"use client";
import Typewriter from "typewriter-effect";
import Image from "next/image";


const url: string = "https://res.cloudinary.com/dfabrufbd/image/upload/v1710947913/resumeImages/boyImage.jpg";
const pdfUrl: string =
  "https://drive.google.com/file/d/1hojR94It0g15gLdgcLMKLoFbQ9LFQM2d/view?usp=sharing";
  const pdfUrl2 : string = "";

export default function Home() {

  
  // logic for downloading a file when a user clicks on the button
  const downloadFile = () => {
    const aTag = document.createElement("a");
    aTag.href = pdfUrl;
    aTag.setAttribute("download", "Resume");
    aTag.setAttribute("target", "_blank");
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };

  return (
    <main className="text-white p-2 h-[80vh]  ">
      {/* mobile view of statements */}

      <div className=" sm:hidden left mt-4  ml-12">
        <h1 className=" text-4xl  pb-8 ml-1">Hi Techies!</h1>
        <h1 className=" text-5xl m-1">
          I&apos;m{" "}
          <strong className="text-5xl bg-gradient-to-r from-pink-600  to-indigo-700 p-1 text-transparent bg-clip-text ">
            Aniket Sharma
          </strong>{" "}
        </h1>
        <h3 className=" text-2xl text-left ml-2">a,</h3>
        <div className=" bg-gradient-to-r from-pink-500  to-indigo-700 p-1 text-transparent bg-clip-text  text-left ml-2  text-3xl">
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              delay: 100,
              deleteSpeed: 60,
              strings: [" Full Stack Developer.", "Competitive Programmer."],
            }}
          />
        </div>
      </div>

      {/* mobile view of image  */}

      <div className="sm:hidden   h-[40vh] text-center mt-10 right">
        <Image
          src={url}
          priority
          className="rounded m-auto  text-center"
          alt="aniket-image"
          height={320}
          width={320}
        />
      </div>

      <div className="download text-center flex justify-center   ">
        <button
          onClick={downloadFile}
          className="bg-gradient-to-r   from-rose-600 to-indigo-600 text-white hover:from-rose-700 hover:to-indigo-700    p-3 text-2xl  rounded-2xl "
        >
          Resume
        </button>
        <span className="relative  flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-indigo-500"></span>
        </span>
      </div>

      {/* left side of desktop view */}
      <div className="hidden sm:inline left mt-4  ml-8">
        <h1 className=" text-3xl text-sky-400">Hi Techies!</h1>
        <h2 className=" text-2xl">I&apos;m </h2>
        <h1 className=" text-4xl">Aniket </h1>
        <h3 className=" text-xl">a,</h3>
        <div className="    text-2xl">
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              delay: 100,
              deleteSpeed: 60,
              strings: [" Full Stack Developer.", "Competitive Programmer."],
            }}
          />
        </div>
      </div>

      {/* right side of desktop page */}

      <div className="hidden sm:inline text-center mt-5 right">
        <Image
          src={url}
          priority
          className="rounded m-auto  text-center"
          alt="aniket-image"
          height={300}
          width={300}
        />
      </div>
    </main>
  );
}
