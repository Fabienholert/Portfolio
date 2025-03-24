import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import "./Filtre.scss";

function Filtre({ categories, onFilterChange }) {
  const [activeCategory, setActiveCategory] = useState("tout");

  useEffect(() => {}, [categories]);

  const handleFilterClick = (category) => {
    setActiveCategory(category);
    onFilterChange(category);
  };

  return (
    <div className="filtre-container">
      {categories.map((category) => (
        <button
          key={category}
          className={`filtre-button ${
            activeCategory === category ? "active" : ""
          }`}
          onClick={() => handleFilterClick(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

Filtre.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  onFilterChange: PropTypes.func.isRequired,
};

export default Filtre;
