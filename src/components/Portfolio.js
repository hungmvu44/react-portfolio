import React from "react";
import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
import installNode from "../assets/portfolio/installNode.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";

const Portfolio = () => {
  const portfo = [
    {
      id: 1,
      src: arrayDestruct,
    },
    {
      id: 2,
      src: installNode,
    },
    {
      id: 3,
      src: navbar,
    },
    {
      id: 4,
      src: reactParallax,
    },
    {
      id: 5,
      src: reactSmooth,
    },
    {
      id: 6,
      src: reactWeather,
    },
  ];

  return (
    <div className="bg-gradient-to-b from-black to-gray-500 text-white w-full md:h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold underline">Portfolio</p>
          <p className="py-6">Here is my experience working in react</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfo.map(({ id, src }) => (
            <div className="shadow-md shadow-gray-600">
              <img
                key={id}
                src={src}
                alt=""
                className="rounded-md hover:scale-105 duration-200"
              />

              <div className="flex justify-center items-center">
                <button className="w-1/2 px-6 m-4 hover:scale-105 duration-200">
                  Demo
                </button>
                <button className="w-1/2 px-6 m-4 hover:scale-105 duration-200">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
