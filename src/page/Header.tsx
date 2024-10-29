// import { useState } from "react";

// const Header = ({ handleComponentChange }: any) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };
//   const navLinks = document.querySelectorAll("#nav-list li a");

//   navLinks.forEach((link) => {
//     link.addEventListener("mouseover", () => {
//       console.log(`Hovered over ${link.textContent}`);
//     });

//     link.addEventListener("mouseout", () => {
//       console.log(`Stopped hovering over ${link.textContent}`);
//     });
//   });

//   return (
//     <nav>
//       <div className="navbar_logo">
//         <h2>Atul</h2>
//       </div>
//       <div className="navbar-toggle" onClick={toggleMenu}>
//         <span className="bar"></span>
//         <span className="bar"></span>
//         <span className="bar"></span>
//       </div>
//       <div className={`navbar-menu ${isOpen ? "open" : ""}`}>
//         <ul>
//           <li>
//             <a href="#">Home</a>
//           </li>
//           <li>
//             <a href="#about">About</a>
//           </li>
//           <li>
//             <a href="#contact">Contact</a>
//           </li>
//           <li>
//             <a href="#skills">Skill</a>
//           </li>
//           <li>
//             <a href="#project">Project</a>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Header;
// "use client";
export const Header = ({ handleComponentChange }: any) => {
  const menuItems = [
    { label: "Home", component: "home" },
    { label: "About", component: "about" },
    { label: "Contact", component: "contact" },
    { label: "Skill", component: "skill" },
    { label: "Project", component: "project" },
  ];

  return (
    <aside>
      <nav>
        <div className="logo">
          <div className="logo_img"></div>
          <p>Atul</p>
        </div>
        <hr />
        <ul>
          {menuItems.map((item, index) => (
            <div key={index}>
              <button onClick={() => handleComponentChange(item.component)}>
                {item.label}
              </button>
              <br />
            </div>
          ))}
        </ul>
      </nav>
    </aside>
  );
};
