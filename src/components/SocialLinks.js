import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          Linkedin <FaLinkedin size={27} />
        </>
      ),
      href: "https://www.linkedin.com/in/vu-hung-082b561a4/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          Github <FaGithub size={27} />
        </>
      ),
      href: "https://github.com/hungmvu44",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={27} />
        </>
      ),
      href: "mailto:mrhung0404@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={27} />
        </>
      ),
      href: "./Andys's resume22.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];

  return (
    <div className=" hidden lg:flex flex-col fixed top-[25%] left-0 ">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-center items-center w-40 h-14 px-4 bg-gray-500 ml-[-70%] hover:ml-[-10px] hover:rounded-md duration-200" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white hover:"
              download={download}
              target="_blank"
            >
              <>{child} </>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
