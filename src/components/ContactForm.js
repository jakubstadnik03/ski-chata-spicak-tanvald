import React, { useRef } from "react";
import { useTranslation } from "react-i18next";

import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const { t } = useTranslation();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_yud6uku",
        "template_dvvigug",
        form.current,
        "vOk1lRpgB82-cRXIH"
      )
      .then(
        (result) => {
          alert("Vaš dotaz byl úspěšně odeslán!");
          document.location.href = "/";
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div
      className="contact-container"
      style={{ backgroundImage: "url(/img/1697813233498.jpeg)" }}
      id="kontakt"
    >
      <div className="overlay">
        <div className="title-black title flex-column align-items-center max-width mb-lg-3">
          <h2>{t("contact.title")}</h2>
          <p style={{ textTransform: "none" }}>{t("contact.subtitle")}</p>
        </div>
        <div>
          <div className="container max-width-m">
            <div className="row">
              <div className="col-md-6">
                <form ref={form} onSubmit={sendEmail}>
                  <div className="mb-3">
                    <label htmlFor="user_name">{t("contact.form.name")}</label>
                    <input
                      name="user_name"
                      type="text"
                      className="form-control"
                      placeholder={t("contact.form.namePlaceholder")}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="user_email">
                      {t("contact.form.email")}
                    </label>
                    <input
                      type="email"
                      name="user_email"
                      className="form-control"
                      placeholder={t("contact.form.emailPlaceholder")}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="user_phone">
                      {t("contact.form.phone")}
                    </label>
                    <input
                      type="tel"
                      name="user_phone"
                      className="form-control"
                      placeholder={t("contact.form.phonePlaceholder")}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message">{t("contact.form.message")}</label>
                    <textarea
                      name="message"
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
                <p>
                  <strong>{t("contact.open")}</strong>
                  <br />
                  Zimní sezóna: Pondělí - Neděle, 9:00 - 17:00 hodin
                  <br />
                  <a
                    href="tel:774060031" // Aktualizované telefonní číslo
                    style={{ color: "initial" }}
                  >
                    774060031
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
