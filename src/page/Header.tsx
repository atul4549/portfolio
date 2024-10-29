import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const navLinks = document.querySelectorAll("#nav-list li a");

  navLinks.forEach((link) => {
    link.addEventListener("mouseover", () => {
      console.log(`Hovered over ${link.textContent}`);
    });

    link.addEventListener("mouseout", () => {
      console.log(`Stopped hovering over ${link.textContent}`);
    });
  });

  return (
    <nav>
      <div className="navbar_logo">
        <h2>Atul</h2>
      </div>
      <div className="navbar-toggle" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <div className={`navbar-menu ${isOpen ? "open" : ""}`}>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="#skills">Skill</a>
          </li>
          <li>
            <a href="#project">Project</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
