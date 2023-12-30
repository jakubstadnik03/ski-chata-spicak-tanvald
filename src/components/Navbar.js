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
  const [expanded, setExpanded] = useState(false);

  // Function to close the navbar
  const closeNavbar = () => setExpanded(false);

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

    // Extract the pathname and remove the leading language segment if present
    let currentPath = window.location.pathname
      .replace(/^\/en/, "")
      .replace(/^\/de/, "")
      .replace(/^\/cs/, "");

    // Ensure the path starts with a slash
    currentPath = currentPath.startsWith("/") ? currentPath : `/${currentPath}`;

    // Construct the new path with the selected language
    const newPath = lng === "cs" ? currentPath : `/${lng}${currentPath}`;

    navigate(newPath);
    closeNavbar();
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
        expanded={expanded}
        onToggle={setExpanded}
      >
        <Navbar.Brand
          as={LocalizedLink}
          to="/"
          className="mx-2"
          onSelect={closeNavbar}
        >
          <img
            src="/svg/logo-skichata-spicak-tanvald.svg"
            alt="ski chata logo"
            width="200"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="ml-auto">
            <Nav.Link as={LocalizedLink} to="/" onSelect={closeNavbar}>
              {t("nav.home")}
            </Nav.Link>
            <Nav.Link
              as={LocalizedLink}
              to="/fotogalerie"
              onSelect={closeNavbar}
            >
              {t("nav.gallery")}
            </Nav.Link>
            <Nav.Link
              as={LocalizedLink}
              to="/kam-na-vylet"
              onSelect={closeNavbar}
            >
              {t("nav.excursions")}
            </Nav.Link>
            <LocalizedHashLink
              to="/#kontakt"
              className="nav-link"
              onSelect={closeNavbar}
            >
              {t("nav.contact")}
            </LocalizedHashLink>
            {/* <LocalizedHashLink
              to="/#kontakt"
              className="rezervovat-btn text-white"
            >
              {t("nav.book")}
            </LocalizedHashLink> */}
            {currentLang !== "en" && (
              <Nav.Link
                as="button"
                onClick={() => changeLanguage("en")}
                onSelect={closeNavbar}
              >
                EN
              </Nav.Link>
            )}
            {currentLang !== "de" && (
              <Nav.Link
                as="button"
                onClick={() => changeLanguage("de")}
                onSelect={closeNavbar}
              >
                DE
              </Nav.Link>
            )}
            {currentLang !== "cs" && (
              <Nav.Link
                as="button"
                onClick={() => changeLanguage("cs")}
                onSelect={closeNavbar}
              >
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
