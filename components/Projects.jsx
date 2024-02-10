import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Project from "./Project";

const siteBase = "https://dankeech.com";
const baseURL = `${siteBase}/wp-json/wp/v2/projects/`;

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    axios
      .get(baseURL)
      .then((res) => {
        setProjects(res.data);
        setIsLoaded(true);
      })
      .catch((err) => console.log(err));
  }, []);

  if (isLoaded) {
    return (
      <div
        id="projects"
        className="w-full p-8 m-auto flex flex-col justify-center items-center py-16 "
      >
        <h2 className="pt-[200px]">Projects</h2>
        {projects
          .slice(0, 6)
          .filter((project) => {
            return project.acf.display_order < 51;
          })
          .map((project) => (
            <Project
              key={project.id}
              title={project.title.rendered}
              image={project.acf.main_image}
              content={project.content.rendered}
            />
          ))}
      </div>
    );
  } else {
    return <h2 className="text-center py-16">Projects Loading...</h2>;
  }
}
