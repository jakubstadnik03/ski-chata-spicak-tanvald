import React from "react";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Navbar from "./components/Navbar";
import { Helmet, HelmetProvider } from "react-helmet-async";
const Galerie = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>
            Fotogalerie Ski Chaty Špičák Tanvald – Pohled na Tanvaldský Špičák
          </title>
          <meta
            name="description"
            content="Projděte si fotogalerii a objevte kouzlo Ski Chaty Špičák Tanvald a
        okolního krásného prostředí Tanvaldského Špičáku."
          />
        </Helmet>
      </HelmetProvider>

      <Navbar />
      <Gallery />
      <Footer />
    </>
  );
};

export default Galerie;
