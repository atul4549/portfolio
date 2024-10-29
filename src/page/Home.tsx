import { useEffect } from "react";
import Typed from "typed.js";
// import at from "../assets/at.png";
import { FaLinkedin, FaTelegram, FaXTwitter } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";

export const Home = () => {
  useEffect(() => {
    const typed = new Typed(".text", {
      strings: [
        "Frontend Developer",
        "Backend Developer",
        "Freelancer",
        "MERN Stack Developer",
      ],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);
  // const handleClick = () => {
  //   alert("The cv is not created yet");
  // };
  return (
    <main id="home" className="home">
      <section className="home_content">
        <h1>
          Hello, It's Me <span>Atul Himanshu</span>
        </h1>
        <div className="text_animation">
          <h3 className="text">Full Stack Developer</h3>
        </div>
        <p></p>
        <div className="social_media">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="linkedin" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaTelegram className="telegram" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <GrInstagram className="instagram" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaXTwitter className="twitter" />
          </a>
        </div>
        {/* <a href="#about" onClick={handleClick} className="cv"> */}
        <a href="#about" className="cv">
          More
        </a>
      </section>
      <section className="home_image">
        {/* <img src={at} alt="Profile" /> */}
      </section>
    </main>
  );
};
