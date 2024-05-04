import React from "react";
import { TypeAnimation } from "react-type-animation";

const HomePage = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center text-white">
        <div className="w-[250px] h-[250px] rounded-full overflow-hidden">
          <img
            src="src\assets\portfolio.jpg"
            alt="lolo"
            className="w-full h-full object-cover"
          />
        </div>
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed once, initially
            "I'm Rohan Prakasan, an undergraduate student at SIES Graduate School of Technology.",
            1000,
            "I thrive on the excitement of discovering new tech and crafting immersive digital experiences",
            1000,
            "Whether it's coding elegant UIs or developing resilient backend solutions, count me in for pushing boundaries.",
            1000,
            "Let's join forces to push the limits of what's achievable in the digital realm!",
            1000,
          ]}
          speed={65}
          style={{ fontSize: "1.7em" }}
          repeat={Infinity}
        />
      </div>
    </>
  );
};

export default HomePage;
