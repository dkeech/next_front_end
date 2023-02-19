import React from "react";
import Skill from "./Skill";

const Skills = () => {
  return (
    <div id="skills" className="w-full md:h-screen p-8 m-auto flex flex-col justify-center items-center py-16 h-full">
      <h2>Skills</h2>
      <div className="max-w-[1240px] mx-auto flex flex-wrap justify-center ">
        <Skill img="html" title="HTML" />
        <Skill img="css" title="CSS" />
        <Skill img="wordpress" title="WordPress" />
        <Skill img="javascript" title="JavaScript" />
        <Skill img="php" title="PHP" />
        <Skill img="react" title="React" />
        <Skill img="nextjs" title="Next.js" />
        <Skill img="tailwind" title="Tailwind" />

        <Skill img="sass" title="Sass" />
        <Skill img="git" title="Git" />
        <Skill img="agile" title="Agile" />
      </div>
    </div>
  );
};

export default Skills;
