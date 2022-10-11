import React from "react";
import logo from "../../assets/shared/desktop/logo.svg";
import { Link } from "react-router-dom";
import SocialMedia from "../SocialMedia";

function Footer() {
  return (
    <footer className="footer">
      <section className="footer-container">
        <section className="footer-nav">
          <article className="footer-logo">
            <Link to="/">
              <img src={logo} alt="AudioPhile E-Commerce Website" />
            </Link>
          </article>
          <article className="footer-links">
            <section className="navLinksContainerFooter">
              <Link to="/">Home</Link>
              <Link to="/speakers">Speaker</Link>
              <Link to="/headphones">HeadPhone</Link>
              <Link to="/earphones">EarPhone</Link>
            </section>
          </article>
        </section>
        <article className="footer-info">
          <p>
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </p>
          <SocialMedia classed={"footer-medias tablet"} />
        </article>
        <article className="footer-copyright">
          <aside className="copyright">
            <p>Copyright 2021. All Rights Reserved</p>
          </aside>
          <SocialMedia classed={"footer-medias desktop"} />
        </article>
      </section>
    </footer>
  );
}

export default Footer;
