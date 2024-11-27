"use client";
import { useState } from "react";
import { motion, } from "framer-motion";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image"
import nexoimage from '../../../public/images/Nexo Imagen.jpg'

const projects = [
  {
    title: "Nexo TV",
    description:
      "Nexo TV es una plataforma web que brinda acceso a una amplia gama de películas y series. Los usuarios pueden disfrutar de contenido gratuito o elegir una suscripción premium para una biblioteca ampliada de contenido exclusivo.",
    image: {nexoimage},
    technologies: ["React", "Node.js", "Next.js", "Docker", "Stripe", "Tailwind CSS", "GraphQL", "Typescript" ],
    liveUrl: "https://example-ecommerce.com",
    githubUrl: "https://github.com/yourusername/ecommerce-platform",
  },
  {
    title: "IStore App",
    description:
      "IStore es una aplicación de e-commerce que permite a los usuarios navegar, filtrar y comprar productos de forma sencilla. La aplicación está desarrollada con Next.js, Tailwind CSS, y GraphQL, integrando funcionalidades avanzadas de filtrado y búsqueda para mejorar la experiencia del usuario.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Next.js", "Typescript", "Tailwind CSS", "Express.js"],
    liveUrl: "https://example-taskmanager.com",
    githubUrl: "https://github.com/MauricioTognoli/IStore",
  }
];

export default function Component() {
  const [currentProject, setCurrentProject] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextProject = () => {
    setDirection(1);
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setDirection(-1);
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const project = projects[currentProject];

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-5xl bg-gray-800 text-white overflow-hidden rounded-3xl shadow-2xl">
        <div className="p-8 lg:p-12 relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600 rounded-full filter blur-3xl opacity-20 translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600 rounded-full filter blur-3xl opacity-20 -translate-x-1/2 translate-y-1/2"></div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative mb-12"
          >
            <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
              Proyectos Destacados
            </h1>
            <div className="h-1 w-32 bg-gradient-to-r from-purple-500 to-blue-500"></div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-300 mb-12"
          >
            Explora algunos de mis trabajos recientes y las tecnologías que he utilizado:
          </motion.p>

          <div className="relative overflow-hidden rounded-xl">
              <motion.div
                key={currentProject}
                custom={direction}
                initial={{ opacity: 0, x: direction > 0 ? 300 : -300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction < 0 ? 300 : -300 }}
                transition={{ type: "spring", stiffness: 250, damping: 30 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                <div>
                  <Image
                    src={nexoimage}
                    alt={`${project.title} preview`}
                    height={400}
                    width={600}
                    className="w-full h-64 object-cover rounded-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold mb-4">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mb-6">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <div key={tech} className="bg-gray-700 text-white">
                          {tech}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <button
                      className=" text-purple-400 border-purple-400 hover:bg-purple-400 hover:text-gray-900"
                      onClick={() => window.open(project.liveUrl, "_blank")}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </button>
                    <button
                      className="text-blue-400 border-blue-400 hover:bg-blue-400 hover:text-gray-900"
                      onClick={() => window.open(project.githubUrl, "_blank")}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </button>
                  </div>
                </div>
              </motion.div>
            <button
              className="absolute left-2 top-1/2 transform-translate-y-1/2 bg-gray-800 bg-opacity-50 hover:bg-opacity-75"
              onClick={prevProject}
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 hover:bg-opacity-75"
              onClick={nextProject}
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-16 text-center"
          >
            <p className="text-lg text-gray-300 mb-4">
            Estos proyectos muestran mis habilidades en desarrollo full-stack, diseño UI/UX y resolución de problemas.
            </p>
            {/* <div className="text-purple-400 border-purple-400 hover:bg-purple-400 hover:text-gray-900 transition-colors duration-300">
              Always Creating
            </div> */}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
