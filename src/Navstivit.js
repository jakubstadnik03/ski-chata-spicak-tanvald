import { React } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Link } from "react-router-dom";
import { Card, Container, Row, Col } from "react-bootstrap";
import places from "./data/places.json";
import { useTranslation } from "react-i18next";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Navstivit = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const data = places[currentLanguage] || places.cs; // Default to English if undefined
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>
            Výlety v Okolí Tanvaldského Špičáku – Průvodce Aktivitami od Ski
            Chaty
          </title>
          <meta
            name="description"
            content="Objevte ty nejlepší výlety a aktivity v okolí Tanvaldského Špičáku s naším průvodcem od Ski Chaty Špičák Tanvald. Perfektní dobrodružství čeká!"
          />
        </Helmet>
      </HelmetProvider>
      <Navbar />

      <main>
        <h1 className="mb-3  mt-2 max-width max-width-m">
          {t("places.title")}
        </h1>
        <Container className="mt-5">
          <Row>
            {data.map((place) => (
              <Col md={4} className="mb-4" key={place.id}>
                <Link
                  to={
                    currentLanguage === "cs"
                      ? `/mista/${place.url}`
                      : `/${currentLanguage}/mista/${place.url}`
                  }
                >
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
