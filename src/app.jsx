import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";            // About only
import ResumePage from "./pages/ResumePage.jsx";
import PortfolioPage from "./pages/PortfolioPage.jsx";
import ContactPage from "./pages/ContactPage.jsx"; // <-- add this
export default function App() {
  return (
    <>
      <Navbar />
      <main className="pb-24">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/contact" element={<ContactPage />} /> {/* <-- add this */}
        </Routes>
      </main>
      <Footer />
    </>
  );
}
