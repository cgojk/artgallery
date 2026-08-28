import React from "react";

import infoImageMobile1 from "../assets/mobile/image-grid-1.jpg";
import infoImageMobile1_2x from "../assets/mobile/image-grid-1@2x.jpg";
import infoImageMobile2 from "../assets/mobile/image-grid-2.jpg";
import infoImageMobile2_2x from "../assets/mobile/image-grid-2@2x.jpg";
import infoImageMobile3 from "../assets/mobile/image-grid-3.jpg";
import infoImageMobile3_2x from "../assets/mobile/image-grid-3@2x.jpg";


import infoImageTablet1 from "../assets/tablet/image-grid-1.jpg";
import infoImageTablet1_2x from "../assets/tablet/image-grid-1@2x.jpg";
import infoImageTablet2 from "../assets/tablet/image-grid-2.jpg";
import infoImageTablet2_2x from "../assets/tablet/image-grid-2@2x.jpg";
import infoImageTablet3 from "../assets/tablet/image-grid-3.jpg";
import infoImageTablet3_2x from "../assets/tablet/image-grid-3@2x.jpg";

import infoImageDesktop1 from "../assets/desktop/image-grid-1.jpg";
import infoImageDesktop1_2x from "../assets/desktop/image-grid-1@2x.jpg";
import infoImageDesktop2 from "../assets/desktop/image-grid-2.jpg";
import infoImageDesktop2_2x from "../assets/desktop/image-grid-2@2x.jpg";
import infoImageDesktop3 from "../assets/desktop/image-grid-3.jpg";
import infoImageDesktop3_2x from "../assets/desktop/image-grid-3@2x.jpg";


export default function Info() {
  return (
    <section className="info container">
      <div className="container__image--info">
        <div className="image__container">
            <picture>
              <source
                media="(min-width: 1024px)"
                srcSet={`${infoImageDesktop1} 1x, ${infoImageDesktop1_2x} 2x`}
              />
              <source
                media="(min-width: 768px)"
                srcSet={`${infoImageTablet1} 1x, ${infoImageTablet1_2x} 2x`}
              />
              <img
                src={infoImageMobile1}
                srcSet={`${infoImageMobile1} 1x, ${infoImageMobile1_2x} 2x`}
                alt="Info Image"
              />
            </picture>
          </div>
          <div className="container__info">
            <h2 className="info__title">Your day at the gallery</h2>
            <p className="info__description">
              Wander through our distinct collections and find new insights about our artsits.  Dive intothe details of thier creative process. 
            </p>
          </div>
        </div>
        <div className="container__images--grid">
            <picture>
              <source
                media="(min-width: 1024px)"
                srcSet={`${infoImageDesktop2} 1x, ${infoImageDesktop2_2x} 2x`}
              />
              <source
                media="(min-width: 768px)"
                srcSet={`${infoImageTablet2} 1x, ${infoImageTablet2_2x} 2x`}
              />
              <img
                src={infoImageMobile2}
                srcSet={`${infoImageMobile2} 1x, ${infoImageMobile2_2x} 2x`}
                alt="Info Image"
              />
            </picture>
            <picture>
              <source
                media="(min-width: 1024px)"
                srcSet={`${infoImageDesktop3} 1x, ${infoImageDesktop3_2x} 2x`}
              />
              <source
                media="(min-width: 768px)"
                srcSet={`${infoImageTablet3} 1x, ${infoImageTablet3_2x} 2x`}
              />
              <img
                src={infoImageMobile3}
                srcSet={`${infoImageMobile3} 1x, ${infoImageMobile3_2x} 2x`}
                alt="Info Image"
              />
            </picture>
           <div className="container__info--grid">
                <h2 className="info__title--grid">come and be Inspired</h2>
                <p className="description__info--grid"> We 'are excited to welcome you to our gallery and see how out collecitons influence you.</p>
            </div>
          </div>
      
    </section>
  );
}