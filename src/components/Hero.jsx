import React from "react";
import heroImagemobile from "../assets/mobile/image-hero.jpg";
import heroImagemobile2x from "../assets/mobile/image-hero2x.jpg";

import heroImageTablet from "../assets/tablet/image-hero.jpg";
import heroImageTablet2x from "../assets/tablet/image-hero@2x.jpg";

import heroImageDesktop from "../assets/desktop/image-hero.jpg";
import heroImageDesktop2x from "../assets/desktop/image-hero2x.jpg";
import iconarrow from "../assets/icon-arrow-right.svg";
// import artworkImages from "../ArtworkImages";
import { Link } from "react-router-dom";


export default function Hero() {
  return (
    <section className="hero">
      <div className="container__image">
     <picture>
  <source
    media="(min-width: 1024px)"

    srcSet={`${heroImageDesktop} 1x, ${heroImageDesktop2x} 2x`}
  />

  <source
    media="(min-width: 768px)"
    srcSet={`${heroImageTablet} 1x, ${heroImageTablet2x} 2x`}
  />

  <img
    src={heroImagemobile}
    srcSet={`${heroImagemobile} 1x, ${heroImagemobile2x} 2x`}
    alt="Hero Image"
  />
</picture>
      </div>
      <div className="container__info">
      <h1 className="hero__title"> Modern art gallery</h1>
        <p className="hero__description">
            The arts in the collection of the Modern Art Gallery all started from a spark of inspiration.  Will these pieces inspire you? visit us and find out.
        </p>
       <Link to="/location" className="button__container">
  <span className="hero__button">Our Location</span>

  <span className="hero__button-line">
    <img
      className="hero__button-icon"
      src={iconarrow}
      alt="Arrow Icon"
    />
  </span>
</Link>
</div>
    </section>
  );
}