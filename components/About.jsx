import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-8 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-6 gap-8">
        <div className="col-span-3 col-start-2">
          <h2 id="about" className="uppercase py-2">About</h2>
          <p>
            I am a web developer with a passion for creating beautiful and functional websites. Web development was not my first career. I owned a carpet cleaning
            business, and as a small business owner, I wore many hats. One of those hats was the web developer hat. I made my own websites for years, and I became pretty good at it. </p>
            <p>My big break was when I suffered a serious knee injury that was bad enough to require two surgeries and most of a year on crutches. During that time I started going back to school. I loved digging in, learning new technologies, and figuring out ways to build things better, stronger, faster. I left the small business world to do work that I loved.</p> 
            <p>My goal is to build websites that are beautiful, responsive, accessible, and high-performing. I specialize in building websites in WordPress, but I also have experience with React, Next, and Node. I am always learning new technologies and looking for ways to improve my skills.
          </p>
        </div>
        <div className="flex flex-col justify-center">
          <Image
            src="/assets/dan_k-2.jpg"
            alt="Dan Keech"
            width={180}
            height={270}
            className="my-4 h-60 md:h-auto rounded-lg shadow-gray-400 shadow-lg m-auto "
          />
        </div>
      </div>
    </div>
  );
};

export default About;
