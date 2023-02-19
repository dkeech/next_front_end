import React from "react";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

const Main = () => {
  return (
    <div className="w-full h-screen flex justify-center text-center">
        
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex flex-col justify-center items-center">
      <img src="/assets/dan_k-2.jpg" alt="" className="my-4 h-40 rounded-lg shadow-gray-400 shadow-lg center-content object-cover" />
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            Let's build some things together!
          </p>
          <h1 className="py-4 text-gray-700">Hi, I'm Dan</h1>
          <h1 className="py-2 text-gray-500">A Front-End Web Developer</h1>
          <p className="py-4 text-gray-600">
            I specialize in building beautiful, responsive, accessible, high-performing websites in WordPress.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedin size={30} />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithubSquare size={30} />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                <AiOutlineMail size={30} />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedin size={30} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
