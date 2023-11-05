import Navbar from "./components/Navbar";
import "./App.css";
import HeroSection from "./components/HeroSection";
import UbytovaniInfo from "./components/UbytovaniInfo";
import FloorPlan from "./components/FloorPlan";
import LokaceComponent from "./components/Lokace";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import PopisUbytovani from "./components/PopisUbytovani";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
function App() {
  const navigate = useNavigate();
  const { lang } = useParams();

  useEffect(() => {
    if (!lang) {
      navigate("/");
    }
  }, [lang, navigate]);
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <PopisUbytovani />
        <UbytovaniInfo />
        <FloorPlan />
        <LokaceComponent />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}

export default App;
