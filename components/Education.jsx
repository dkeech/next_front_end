import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import School from "./School";

const siteBase = "https://dankeech.com"
const baseURL = `${siteBase}/wp-json/wp/v2/school/`;

export default function Education() {
  const [schools, setSchools] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    axios
      .get(baseURL)
      .then((res) => {
        setSchools(res.data);
        setIsLoaded(true);
      })
      .catch((err) => console.log(err));
  }, []);

  if (isLoaded) {
    return (
        <div id="education" className="flex flex-col h-full">
        <h2 className="text-center pt-[200px]">Education</h2>
      <div id="schools" className="w-full p-8 m-auto flex flex-wrap items-stretch justify-center py-16 ">

        {schools.map((school) => (
          <School 
            key={school.id} 
            title={school.title.rendered} 
            image={school.acf.main_image}
            content={school.content.rendered} />

      ))}
    </div></div>
    )
  } else {
    return <h2 className="text-center py-16">Schools Loading...</h2>;
  }
}

