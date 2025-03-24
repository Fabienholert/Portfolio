import { useEffect } from "react";
import Modal from "react-modal";
import { Outlet } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

export default function Layout() {
  useEffect(() => {
    Modal.setAppElement("#accueil"); // Configure Modal here, using the ID of the div in App.jsx
  }, []);
  return (
    <>
      <Header />
      <main>
        <Outlet /> {/* Les routes enfants seront affichées ici */}
      </main>
      <Footer />
    </>
  );
}
