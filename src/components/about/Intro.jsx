import React from "react";

const Intro = () => {
  const introContent = {
    image: "assets/img/slider/RD.jpg",
    name: "Rémi Dubar",
    designation: "Web Developer",
    text: (
      <>
        <p>
        Je m'appelle Rémi Dubar et je suis développeur web. <br /> 
        Ayant suivi la formation d'intégrateur web d'OpenClassrooms, je dispose de toutes les capacités permettant de créer le site web qu'il vous faut !
         <br /> Je serai capable de créer un projet via différentes technologies que je mentionne ci-dessous. Pour me décrire, je suis à l'écoute, déterminé et organisé dans mon travail. 
        <br /> Je vous laisse apprécier les différents projets que j'ai pu concevoir lors de mon parcours.
        </p>
    
      </>
    ),
  };

  return (
    <>
      <div className="top_author_image">
        <img src={introContent.image} alt="about" />
      </div>
      <div className="about_title">
        <h3>{introContent.name}</h3>
        <span>{introContent.designation}</span>
      </div>
      <div className="about_text">{introContent.text}</div>
    </>
  );
};

export default Intro;
