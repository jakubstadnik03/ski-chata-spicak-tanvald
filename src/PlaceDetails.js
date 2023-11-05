import React from "react";
import { useParams } from "react-router-dom";
import { Carousel, Container, Row, Col } from "react-bootstrap";
import places from "./data/places.json";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useTranslation } from "react-i18next"; // import useTranslation
import { Helmet, HelmetProvider } from "react-helmet-async";
const PlaceDetails = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language; // Get current language
  const data = places[currentLanguage] || places.cs; // Default to English if undefined
  const { placeSlug } = useParams();
  const place = data.find((p) => p.url === placeSlug);

  // Handle the case when a place is not found
  if (!place) {
    return <div>{t("placeNotFound")}</div>; // Translatable text
  }

  return (
    <div className="app-container">
      <HelmetProvider>
        <Helmet>
          <title>
            {t(place.title)} – Průvodce Aktivitami od Ski Chaty Špičák Tanvald
          </title>
        </Helmet>
      </HelmetProvider>
      <Navbar />
      <Container className="place-details mt-5 content-wrapper">
        <Row>
          <Col md={6}>
            <h1 className="mb-4">{t(place.title)}</h1>{" "}
            {/* Translatable title */}
            <p className="description-text">{t(place.description)}</p>{" "}
            {/* Translatable description */}
            <p className="address-text">
              <strong>{t("Address")}:</strong> {place.address}
            </p>
          </Col>
          <Col md={6}>
            <Carousel className="place-carousel">
              {place.images.map((img, index) => (
                <Carousel.Item key={index}>
                  <img
                    src={`/img/mista/${img}`} // Ensure the path is correct
                    alt={t("Image number", { number: index + 1 })} // Translatable alt text with dynamic content
                    className="d-block w-100 carousel-image"
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default PlaceDetails;
