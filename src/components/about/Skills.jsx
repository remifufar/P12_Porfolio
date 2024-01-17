import React from "react";

const Skills = () => {
  const skillsContent = [
    {
      id: 1,
      colClass: "left",
      title: "Programming Skills",
      progress: [
        {
          id: 1,
          skillName: "Html",
          skillValue: "90",
        },
        {
          id: 2,
          skillName: "Css",
          skillValue: "80",
        },
        {
          id: 3,
          skillName: "JaveScript",
          skillValue: "65",
        },
         {
          id: 4,
          skillName: "Sass",
          skillValue: "80",
        },
        {
          id: 5,
          skillName: "React",
          skillValue: "70",
        },
        {
          id: 6,
          skillName: "Rédux",
          skillValue: "55",
        },
        {
          id: 7,
          skillName: "VsCode",
          skillValue: "75",
        },
        {
          id: 8,
          skillName: "Swagger",
          skillValue: "50",
        },
      ],
    },
    
  ];
  return (
    <>
      {skillsContent.map((item) => (
        <div className={item.colClass} key={item.id}>
          <div className="tokyo_section_title">
            <h3>{item.title}</h3>
          </div>

          <div className="tokyo_progress">
            {item?.progress?.map((skill) => (
              <div
                className="progress_inner"
                data-value={item.skillValue}
                key={skill.id}
              >
                <span>
                  <span className="label">{skill?.skillName}</span>
                  <span className="number">{skill?.skillValue}%</span>
                </span>
                <div className="background">
                  <div className="bar">
                    <div
                      className="bar_in"
                      style={{ width: skill?.skillValue + "%" }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default Skills;
