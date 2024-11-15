import React from "react";
import TechStack from "./TechStack";
import Projects from "./Projects.jsx";
import Profiles from "./Profiles.jsx";

const HomePage = () => {
  return (
    <div className="flex h-screen bg-black text-white">
      {/* Sidebar */}
      <div className="flex flex-col items-center justify-center w-[350px] h-full bg-black border-r border-gray-700 p-8">
        {/* Profile Image */}
        <div className="w-[300px] h-[300px] rounded-full overflow-hidden mb-6 flex items-center justify-center border-4 border-gray-700">
          <img
            src="public\portfolio.jpg" // Changed to relative path from the public folder
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Profile Information */}
        <div className="text-center space-y-4 px-4">
          <p className="text-3xl font-bold">Rohan Prakasan</p>
          <p className="text-xl font-medium">
            MERN Developer <br /> CP Enthusiast
          </p>
          <p className="text-lg">Contact: work.rohanprakasan@gmail.com</p>
          <br />
          <a
            href="https://www.linkedin.com/in/rohan-prakasan-5579b425a/"
            className="text-lg text-blue-400 underline"
          >
            LinkedIn
          </a>
          <br />
          <a
            href="https://www.codechef.com/users/rxhanggs"
            className="text-lg text-blue-400 underline"
          >
            CodeChef
          </a>
          <br />
          <a
            href="https://leetcode.com/u/rxhanggs"
            className="text-lg text-blue-400 underline"
          >
            Leetcode
          </a>
          <br />
          <a
            href="https://codeforces.com/profile/rxhanggs"
            className="text-lg text-blue-400 underline"
          >
            Codeforces
          </a>
          <p className="font-bold text-2xl mt-4">
            Third Year Undergrad at SIES - Graduate School of Technology.
          </p>
          <p className="text-lg">
            Keen interest in Development and Problem Solving.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 h-full overflow-y-auto bg-black p-8 space-y-8">
        <TechStack />
        <Projects />
        <Profiles />
      </div>
    </div>
  );
};

export default HomePage;
