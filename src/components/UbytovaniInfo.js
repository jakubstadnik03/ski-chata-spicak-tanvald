import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next"; // import useTranslation hook

const UbytovaniInfo = () => {
  const { t } = useTranslation(); // initialize the translation function

  return (
    <section style={{ backgroundColor: "black" }}>
      <Container className="mt-5" style={{ color: "#FFFFFF" }}>
        <h2 className="max-width title-black title mb-lg-5 mb-3 pt-lg-5 pt-3">
          {t("accommodationInfo.title")}{" "}
          {/* Use the t function to get translated text */}
        </h2>
        <Row>
          <Col md={4} className="mb-4">
            <div className="p-4 border info-col h-100">
              <h3 className="text-center mb-lg-4 mb-2 ">
                {t("accommodationInfo.interiorHeader")}
              </h3>
              <ul>
                <h4 className="mb-0">{t("accommodationInfo.roomsTitle")}</h4>
                {t("accommodationInfo.roomsList", { returnObjects: true }).map(
                  (item, index) => (
                    <li key={index}>{item}</li>
                  )
                )}
                <h4 className="mb-0">{t("accommodationInfo.otherTitle")}</h4>
                {t("accommodationInfo.otherList", { returnObjects: true }).map(
                  (item, index) => (
                    <li key={index}>{item}</li>
                  )
                )}
              </ul>
            </div>
          </Col>
          <Col md={4} className="mb-4">
            <div className="p-4 border info-col h-100">
              <h3 className="text-center mb-4">
                {t("accommodationInfo.exteriorHeader")}
              </h3>
              <ul>
                {t("accommodationInfo.exteriorList", {
                  returnObjects: true,
                }).map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </Col>
          <Col md={4} className="mb-4">
            <div className="p-4 border info-col h-100">
              <h3 className="text-center mb-4">
                {t("accommodationInfo.generalHeader")}
              </h3>
              <ul>
                {t("accommodationInfo.generalList", {
                  returnObjects: true,
                }).map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default UbytovaniInfo;
