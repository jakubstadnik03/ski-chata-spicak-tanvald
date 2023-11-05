import { React, useState } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Link } from "react-router-dom";
import { Card, Container, Row, Col } from "react-bootstrap";
import places from "./data/places.json";
import { useTranslation } from "react-i18next";

const Navstivit = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const [selectedImage, setSelectedImage] = useState({
    category: "",
    index: 0,
  }); // Get current language
  const data = places[currentLanguage] || places.cs; // Default to English if undefined
  return (
    <>
      <Navbar />

      <main>
        <h1 className="mb-3 text-center mt-2">{t("places.title")} </h1>
        <Container className="mt-5">
          <Row>
            {data.map((place) => (
              <Col md={4} className="mb-4" key={place.id}>
                <Link to={`/${currentLanguage}/mista/${place.id}`}>
                  <Card className="place-box h-100">
                    <Card.Img
                      variant="top"
                      src={`/img/mista/${place.shortImage}`}
                    />
                    <Card.Body>
                      <Card.Title>
                        <p className="place-link">{place.title}</p>
                      </Card.Title>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            ))}
          </Row>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default Navstivit;
