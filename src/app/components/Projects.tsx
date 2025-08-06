import React from "react";
import { projects } from "@/data";
import ProjectCard from "./ProjectCard";

const ProjectList = () => {
  return (
    <section className="px-4 py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-black">
          Proyectos Destacados
        </h2>
        <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
          Cada desafío me permitió explorar distintas herramientas, patrones y
          enfoques del desarrollo web moderno.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              imageUrl=""
              title={project.title}
              description={project.description}
              href={project.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectList;
