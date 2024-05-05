import React from "react";
import { SiCodingninjas } from "react-icons/si";
import { FaGithub } from "react-icons/fa";

const Nav = () => {
  return (
    <div className="flex mt-0 pt-5 text-white font-bold size-28 list-none">
      <li className="hover:scale-110 transition-transform mr-8">TechStack</li>
      <li className="hover:scale-110 transition-transform mr-8">Projects</li>
      <li className="mr-5">
        <SiCodingninjas className="hover:text-white" />
      </li>
      <li>
        <FaGithub className="hover:text-white" />
      </li>
    </div>
  );
};

export default Nav;
