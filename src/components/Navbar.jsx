import React from "react";
import "@fontsource/roboto/400.css";

const Navbar = () => {
  return (
    <div className="font-roboto">
      <nav className="flex items-center justify-between py-4 px-8">
        <div
          id="logo"
          className=" text-4xl font-bold text-orange-500 select-none"
        >
          ToDo-List
        </div>
        <ul className="flex gap-10">
          <a href="#">
            <li className="hover:text-deeporange">Home</li>
          </a>
          <a href="https://github.com/Soumojit08" target="_blank">
            <li className="hover:text-deeporange">About Me</li>
          </a>
          <a
            href="https://www.linkedin.com/in/soumojit-banerjee-729080281/"
            target="_blank"
          >
            <li className="hover:text-deeporange">Contact Me</li>
          </a>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
