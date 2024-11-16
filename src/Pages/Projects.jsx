import React from "react";

const projectData = [
  {
    name: "BizNiche",
    image: "https://i.postimg.cc/KjHc9fH9/Biz-Niche-SS.png",
    description:
      "An e-commerce platform empowering local businesses with AI-powered product recommendations and category detection.",
  },
  {
    name: "Course Session Plan",
    image: "https://i.postimg.cc/Fz7NJcH0/Session-Plan-Management.png",
    description:
      "A tool for instructors to create, manage, and share detailed course session plans effectively.",
  },
  {
    name: "Career GPT",
    image: "https://i.postimg.cc/WpH2c958/Gemini-Project.png",
    description:
      "An AI-driven platform offering personalized career guidance based on user profiles and preferences.",
  },
];

const Projects = () => {
  return (
    <div className="text-white mt-12 px-6 sm:px-10 lg:px-20">
      <h1 className="text-4xl sm:text-5xl font-extrabold mb-12 text-center bg-transparent">
        Projects
      </h1>
      <div className="space-y-12 bg-transparent">
        {projectData.map((project, index) => (
          <div
            key={index}
            className="flex flex-col lg:flex-row items-center rounded-xl shadow-lg p-6 lg:p-10 bg-transparent hover:shadow-2xl transition duration-300 hover:bg-gray-700"
          >
            {/* Project Image */}
            <div className="w-full lg:w-2/5 flex items-center justify-center mb-6 lg:mb-0 bg-transparent">
              <img
                src={project.image}
                alt={project.name}
                className="w-full max-w-xs sm:max-w-md lg:max-w-lg h-auto object-contain rounded-lg bg-transparent"
              />
            </div>
            {/* Project Details */}
            <div className="w-full lg:w-3/5 text-center lg:text-left space-y-4 sm:space-y-6 bg-transparent lg:pl-10">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-transparent">
                {project.name}
              </h2>
              <p className="text-lg sm:text-xl lg:text-2xl bg-transparent">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
