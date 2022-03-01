import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="bg-dark-blue p-5 sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Apps I've Built
          </h1>
          <p className="bg-pink p-3">
            <h2>All documentation and description can be found on the respective GitHub pages of the projects.
              <br/> (Except for this portfolio. The description can be found in the about page.)
            </h2>
          </p>
        </div>
        <div className="flex flex-wrap m-4">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className="bg-dark-blue p-4 sm:w-1/2 w-100">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={project.image}
                />
                <div className="m-auto px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <div className="m-auto w-1/2">
                    <h2 className="bg-white p-1 tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                      {project.subtitle}
                    </h2>
                    <h1 className="bg-dark-pink p-1 title-font text-lg font-medium text-white mb-3">
                      {project.title}
                    </h1>
                    <p className="bg-white leading-relaxed">{project.description}</p>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}