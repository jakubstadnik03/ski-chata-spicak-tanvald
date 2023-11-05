import React, { useState } from "react";
import { Container, Row, Col, Modal, Carousel, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../CottageGallery.css"; // Importing custom styles
import imageData from "../data/images.json"; // Assuming the JSON file is named images.json and is stored under data folder
import { useTranslation } from "react-i18next";

const CottageGallery = () => {
  const { t, i18n } = useTranslation();
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState({
    category: "",
    index: 0,
  });

  const currentLanguage = i18n.language; // Get current language
  const data = imageData[currentLanguage] || imageData.cs; // Default to English if undefined

  const openModal = (category, index) => {
    setSelectedImage({ category, index });
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);

  return (
    <main>
      <Container className="cottage-gallery">
        <h1 className="mb-5 text-center">{t("gallery.title")}</h1>

        {Object.entries(data).map(([category, photos], categoryIndex) => (
          <div key={categoryIndex} className="mb-5">
            <h2 className="mb-3">{category}</h2>
            <Row>
              {photos.map((photo, index) => (
                <Col md={4} sm={6} xs={12} className="mb-3" key={index}>
                  <Card
                    className="gallery-card"
                    onClick={() => openModal(category, index)}
                  >
                    <Card.Img variant="top" src={`/img/gallery/${photo.img}`} />
                    <Card.Body>
                      <Card.Text>{photo.desc}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        ))}

        <Modal
          size="lg"
          show={showModal}
          onHide={closeModal}
          centered
          dialogClassName="custom-modal"
        >
          <Modal.Body>
            {data[selectedImage.category] && (
              <Carousel defaultActiveIndex={selectedImage.index}>
                {data[selectedImage.category].map((photo, index) => (
                  <Carousel.Item key={index}>
                    <img
                      className="d-block w-100"
                      src={`/img/gallery/${photo.img}`}
                      alt={photo.desc}
                    />
                    <Carousel.Caption>
                      <p>{photo.desc}</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                ))}
              </Carousel>
            )}
          </Modal.Body>
        </Modal>
      </Container>
    </main>
  );
};

export default CottageGallery;
