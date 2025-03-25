import { useEffect } from "react";
import Modal from "react-modal";
import { Outlet } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
export default function Layout() {
  useEffect(() => {
    Modal.setAppElement("#accueil");
  }, []);
  return (
    <>
      <Header />
      <main>
        <Outlet />
        {}
      </main>
      <Footer />
    </>
  );
}
