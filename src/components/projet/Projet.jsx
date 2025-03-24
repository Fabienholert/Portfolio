import React, { useEffect, useState } from "react";
import Card from "../card/Card";
import Filtre from "../filtre/Filtre";
import "./Projet.scss";

function Projet({ projects }) {
  // État pour stocker les projets filtrés
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [selectedProjectId, setSelectedProjectId] = useState(null); // État pour l'ID du projet sélectionné

  // Extraire les catégories uniques des projets (avec "tout")
  const allCategories = projects.map((project) => project.categorie);
  const uniqueCategoriesSet = new Set(allCategories); // Utiliser Set pour enlever les doublons
  uniqueCategoriesSet.delete("tout"); // Supprimer "tout" s'il existe déjà (pour l'ajouter au début)
  const uniqueCategories = ["tout", ...uniqueCategoriesSet]; // Ajouter "tout" au début

  // Fonction pour gérer le changement de filtre
  const handleFilterChange = (category) => {
    if (category === "tout") {
      setFilteredProjects(projects); // Afficher tous les projets
    } else {
      const newFilteredProjects = projects.filter(
        (project) => project.categorie === category
      );
      setFilteredProjects(newFilteredProjects);
    }
  };

  // Fonction pour gérer le clic sur une carte
  const handleCardClick = (projectId) => {
    setSelectedProjectId(projectId);
    // Vous pouvez maintenant utiliser projectId pour afficher une modale ou naviguer vers une autre page
    console.log("Carte cliquée avec l'ID :", projectId);
  };

  useEffect(() => {
    // Ce hook useEffect s'exécutera chaque fois que projects change
    // C'est utile si vous chargez les projets de manière asynchrone (par exemple, depuis une API)
    setFilteredProjects(projects); // Initialiser les projets filtrés avec tous les projets
  }, [projects]);

  return (
    <div className="projet__container">
      <Filtre
        categories={uniqueCategories}
        onFilterChange={handleFilterChange}
      />
      <div className="card-list">
        {filteredProjects.map((project) => (
          <Card
            key={project.id}
            project={project}
            onCardClick={handleCardClick}
          />
        ))}
      </div>

      {/* Afficher une modale ou d'autres informations sur le projet sélectionné */}
      {selectedProjectId && (
        <div>
          {/* Contenu de la modale ou de la page de détails */}
          <h2>Détails du projet {selectedProjectId}</h2>
        </div>
      )}
    </div>
  );
}

export default Projet;
