import React from "react";
import TechStack from "./TechStack";
import Projects from "./Projects";

const HomePage = () => {
  return (
    <div className="flex h-screen bg-black text-white top-">
      <div className="flex flex-col items-center justify-center w-[350px] h-full bg-black border-r border-gray-700">
        <div className="w-[200px] h-[200px] rounded-full overflow-hidden mb-6 flex items-center justify-center border-4 border-gray-700">
          <img
            src="https://i.postimg.cc/nzVHpN8R/portfolio.jpg"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="text-center space-y-4 px-4">
          <p className="text-2xl font-bold">Rohan Prakasan</p>
          <p className="text-xl font-medium">
            MERN Developer <br /> CP Enthusiast
          </p>
          <p className="text-xl">Contact: work.rohanprakasan@gmail.com</p>
          <br />
          <a
            href="https://www.linkedin.com/in/rohan-prakasan-5579b425a/"
            target="_blank"
            className="text-lg text-blue-400 underline"
          >
            LinkedIn
          </a>
          <br />
          <a
            href="https://www.codechef.com/users/rxhanggs"
            target="_blank"
            className="text-lg text-blue-400 underline"
          >
            CodeChef
          </a>
          <br />
          <a
            href="https://leetcode.com/u/rxhanggs"
            target="_blank"
            className="text-lg text-blue-400 underline"
          >
            Leetcode
          </a>
          <br />
          <a
            href="https://codeforces.com/profile/rxhanggs"
            target="_blank"
            className="text-lg text-blue-400 underline"
          >
            Codeforces
          </a>
          <br />
          <a
            href="https://github.com/rohan-iwnl22"
            target="_blank"
            className="text-lg text-blue-400 underline"
          >
            Github
          </a>
          <p className="font-bold text-2xl mt-4">
            Third Year Undergrad at SIES - Graduate School of Technology.
          </p>
          <p className="text-lg">
            Keen interest in Development and Problem Solving.
          </p>
        </div>
      </div>

      <div className="flex-1 h-full overflow-y-auto bg-black p-6">
        <TechStack />
        <Projects></Projects>
      </div>
    </div>
  );
};

export default HomePage;
