import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import { useTranslation } from "react-i18next";

function MyNavbar() {
  const navigate = useNavigate();
  const { lang } = useParams();
  const { t, i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState(i18n.language);

  useEffect(() => {
    const language = lang || "cs";
    setCurrentLang(language);
    if (i18n.language !== language) {
      i18n.changeLanguage(language);
    }
  }, [lang, i18n]);

  const changeLanguage = (lng) => {
    setCurrentLang(lng);
    i18n.changeLanguage(lng);
    localStorage.setItem("i18nextLng", lng);

    const currentPath = window.location.pathname.replace(/^\/(en|de|cs)?/, "");
    navigate(`/${lng}${currentPath}`);
  };

  const LocalizedLink = ({ to, children, ...props }) => {
    const localizedPath = currentLang !== "cs" ? `/${currentLang}${to}` : to;
    return (
      <Link to={localizedPath} {...props}>
        {children}
      </Link>
    );
  };

  const LocalizedHashLink = ({ to, children, ...props }) => {
    const pathWithoutHash = to.split("#")[0];
    const hash = to.split("#")[1];
    const localizedPath =
      currentLang !== "cs"
        ? `/${currentLang}${pathWithoutHash}`
        : pathWithoutHash;
    return (
      <HashLink to={`${localizedPath}#${hash}`} {...props}>
        {children}
      </HashLink>
    );
  };

  return (
    <header className="navbar " style={{ zIndex: 999 }}>
      <Navbar
        expand="lg"
        variant="dark"
        className="navbar-text max-width bg-transparent "
      >
        <Navbar.Brand as={LocalizedLink} to="/" className="mx-2">
          <img
            src="/svg/logo-skichata-spicak-tanvald.svg"
            alt="ski chata logo"
            width="200"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="ml-auto">
            <Nav.Link as={LocalizedLink} to="/">
              {t("nav.home")}
            </Nav.Link>
            <Nav.Link as={LocalizedLink} to="/fotogalerie">
              {t("nav.gallery")}
            </Nav.Link>
            <Nav.Link as={LocalizedLink} to="/kam-na-vylet">
              {t("nav.excursions")}
            </Nav.Link>
            <LocalizedHashLink to="/#kontakt" className="nav-link">
              {t("nav.contact")}
            </LocalizedHashLink>
            <Nav.Link
              as={LocalizedLink}
              to="/rezervovat"
              className="rezervovat-btn text-white"
            >
              {t("nav.book")}
            </Nav.Link>
            {currentLang !== "en" && (
              <Nav.Link as="button" onClick={() => changeLanguage("en")}>
                EN
              </Nav.Link>
            )}
            {currentLang !== "de" && (
              <Nav.Link as="button" onClick={() => changeLanguage("de")}>
                DE
              </Nav.Link>
            )}
            {currentLang !== "cs" && (
              <Nav.Link as="button" onClick={() => changeLanguage("cs")}>
                CS
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}

export default MyNavbar;
