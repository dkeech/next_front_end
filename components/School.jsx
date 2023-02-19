import React from "react";

const School = (props) => {
  const img = props.image;
  const title = props.title;
  const content = props.content;

  return (
    <div className="flex flex-wrap py-8 px-4">
      <div className=" max-w-xs p-6 shadow-xl rounded-xl hover:scale-102 ease-in duration-300">
        <div className="flex flex-col justify-center items-center">
          <div>
            <h2 className="py-8 text-center ">{title}</h2>
            <img className="m-auto max-h-[225px]" src={img} alt={title} />
          </div>
          <div
            className="m-auto school-card "
            dangerouslySetInnerHTML={{ __html: content }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default School;
