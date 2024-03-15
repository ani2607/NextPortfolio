const ContactPage = () => {
  return (
    <>
      {/* mobile view */}
      <div className="text-white sm:hidden mt-8">
        <form action="">
          <div className="name flex flex-col p-1  m-2 ">
            <label className="text-xl  ml-1">Name</label>
            <input
              type="text"
              className="outline-none p-[7px]  text-pink-100  bg-black  border-gray-600   rounded-xl focus:border-pink-500/35 border-2 "
              placeholder="Name..."
            />
          </div>
          <div className="email flex flex-col p-1  m-2 ">
            <label className="text-xl  ml-1">Email</label>
            <input
              className="outline-none p-[7px]  text-pink-100  bg-black  border-gray-600   rounded-xl focus:border-pink-500/35 border-2"
              type="email"
              placeholder="email..."
            />
          </div>
          <div className="message flex flex-col m-2">
            <label className="text-xl  ml-1">Message</label>
            <textarea
              className="outline-none p-[7px]  text-pink-100  bg-black  border-gray-600   rounded-xl focus:border-pink-500/35 border-2"
              cols={30}
              placeholder="Message..."
              rows={10}
            >
              Message
              
            </textarea>
          </div>
          <div className="btn mt-5 flex justify-center flex-wrap ">
            <button className=" w-[96vw]   outline-none bg-pink-800   text-xl p-2 rounded border-pink-500/35 hover:bg-rose-700 ">
              Send
            </button>
          </div>
        </form>
      </div>

      {/* desktop view */}
    </>
  );
};

export default ContactPage;
