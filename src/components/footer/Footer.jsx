import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <h1 className="footer__title">Fontinelles</h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              Sobre
            </a>
          </li>
          <li>
            <a href="#projects" className="footer__link">
              Projetos
            </a>
          </li>
        </ul>

        <span className="footer__copy">&#169; Pedro Henrique Fontinelles</span>
      </div>
    </footer>
  );
};

export default Footer;
