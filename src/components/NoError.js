import React from "react";
import { Link } from "react-router-dom";

function NoError({ title }) {
  return (
    <section className="error">
      <div className="error-container contain">
        <h1 data-aos="fade-left">{title}</h1>
        <Link
          data-aos="fade-up"
          data-aos-delay="200"
          to="/"
          className="btns orange-background"
        >
          Return Home
        </Link>
      </div>
    </section>
  );
}

export default NoError;
