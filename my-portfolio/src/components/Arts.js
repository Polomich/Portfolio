import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { arts } from "../data";

export default function Arts() {
  return (
    <section id="arts" className="body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="bg-dark-blue p-5 sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Art I've made
          </h1> 
        </div>
        <div className="flex flex-wrap m-4">
          {arts.map((project) => (
            <section
              key={project.image}
              className="bg-dark-blue p-4 sm:w-1/2 w-100">
              <div className="flex relative">
                <div className="float-right h-1/4 w-11/12">
                  <img
                    alt="gallery"
                    className="w-full h-full"
                    src={project.image}
                  />
                </div>
                <div className="float-right m-auto relative z-10 w-full">
                  <div className="m-auto w-1/2">
                    <h2 className="bg-white p-1 tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                      {project.subtitle}
                    </h2>
                    <h1 className="bg-dark-pink p-1 title-font text-lg font-medium text-white mb-3">
                      {project.title}
                    </h1>
                    <p className="bg-white p-1 leading-relaxed">{project.description}</p>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}