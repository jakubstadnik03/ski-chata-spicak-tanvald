import React from "react";

const Footer = () => {
  return (
    <footer>
      <div
        className="footer-content p-2 d-flex justify-content-center"
        style={{ backgroundColor: "black" }}
      >
        <a href="/" className="d-flex">
          <img src="/svg/logo-skichata-spicak-tanvald.svg" alt="" />
        </a>
        <div className="line"></div>
        <div className="social-wrapper d-flex flex-column flex-lg-row flex-lg-row justify-content-center align-items-center">
          <a
            href="https://www.facebook.com/profile.php?id=100090236622013"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/svg/icon-facebook.svg" className="m-2" alt="Facebook" />
          </a>
          <a
            href="https://instagram.com/skichata_spicak_tanvald?igshid=NzZlODBkYWE4Ng=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/svg/icon-instagram.svg"
              className="m-2"
              alt="Instagram"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
