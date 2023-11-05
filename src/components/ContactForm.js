import React from "react";
import { useTranslation } from "react-i18next";

const ContactForm = () => {
  const { t } = useTranslation();

  return (
    <div
      className="contact-container"
      style={{ backgroundImage: "url(/img/1697813233498.jpeg)" }}
      id="kontakt"
    >
      <div className="overlay">
        <div className="title-black title flex-column align-items-center max-width">
          <h2>{t("contact.title")}</h2>
          <p style={{ textTransform: "none" }}>{t("contact.subtitle")}</p>
        </div>
        <div className="container max-width-m">
          <div className="row">
            <div className="col-md-6">
              <form>
                <div className="mb-3">
                  <label>{t("contact.form.name")}</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder={t("contact.form.namePlaceholder")}
                  />
                </div>
                <div className="mb-3">
                  <label>{t("contact.form.email")}</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder={t("contact.form.emailPlaceholder")}
                  />
                </div>
                <div className="mb-3">
                  <label>{t("contact.form.phone")}</label>
                  <input
                    type="tel"
                    className="form-control"
                    placeholder={t("contact.form.phonePlaceholder")}
                  />
                </div>
                <div className="mb-3">
                  <label>{t("contact.form.message")}</label>
                  <textarea
                    className="form-control"
                    placeholder={t("contact.form.messagePlaceholder")}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="rezervovat-btn"
                  style={{
                    padding: "10px",
                    paddingLeft: "30px",
                    paddingRight: "30px",
                  }}
                >
                  {t("contact.form.submit")}
                </button>
              </form>
            </div>
            <div className="col-md-6 mt-4">
              <p>{t("contact.info")}</p>
              <p className="font-cinzel">{t("contact.name")}</p>
              <p>
                <strong>{t("contact.addressLabel")}</strong>
                <br />
                {t("contact.address")}
              </p>
              <p>
                <strong>{t("contact.phoneLabel")}</strong>
                <br />
                <a
                  href={`tel:${t("contact.phone")}`}
                  style={{ color: "initial" }}
                >
                  {t("contact.phone")}
                </a>
              </p>
              <p>
                <strong>{t("contact.emailLabel")}</strong>
                <br />
                <a
                  href={`mailto:${t("contact.email")}`}
                  style={{ color: "initial" }}
                >
                  {t("contact.email")}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
