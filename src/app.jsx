// src/App.jsx
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Home from "./pages/Home.jsx";              // About only
import ResumePage from "./pages/ResumePage.jsx";
import PortfolioPage from "./pages/PortfolioPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";

export default function App() {
  const location = useLocation();

  return (
    <>
      <Navbar />

      {/* Page transition wrapper */}
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="pb-24"
        >
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/resume" element={<ResumePage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </motion.main>
      </AnimatePresence>

      <Footer />
    </>
  );
}
