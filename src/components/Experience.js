import React from "react";
import CSS from "../assets/css.png";
import github from "../assets/github.png";
import html from "../assets/html.png";
import javascript from "../assets/javascript.png";
import node from "../assets/node.png";
import react from "../assets/react.png";
const Experience = () => {
  const ITexperience = [
    {
      id: 1,
      title: "CSS",
      style: "shadow-blue-400",
      ImgSrc: CSS,
    },
    {
      id: 2,
      title: "github",
      style: "shadow-white-400",
      ImgSrc: github,
    },
    {
      id: 3,
      title: "html",
      style: "shadow-orange-400",
      ImgSrc: html,
    },
    {
      id: 4,
      title: "JS",
      style: "shadow-yellow-400",
      ImgSrc: javascript,
    },
    {
      id: 5,
      title: "nodeJS",
      style: "shadow-green-400",
      ImgSrc: node,
    },
    {
      id: 6,
      title: "react",
      style: "shadow-sky-400",
      ImgSrc: react,
    },
  ];
  return (
    <div className="bg-gradient-to-b from-gray-500 to-black w-full h-full text-white ">
      <div className=" max-w-screen-lg mx-auto p-4 flex flex-col justify-center ">
        <div className="py-8">
          <p className="text-4xl font-bold border-b-4 inline-block  ">
            Experience
          </p>
          <p className="py-4 text-xl">
            These are the technologies I've worked with
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 py-8 px-12 sm:px-0">
          {ITexperience.map(({ id, ImgSrc, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-200 rounded-lg ${style}`}
            >
              <img src={ImgSrc} className="w-20  mx-auto" />
              <p className=" capitalize text-center font-bold mt-4 ">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
