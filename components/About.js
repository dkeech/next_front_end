import React from "react";

const About = () => {
  return (
    <div className="w-full md:h-screen p-8 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-6 gap-8">
        <div className="col-span-3 col-start-2">
          <p className="uppercase">About</p>
          <p>
            Web development was not my first career. I had a carpet cleaning
            business, and as the person who had to do everything, I had to make
            the website. I made my own websites for years. I liked the work, but
            it was hard to ever find time to do it. Then I injured my knee badly
            enough to require two surgeries and most of a year on crutches.
            During that time I started going back to school. I love exploring
            new technologies and figuring out ways to build things better,
            stronger, faster.
          </p>
        </div>
        <div >
          <img
            src="/assets/dan_k-2.jpg"
            alt=""
            className="my-4 h-60 rounded-lg shadow-gray-400 shadow-lg center-content object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
