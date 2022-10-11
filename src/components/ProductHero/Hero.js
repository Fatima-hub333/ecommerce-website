import React from "react";

function Hero({ hero, title }) {
  return (
    <section className={hero}>
      <h2>{title}</h2>
    </section>
  );
}

export default Hero;
