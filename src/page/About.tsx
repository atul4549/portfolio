import "../App.css";
import at from "../assets/at.png";
export const About = () => {
  return (
    <main className="about" id="about">
      <div className="about_img">
        <img src={at} />
      </div>
      <div className="about_content">
        {/* <h2>
          About <span>Me</span>
        </h2> */}
        <h3>MERN stack developer</h3>
        <p>
          I am a web developer. My focus is on designing and developing websites
          that look great and work well. I am skilled in a range of programming
          languages and platforms, including HTML, CSS, JavaScript, etc. My goal
          is to create websites that are both visually appealing and easy to
          use. If you're looking for a web developer, please feel free to get in
          touch with me.
        </p>
        <a
          href="https://www.linkedin.com/in/atul-himanshu-4a9255306?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          className="cv"
        >
          Read more
        </a>
      </div>
    </main>
  );
};
