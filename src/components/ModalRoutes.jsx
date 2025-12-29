import { Routes, Route, useNavigate } from "react-router-dom";
import Modal from "./Modal";

import About from "../pages/About";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";

export default function ModalRoutes() {
  const navigate = useNavigate();

  const closeModal = () => navigate("/");

  return (
    <Routes>
      <Route
        path="/about"
        element={
          <Modal onClose={closeModal}>
            <About />
          </Modal>
        }
      />
      <Route
        path="/projects"
        element={
          <Modal onClose={closeModal}>
            <Projects />
          </Modal>
        }
      />
      <Route
        path="/contact"
        element={
          <Modal onClose={closeModal}>
            <Contact />
          </Modal>
        }
      />
    </Routes>
  );
}
