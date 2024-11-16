import React from "react";

const skills = [
  "React",
  "Node.js",
  "Express.js",
  "MongoDB",
  "PostgreSQL",
  "MySQL",
  "Prisma",
  "C++",
];

const demoskills = {
  React: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
  "Node.js": "https://cdn.worldvectorlogo.com/logos/nodejs-1.svg",
  "Express.js":
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnDneBGnQL7E9hZDwztRO1GfQcCj1FqRrhBw&s",
  MongoDB: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg",
  PostgreSQL: "https://cdn.worldvectorlogo.com/logos/postgresql.svg",
  MySQL: "https://cdn.worldvectorlogo.com/logos/mysql-logo-pure.svg",
  Prisma:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3eGfRrGq0iRlsBrumJqeUXxK747tpEpaCuA&s",
  "C++": "https://cdn.worldvectorlogo.com/logos/c.svg",
};

const TechStack = () => {
  return (
    <div className="text-white space-y-6">
      <h1 className="text-3xl font-bold mb-4">Tech Stack</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center rounded-lg shadow-md p-4 hover:bg-gray-700 transition duration-300"
          >
            <img
              src={demoskills[skill]}
              alt={skill}
              className="w-16 h-16 mb-3 object-contain bg-transparent"
            />
            <p className="text-lg font-medium bg-transparent">{skill}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
