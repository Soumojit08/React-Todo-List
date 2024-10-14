import React from "react";
import "@fontsource/roboto/400.css";

const Navbar = () => {
  return (
    <div className="font-roboto">
      <nav className="flex items-center justify-between py-4 px-8">
        <div id="logo" className="text-xl font-bold text-deeporange">
          ToDo-List
        </div>
        <ul className="flex gap-10">
          <a href="#">
            <li>Home</li>
          </a>
          <a href="https://github.com/Soumojit08" target="_blank">
            <li>About Me</li>
          </a>
          <a
            href="https://www.linkedin.com/in/soumojit-banerjee-729080281/"
            target="_blank"
          >
            <li>Contact Me</li>
          </a>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
