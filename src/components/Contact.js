import React from "react";

const Contact = () => {
  return (
    <div className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white">
      <div className="flex flex-col justify-center max-w-screen-lg mx-auto h-full">
        <div>
          <p className="text-4xl inline border-b-4 border-gray-500">
            Contact Me !
          </p>
          <p className="py-6 text-xl">Send me your enquiry</p>
        </div>
        <div className="flex justify-center items-center ">
          <form
            action="https://getform.io/f/080c8d08-7d3d-4148-9f12-4e7ed4320faf"
            method="POST"
            className="flex flex-col w-full justify-center md:w-[700px] "
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none my-4"
            />
            <textarea
              name="message"
              placeholder="Enter text here"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>
            <button className="p-2 bg-gradient-to-b from-cyan-500 to-blue-500 rounded-lg px-6 py-3 my-8 flex mx-auto items-center hover:scale-105 duration-200">
              Contact Me
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
