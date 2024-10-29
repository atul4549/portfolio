import skils from "../assets/skils.json";

export const Skill = () => {
  // Helper function to render skill cards
  const renderSkills = (skillsArray:any) => {
    return skillsArray.map((skill:any, index:any) => (
      <div className="skill" key={index}>
        {/* <img src={skill.icon} alt={skill.name} /> */}
        <h1>{skill.name}</h1>
      </div>
    ));
  };

  return (
    <main className="skills" id="skills">
      <section>{renderSkills(skils.slice(0, 6))}</section>
      <section>{renderSkills(skils.slice(6, 13))}</section>
      <section>
        <div className="skill">
          <h1>Typescript</h1>
        </div>
        <div className="skill">
          <h1>Scss</h1>
        </div>
        <div className="skill">
          <h1>Tsilwind</h1>
        </div>
      </section>
    </main>
  );
};
