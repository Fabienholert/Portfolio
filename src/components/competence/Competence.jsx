import React from "react";
import competencesData from "../../divers/json/competences.json";

export default function Competence() {
  return (
    <div className="competence__container">
      <table>
        <thead>
          <tr>
            {Object.keys(competencesData.competences).map((category) => (
              <th key={category}>{category}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {Object.keys(competencesData.competences).map((category) => (
              <td key={category}>
                <ul style={{ listStyleType: "none" }}>
                  {" "}
                  {/* ADDED: Remove bullets */}
                  {competencesData.competences[category]?.technologie.map(
                    (tech, index) => (
                      <li key={index}>
                        <img src={tech.image} alt={tech.name} />
                      </li>
                    )
                  )}
                </ul>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
