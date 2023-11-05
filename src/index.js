import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Galerie from "./Galerie";
import Navstivit from "./Navstivit";
import PlaceDetails from "./PlaceDetails";
import "./i18n"; // Ensure you have the correct i18n setup.

const rootElement = document.getElementById("root");
const root = createRoot(rootElement); // Create a root.

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/:lang" element={<App />} />
        <Route path="/:lang/fotogalerie" element={<Galerie />} />
        <Route path="/fotogalerie" element={<Galerie />} />
        <Route path="/:lang/kam-na-vylet" element={<Navstivit />} />
        <Route path="/kam-na-vylet" element={<Navstivit />} />
        <Route path="/:lang/mista/:placeSlug" element={<PlaceDetails />} />
        <Route path="/mista/:placeSlug" element={<PlaceDetails />} />
        {/* Add other routes with language prefix as needed */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
