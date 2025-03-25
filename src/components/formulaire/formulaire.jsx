import React, { useState } from "react";
import "./formulaire.scss";
function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleChangeName = (event) => {
    setName(event.target.value);
  };
  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleChangeMessage = (event) => {
    setMessage(event.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = { name: name, email: email, message: message };
    try {
      const response = await fetch("https://formspree.io/f/xanejdlw", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log("Message envoyé avec succès !");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        console.error("Erreur lors de l'envoi du message:", response.status);
      }
    } catch (error) {
      console.error("Erreur réseau:", error);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Nom:</label>
        <input type="text" id="name" value={name} onChange={handleChangeName} />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleChangeEmail}
        />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea id="message" value={message} onChange={handleChangeMessage} />
      </div>
      <button type="submit">Envoyer</button>
    </form>
  );
}
export default ContactForm;
