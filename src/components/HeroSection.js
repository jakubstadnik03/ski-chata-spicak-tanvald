import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import { useTranslation } from "react-i18next"; // Import the hook
import { HashLink } from "react-router-hash-link";
const HeroSection = () => {
  const [index, setIndex] = useState(0);
  const { t } = useTranslation(); // Initialize the translation hook

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  // Sample data for carousel items
  const carouselItems = [
    {
      imgSrc: "/img/1697813233498.jpeg",
    },
    {
      imgSrc: "/img/1697813100282.jpeg",
    },
    {
      imgSrc: "/img/1697813100278.jpeg",
    },
    {
      imgSrc: "/img/FB_IMG_1697812283144.jpg",
    },
  ];

  return (
    <div className="hero-section">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {carouselItems.map((item, idx) => (
          <Carousel.Item key={idx}>
            <img
              className="d-block w-100"
              src={item.imgSrc}
              alt={t("hero.carouselAlt", { index: idx })} // Use the translation hook
            />
          </Carousel.Item>
        ))}
      </Carousel>
      <div className="hero-content-box">
        <h1 className="mb-3 fs-3 fs-md-4">{t("hero.title")}</h1>
        <h2 className="mb-2 fs-4 fs-md-5">{t("hero.subtitle")}</h2>
        <p className="fs-6 fs-md-7">{t("hero.description")}</p>
        <p className="uppercase" style={{ fontSize: "15px" }}>
          {t("hero.callToAction")}
        </p>
      </div>
      <HashLink to="#ubytovani">
        <img
          src="/svg/icon-down.svg"
          alt={t("hero.scrollDown")}
          className="icon-down"
        />
      </HashLink>
    </div>
  );
};

export default HeroSection;
