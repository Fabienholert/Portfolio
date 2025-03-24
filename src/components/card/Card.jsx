import PropTypes from "prop-types";
import React, { useState } from "react";
import Modal from "react-modal";
import "./card.scss";

function Card({ project, onCardClick }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    if (!modalIsOpen) {
      setModalIsOpen(true);
    }
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const { id, card, modal } = project;
  const { title, image, details } = card;
  const { description, tags } = details;
  const { title: modalTitle, content } = modal;
  const { context, challenge, rightColon } = content;
  const { links, technologies } = rightColon;

  return (
    <div className="card" onClick={openModal}>
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">{title}</div>
      <div className="card-overlay">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        <div className="card-tags">
          {tags.map((tag) => (
            <span key={tag} className="card-tag">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="react-modal"
        overlayClassName="react-modal-overlay"
        contentLabel={modalTitle}
      >
        <div className="react-modal-content">
          <button
            className="react-modal-close"
            onClick={closeModal}
            aria-label="Fermer la modale"
          >
            •
          </button>
          <h2>{modalTitle}</h2>
          <div className="modal-sextion">
            <h3>{context.title}</h3>
            <p>{context.description}</p>
          </div>
          <div className="modal-section">
            <h3>{challenge.title}</h3>
            <p>{challenge.description}</p>
          </div>
          <div className="modal-right">
            {links &&
              links.length > 0 &&
              links.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.text}
                </a>
              ))}
            {technologies && technologies.length > 0 && (
              <div className="technologies-list">
                {technologies.map((tech, index) => (
                  <img
                    key={index}
                    src={tech}
                    alt="tech"
                    className="technologies-item"
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </Modal>
    </div>
  );
}

Card.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.string.isRequired,
    card: PropTypes.shape({
      title: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      details: PropTypes.shape({
        description: PropTypes.string.isRequired,
        tags: PropTypes.arrayOf(PropTypes.string).isRequired,
      }).isRequired,
    }).isRequired,
    modal: PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.shape({
        context: PropTypes.shape({
          title: PropTypes.string.isRequired,
          description: PropTypes.string.isRequired,
        }).isRequired,
        challenge: PropTypes.shape({
          title: PropTypes.string.isRequired,
          description: PropTypes.string.isRequired,
        }).isRequired,
        rightColon: PropTypes.shape({
          links: PropTypes.arrayOf(
            PropTypes.shape({
              text: PropTypes.string.isRequired,
              href: PropTypes.string.isRequired,
            })
          ),
          technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
  onCardClick: PropTypes.func.isRequired,
};

export default Card;
