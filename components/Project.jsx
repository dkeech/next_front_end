import React from "react";

const Project = (props) => {
  const img = props.image;
  const title = props.title;
  const content = props.content;

  return (
    <div className="flex flex-wrap py-8 px-4">
      <div className=" max-w-4xl p-6 shadow-xl rounded-xl hover:scale-102 ease-in duration-300">
        <div className="flex flex-col justify-center items-center">
          <div>
            <img src={img} alt={title} />
            <h2 className="py-8 text-center ">{title}</h2>
          </div>
          <div
            className="m-auto project-card max-w-2xl"
            dangerouslySetInnerHTML={{ __html: content }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Project;
