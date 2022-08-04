import React, { useState } from "react";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const modeDark = () => {
    const mode = document.querySelector(".mode");
    const body = document.querySelector("body");
    mode.classList.toggle("dark");
    body.classList.toggle("dark");
  };

  return (
    <nav className="navbar">
      <ul className={isActive ? "links active" : "links"}>
        <li>
          <a href="#" onClick={() => setIsActive(false)}>
            Home
          </a>
        </li>
        <li>
          <a href="#skill" onClick={() => setIsActive(false)}>
            Experience and skills
          </a>
        </li>
        <li>
          <a href="#portfolio" onClick={() => setIsActive(false)}>
            Portfolio
          </a>
        </li>
        {/* <li>
          <a href="#">Contact</a>
        </li> */}
      </ul>
      <div className="mode" onClick={() => modeDark()}>
        <i className="bx bx-sun bx-sm"></i>
        <i className="bx bx-moon bx-sm"></i>
      </div>
      <div
        className={isActive ? "toggle active" : "toggle"}
        onClick={() => setIsActive(!isActive)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
