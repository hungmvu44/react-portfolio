import React from "react";

const About = () => {
  return (
    <div className=" h-[700px] w-full bg-gradient-to-b from-gray-700 to-black text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold underline ">About Me</p>
        </div>

        <p className="text-xl ">
          I am a hard working, honest individual. I am a good timekeeper, always
          willing to learn new skills. I am friendly, helpful and polite, have a
          good sense of humour. I am able to work independently in busy
          environments and also within a team setting.
        </p>
        <br />
        <p className="text-xl">
          I currently finished Bachelor of Cloud Computing Technology. During my
          study to date, I have learned basic skills for Information Technology
          (PostgreSQL, MySQL, Ubuntu server, Basic Cloud and Virtualization
          (vmware solution). I also have been learning and doing a lot of clone
          projects which included HTML/CSS with Figma and Adobe, PHP and
          javascript (framework and library such as reactjs, react native with
          sanity, tailwind CSS, bootstrap and vuejs) which I would like to apply
          to the real world environment.
        </p>
      </div>
    </div>
  );
};

export default About;
