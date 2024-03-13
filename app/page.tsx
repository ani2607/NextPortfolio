"use client"
import Typewriter from 'typewriter-effect';
import Image from 'next/image';

const url : string  = '/boy.jpg';


export default function Home() {
  return (
    <main className="text-white p-2   ">
      <div className="left mt-20  ml-8">
      <h1 className=" text-3xl text-sky-400">Hi Techies!</h1>
      <h2 className=" text-2xl">I&apos;m </h2>
      <h1 className=" text-4xl">Aniket Sharma</h1>
      <h3 className=' text-xl'>a,</h3>
      <div className="    text-2xl">
        <Typewriter
          options={{
            autoStart: true,
            loop: true,
            delay: 100,
            deleteSpeed : 60,
            strings: [" Full Stack Developer.", "Competitive Programmer."],
          }}
        />
      </div>
      </div>
      <div className="text-center mt-5">

          <Image src={url} priority className='rounded m-auto  text-center'  alt='aniket-image'height={300} width={300} />
      </div>
    </main>
  );
}
