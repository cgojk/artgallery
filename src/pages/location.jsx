import React from "react";
import locationImageMobile from "../assets/mobile/image-map.png";
import locationImageDesktop from "../assets/desktop/image-map.png";
import locationImageTablet from "../assets/tablet/image-map.png";

import ArrowButton from "../components/UI/ArrowButton";

export default function Location() {
    
  return (
    <section className="location container">
        <picture>
            <source media="(min-width: 1024px)" srcSet={locationImageDesktop} />
            <source media="(min-width: 768px)" srcSet={locationImageTablet} />
            <img src={locationImageMobile} alt="Location Image" />
        </picture>
        <ArrowButton to="/home">
            Back to Home
        </ArrowButton>
    </section>
  );
}