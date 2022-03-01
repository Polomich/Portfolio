import React from "react";
import { NavLink, NavTwo, NavLinkTwo } from "./NavBarElems";

const About = () => {
  return (
    <section id="about">
      <div className="container h-max mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="bg-blue px-5 py-10 lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Michelle Polonsky
            <br className="hidden lg:inline-block" /> Welcome to my Portfolio!
          </h1>
          <p className="mb-8 leading-relaxed bg-pink p-2">
            I'm a student at Dawson College intrested in all forms of art and the ways we can integrate them with technology.
          </p>
          <div className="text-left bg-white px-2 m-1">
            <p className="py-1">
              This website was made to compile together various projects ranging from web projects to traditional art. 
              It was made using CSS, HTML, Javascript, Tailwind, and React by combining different tutorials.
            </p>
            <p className="py-1">This portfolio owes thanks to:
              <ul className="list-disc px-4">
                <li><a href="https://www.freecodecamp.org/news/build-portfolio-website-react/">Free Code Camp</a> for the structure and deployment tutorial</li>
                <li><a href="https://tailwindcss.com/">Tailwind CSS</a> and <a href="https://styled-components.com/">React Styled Components</a> for the styling</li>
                <li><a href="https://coolors.co/">Coolors.co</a> for the color palette</li>
              </ul>
            </p>
          </div>
          <NavTwo>
            <NavLinkTwo to='/projects' activeStyle>
              See my digital work
            </NavLinkTwo>
          </NavTwo>
          <NavTwo>
            <NavLinkTwo to='/projects' activeStyle>
              See my artwork
            </NavLinkTwo>
          </NavTwo>
        </div>
        <div className="m-2 lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded-md"
            alt="hero"
            src="./pink-tech.jpg"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
