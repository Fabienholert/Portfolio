import React, { useEffect, useState } from "react";
import Card from "../card/Card";
import Filtre from "../filtre/Filtre";
import "./Projet.scss";
function Projet({ projects }) {
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const allCategories = projects.map((project) => project.categorie);
  const uniqueCategoriesSet = new Set(allCategories);
  uniqueCategoriesSet.delete("tout");
  const uniqueCategories = ["tout", ...uniqueCategoriesSet];
  const handleFilterChange = (category) => {
    if (category === "tout") {
      setFilteredProjects(projects);
    } else {
      const newFilteredProjects = projects.filter(
        (project) => project.categorie === category
      );
      setFilteredProjects(newFilteredProjects);
    }
  };
  const handleCardClick = (projectId) => {
    setSelectedProjectId(projectId);
    console.log("Carte cliquée avec l'ID :", projectId);
  };
  useEffect(() => {
    setFilteredProjects(projects);
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
      {}
      {selectedProjectId && (
        <div>
          {}
          <h2>Détails du projet{selectedProjectId}</h2>
        </div>
      )}
    </div>
  );
}
export default Projet;
