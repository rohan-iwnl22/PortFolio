import React from "react";
import TechStack from "./TechStack";
import Projects from "./Projects";
import Profiles from "./Profiles";

const HomePage = () => {
  return (
    <div className="h-screen overflow-y-auto bg-black text-white">
      {/* Main Container */}
      <div className="flex flex-col lg:flex-row h-auto lg:h-screen">
        {/* Sidebar */}
        <div className="flex flex-col items-center justify-center w-full lg:w-[350px] bg-black border-b lg:border-b-0 lg:border-r border-gray-700 p-6">
          {/* Profile Image */}
          <div className="w-[150px] sm:w-[200px] h-[150px] sm:h-[200px] rounded-full overflow-hidden mb-6 flex items-center justify-center border-4 border-gray-700">
            <img
              src="https://i.ibb.co/0jGFJ8B/portfolio.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Profile Information */}
          <div className="text-center space-y-4 px-4">
            <p className="text-xl sm:text-2xl font-bold">Rohan Prakasan</p>
            <p className="text-lg sm:text-xl font-medium">
              MERN Developer <br /> CP Enthusiast
            </p>
            <p className="text-md sm:text-xl">
              Contact: work.rohanprakasan@gmail.com
            </p>
            <div className="space-y-2 mt-4">
              <a
                href="https://www.linkedin.com/in/rohan-prakasan-5579b425a/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 underline"
              >
                LinkedIn
              </a>
              <br />
              <a
                href="https://www.codechef.com/users/rxhanggs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 underline"
              >
                CodeChef
              </a>
              <br />
              <a
                href="https://leetcode.com/u/rxhanggs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 underline"
              >
                Leetcode
              </a>
              <br />
              <a
                href="https://codeforces.com/profile/rxhanggs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 underline"
              >
                Codeforces
              </a>
              <br />
              <a
                href="https://github.com/rohan-iwnl22"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 underline"
              >
                Github
              </a>
            </div>
            <p className="font-bold text-xl sm:text-2xl mt-4">
              Third Year Undergrad at SIES - Graduate School of Technology.
            </p>
            <p className="text-md sm:text-lg">
              Keen interest in Development and Problem Solving.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 lg:h-screen overflow-y-auto bg-black p-4 sm:p-6 lg:p-10">
          <TechStack />
          <Projects />
          <Profiles />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
