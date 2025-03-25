import React from "react";
import MonLogo from "../../../public/images/monLogo.png";
import "./header.scss";

export default function Header() {
  return (
    <header className="header">
      <nav className="header__nav">
        <ul className="header__liste">
          <li className="header__item">
            <a href="#accueil" className="header__lien">
              Accueil
            </a>
          </li>
          <li className="header__item">
            <a href="#presentation" className="header__lien">
              Présentation
            </a>
          </li>
          <li className="header__item">
            <a href="#competences" className="header__lien">
              Compétences
            </a>
          </li>
          <li className="header__item">
            <a href="#mes_projets" className="header__lien">
              Projets
            </a>
          </li>
          <li className="header__item">
            <a href="#contact" className="header__lien">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <img src={MonLogo} alt="mon logo " className="header__monLogo" />
    </header>
  );
}
