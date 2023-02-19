import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { Icon } from "@iconify/react";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed w-full h-20 shadow-xl z-[100]">
      <div className=" w-full h-full px-2 2xl:px-16 bg-slate-50">
        <div className="flex justify-between items-center max-w-[1240px] m-auto">
          <Link href="/">
            <Icon
              icon="material-symbols:code-blocks-rounded"
              color="#666"
              width={72}
            />
          </Link>
          <div className="flex justify-end px-2 w-full">
            <ul className="hidden md:flex">
              <Link href="/">
                <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
              </Link>
              <Link href="/#about">
                <li className="ml-10 text-sm uppercase hover:border-b">
                  About
                </li>
              </Link>
              <Link href="/#projects">
                <li className="ml-10 text-sm uppercase hover:border-b">
                  Projects
                </li>
              </Link>
              <Link href="/#skills">
                <li className="ml-10 text-sm uppercase hover:border-b">
                  Skills
                </li>
              </Link>
              <Link href="/#education">
                <li className="ml-10 text-sm uppercase hover:border-b">
                  Education
                </li>
              </Link>
            </ul>
            <div onClick={handleNav} className="md:hidden">
              <AiOutlineMenu size={25} />
            </div>
          </div>
          <div
            className={
              nav
                ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70"
                : ""
            }
          >
            <div
              className={
                nav
                  ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
                  : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
              }
            >
              <div>
                <div className="flex w-full items-center justify-between">
                  <Link href="/">
                    <Icon
                      icon="material-symbols:code-blocks-rounded"
                      color="#666"
                      width={72}
                    />
                  </Link>
                  <div
                    onClick={handleNav}
                    className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
                  >
                    <AiOutlineClose />
                  </div>
                </div>
                <div className="border-b border-gray-300 my-4">
                  <p className="w-[85%] md:w-[90%] py-4">
                    Let&apos;s build some things together!
                  </p>
                </div>
              </div>
              <div className="py-4 flex flex-col h-full justify-between">
                <ul className="uppercase">
                  <Link href="/">
                    <li className="py-4 text-sm">Home</li>
                  </Link>
                  <Link href="/#about">
                    <li className="py-4 text-sm">About</li>
                  </Link>
                  <Link href="/">
                    <li className="py-4 text-sm">Projects</li>
                  </Link>
                  <Link href="/#skills">
                    <li className="py-4 text-sm">Skills</li>
                  </Link>
                  <Link href="/">
                    <li className="py-4 text-sm">Education</li>
                  </Link>
                </ul>
                <div className="flex h-full flex-col ">
                  <p className="uppercase pt-[40px] tracking-widest text-[#111]">
                    How to find me
                  </p>
                  <div className="flex">
                    <div className="p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                      <a
                        href="https://www.linkedin.com/in/dankeech/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FaLinkedin className="shadow-lg " size={25} />
                      </a>
                    </div>
                    <div className="p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                      <a
                        href="https://github.com/dkeech/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FaGithubSquare className="shadow-lg" size={25} />
                      </a>
                    </div>
                    <div className="p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                      <a href="mailto:ddkeech@gmail.com">
                        <AiOutlineMail className="shadow-lg " size={25} />
                      </a>
                    </div>
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
