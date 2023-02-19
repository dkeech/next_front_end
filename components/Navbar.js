import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="fixed w-full h-20 shadow-xl z-[100]">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Image
          src="/../public/assets/navLogo.png"
          alt=""
          width={87}
          height={35}
        />
        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">About</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Projects
              </li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Education
              </li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
            </Link>
          </ul>
          <div className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
        <div className="fixed left-0 top-0 w-full h-screen bg-black/70">
          <div className="fixed-left-0 top-0 w- sm:w-[75%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500">
            <div>
              <div className="flex w-full items-center justify-between">
                <Image
                  src="/../public/assets/navLogo.png"
                  alt="/"
                  width="87"
                  height="35"
                />
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer">
                  <AiOutlineClose />
                </div>
              </div>
              <div className="border-b border-gray-300 my-4">
                <p className="w-[85%] md:w-[90%] py-4">
                  Let's build some things together!
                </p>
              </div>
            </div>
            <div className="py-4 flex flex-col h-full justify-between">
              <ul className="uppercase">
                <Link href="/">
                  <li className="py-4 text-sm">Home</li>
                </Link>
                <Link href="/">
                  <li className="py-4 text-sm">About</li>
                </Link>
                <Link href="/">
                  <li className="py-4 text-sm">Projects</li>
                </Link>
                <Link href="/">
                  <li className="py-4 text-sm">Education</li>
                </Link>
                <Link href="/">
                  <li className="py-4 text-sm">Skills</li>
                </Link>
              </ul>
              <div className="flex h-full height flex-col justify-end ">
                <p className="uppercase tracking-widest text-[#5651e5]">
                  How to find me
                </p>
                <div className="flex">
                  <div className="p-3 cursor-pointer hover:scale-105 ease-in duration-500">
                    <FaLinkedin className="shadow-lg shadow-gray-400" />
                  </div>
                  <div className="p-3 cursor-pointer hover:scale-105 ease-in duration-500">
                    <FaGithubSquare className="shadow-lg shadow-gray-400" />
                  </div>
                  <div className="p-3 cursor-pointer hover:scale-105 ease-in duration-500">
                    <AiOutlineMail className="shadow-lg shadow-gray-400" />
                  </div>
                  <div className="p-3 cursor-pointer hover:scale-105 ease-in duration-500">
                    <FaLinkedin className="shadow-lg shadow-gray-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
