// ConfigModal.jsx
import { useEffect } from "react";
import Modal from "react-modal";

function ConfigModal() {
  useEffect(() => {
    try {
      Modal.setAppElement("#accueil");
    } catch (error) {
      console.error(
        "ConfigModal: Erreur lors de l'appel de Modal.setAppElement:",
        error
      );
    }
  }, []);

  return null;
}

export default ConfigModal;
