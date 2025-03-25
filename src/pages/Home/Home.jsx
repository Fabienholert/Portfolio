import React, { useEffect, useState } from "react";
import Dev from "../../../public/images/dev.webp"; // Image de presentation
import Photo from "../../../public/images/moi.webp"; // Image banniere
import Competence from "../../components/competence/Competence";
import Formulaire from "../../components/formulaire/Formulaire";
import Projet from "../../components/projet/Projet";
import data from "../../divers/json/projets.json";
import "../../divers/variablesmixin/_mixins.scss";
import "../../divers/variablesmixin/_variables.scss";
import "./Home.scss";

export default function Home() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    setProjects(data);
  }, []);

  return (
    <div>
      <section id="accueil" className="home__banner">
        <div className="home__banner-image">
          <img src={Photo} alt="image developpeur" className="home__dev" />
        </div>
        <div className="home__banner-text">
          <h1 className="home__nom">
            Bienvenue, je suis Fabien Holert, Développeur Web
          </h1>
          <a href="#mes_projets" className="home__button">
            Mes projets
          </a>
        </div>
      </section>
      <section id="presentation" className="home__presentation">
        <h2 className="home__presentation-titre">Présentation</h2>
        <div className="home__presentation-container">
          <div className="home__presentation-photo">
            <img src={Dev} alt="photo de moi" className="home__photo" />
          </div>
          <div className="home__presentation-text">
            <p>
              Je m'appelle Fabien Holert, j'ai 40 ans et je suis passionné par
              le développement web. J'ai décidé de me reconvertir dans ce
              domaine et j'ai commencé une formation chez OpenClassrooms dans ce
              but. J'ai déjà acquis des compétences en HTML, CSS, Javascript,
              React et Node.js pour devenir un développeur web.
            </p>
          </div>
        </div>
      </section>
      <section id="competences" className="home__competence">
        <h2 className="home__competence-titre">Mes compétences</h2>
        <Competence />
      </section>
      <section id="mes_projets" className="home__projet">
        <h2 className="home__projet-titre">Mes projets</h2>
        <Projet projects={projects} />
      </section>
      <section id="contact" className="home__contact">
        <h2 className="home__contact-titre">Contactez-moi</h2>
        <Formulaire />
      </section>
    </div>
  );
}
