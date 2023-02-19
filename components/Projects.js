import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const baseURL = "http://localhost:8000/wp-json/wp/v2/projects/";

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
    return projects.map((project) => (
      <div key={project.id}>
        <h2>{project.title.rendered}</h2>
        <div dangerouslySetInnerHTML={{ __html: project.content.rendered }} />
      </div>
    ));
  } else {
    return <div>Loading...</div>;
  }
}

