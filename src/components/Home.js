import React from "react";
import HeroImage from "../assets/heroImage.jpeg";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-scroll";
import Typed from "react-typed";
const Home = () => {
  return (
    <div className="h-screen w-full bg-gradient-to-b from-black to-gray-700 text-white ">
      <div className="max-w-screen-lg flex flex-col mx-auto items-center justify-center h-full px-4 md:flex-row ">
        <div className="flex flex-col justify-center h-full ">
          <h2 className="text-4xl sm:text-6xl font-bold">
            I am a{" "}
            <Typed
              strings={["React", "Javascript Developer"]}
              typeSpeed={120}
              backSpeed={70}
              loop
            />
          </h2>
          <p className="text-gray-500 py-5">
            I graduated with Information technology bachelor degree. Currently,
            I don't have experience in real life but I love working on ReactJS,
            TailwindCSS, NextJS
          </p>
          <div>
            <Link
              to="Portfolio"
              smooth
              duration={400}
              className="group flex items-center w-fit px-5 py-2 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="ml-1 group-hover:rotate-90 duration-300">
                <BsArrowRight size={21} />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img src={HeroImage} alt="" className="rounded-3xl mx-auto w-2/3" />
        </div>
      </div>
    </div>
  );
};

export default Home;
