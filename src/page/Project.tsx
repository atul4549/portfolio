export const Project = () => {
  // Array of project data
  const projects = [
    { name: "Ecommerce", imgSrc: "" },
    { name: "Music Player", imgSrc: "" },
    { name: "Chat App", imgSrc: "" },
    { name: "AI Chatbot", imgSrc: "" },
    { name: "Food App", imgSrc: "" },
  ];

  return (
    <main className="project" id="project">
      {projects.map((project, index) => (
        <div key={index}>
          {/* <img src={project.imgSrc} alt={project.name} /> */}
          <h3>{project.name}</h3>
        </div>
      ))}
    </main>
  );
};
