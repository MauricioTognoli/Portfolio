'use client'
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const technologies = [
  {
    name: "React",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    category: "Frontend",
  },
  {
    name: "TypeScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    category: "Language",
  },
  {
    name: "JavaScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    category: "Language",
  },
  {
    name: "HTML5",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    category: "Frontend",
  },
  {
    name: "CSS3",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    category: "Frontend",
  },
  {
    name: "Node.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    category: "Backend",
  },
  {
    name: "Bootstrap",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    category: "Frontend",
  },
  {
    name: "Git",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    category: "Tool",
  },
  {
    name: "Next.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    category: "Frontend",
  },
  {
    name: "Tailwind",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    category: "Frontend",
  },
  {
    name: "Redux",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
    category: "Frontend",
  },
  {
    name: "MongoDB",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    category: "Cloud",
  },
  {
    name: "Express,js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    category: "Backend",
  },
  {
    name: "Docker",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    category: "Backend",
  },
  {
    name: "PostgreSQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    category: "Cloud",
  },
  {
    name: "Webpack",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg",
    category: "Tool",
  },
  {
    name: "GitHub",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    category: "Tool",
  },
  {
    name: "Vite",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg",
    category: "Tool",
  },
  {
    name: "npm",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
    category: "Tool",
  },
  {
    name: "Figma",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    category: "Tool",
  }
];

export default function Tecnologias() {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div  >
        <div className="p-8 lg:p-12 relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600 rounded-full filter blur-3xl opacity-20 translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600 rounded-full filter blur-3xl opacity-20 -translate-x-1/2 translate-y-1/2"></div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative mb-12"
          >
            <h1 className="text-5xl font-bold mb-4 bg-clip-text text-white">
  Mi stack de tecnologias
</h1>

            <div className="h-1 w-32 bg-gradient-to-r from-purple-500 to-blue-500"></div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-300 mb-12"
          >
            Explore las tecnologías que uso para dar vida a las ideas:
          </motion.p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="relative group"
                onMouseEnter={() => setHoveredTech(tech.name)}
                onMouseLeave={() => setHoveredTech(null)}
              >
                <div className="flex flex-col items-center justify-center p-4 rounded-xl transition-all duration-300 transform group-hover:scale-110">
                  <Image
                    src={tech.logo}
                    alt={`${tech.name} logo`}
                    width={16}
                    height={16}
                    className="w-16 h-16 mb-4 transition-transform duration-300"
                  />
                  <div className=" text-white">
                    {tech.name}
                  </div>
                </div>
                {hoveredTech === tech.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-3 py-1 rounded-full text-sm"
                  >
                    {tech.category}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-16 text-center"
          >
            <p className="text-lg text-gray-300 mb-4">
              Committed to continuous learning and staying ahead in the
              ever-evolving tech landscape.
            </p>
            <div
              className="text-purple-400 border-purple-400 hover:bg-purple-400 hover:text-gray-900 transition-colors duration-300"
            >
              Always Evolving
            </div>
          </motion.div> */}
        </div>
      </div>
    </div>
  );
}
