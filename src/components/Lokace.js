import { useTranslation } from "react-i18next";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const LokaceComponent = () => {
  const { t, i18n } = useTranslation();
  const { lang } = useParams();
  const [currentLang, setCurrentLang] = useState(i18n.language);
  useEffect(() => {
    const language = lang || "cs";
    setCurrentLang(language);
    if (i18n.language !== language) {
      i18n.changeLanguage(language);
    }
  }, [lang, i18n]);

  const LocalizedLink = ({ to, children, ...props }) => {
    const localizedPath = currentLang !== "cs" ? `/${currentLang}${to}` : to;
    return (
      <Link to={localizedPath} {...props}>
        {children}
      </Link>
    );
  };

  return (
    <section style={{ backgroundColor: "black" }} className="p-md-5">
      <div
        className="container max-width-m"
        style={{ color: "white", paddingBottom: "10px" }}
      >
        <h2 className="text-center max-width title-black title mb-4">
          {t("locationComponent.title")}
        </h2>
        <div className="d-md-flex justify-content-center">
          <div className="mx-5">
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2524.2876388672544!2d15.280924976849418!3d50.751699971651185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470ecbfa953043bb%3A0xf0a289b9720408c4!2zU2tpIGNoYXRhIMWgcGnEjcOhayBUYW52YWxk!5e0!3m2!1scs!2scz!4v1698683571287!5m2!1scs!2scz"
              width="600"
              style={{ border: "2px solid white", height: "400px" }}
              loading="lazy"
              className="img-fluid rounded"
            ></iframe>
          </div>
          <div style={{ maxWidth: "600px" }} className="ml-5">
            <h3>{t("locationComponent.address")}</h3>
            <p>{t("locationComponent.addressDetails")}</p>
            <p style={{ maxWidth: "400px" }}>
              {t("locationComponent.description")}
            </p>
            <LocalizedLink
              to="/kam-na-vylet"
              className="rezervovat-btn text-white"
              style={{ padding: "10px" }}
            >
              {t("locationComponent.visitPlacesButton")}
            </LocalizedLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LokaceComponent;
