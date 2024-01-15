import React from "react";

const PersonalInfo = () => {
  const personalInfoContent = [
    {
      id: 1,
      colClass: "left",
      info: [
        {
          id: 1,
          name: "Birthday",
          content: "15.07.1990",
        },
        {
          id: 2,
          name: "Age",
          content: "33",
        },
        {
          id: 3,
          name: "Address",
          content: "Lille",
        },
        {
          id: 4,
          name: "Email",
          content: (
            <>
              <a href="mailto:rd.dubar@gmail.com">rd.dubar@gmail.com</a>
            </>
          ),
        },
        
      ],
    },
    {
      id: 2,
      colClass: "right",
      info: [
        {
          id: 1,
          name: "Nationality",
          content: "Française",
        },
        {
          id: 2,
          name: "Study",
          content: "OpenClassRooms",
        },
        {
          id: 3,
          name: "Degree",
          content: "BTS",
        },
        {
          id: 4,
          name: "Interest",
          content: "Jeux Vidéo",
        },
    
      ],
    },
  ];
  return (
    <>
      {personalInfoContent.map((item) => (
        <div className={item.colClass} key={item.id}>
          <div className="tokyo_tm_info">
            <ul>
              {item?.info?.map((value) => (
                <li key={value.id}>
                  <span>{value.name}:</span>
                  <span>{value.content}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};

export default PersonalInfo;
