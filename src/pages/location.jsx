import React from "react";
import locationImageMobile from "../assets/mobile/image-map.png";
import locationImageDesktop from "../assets/desktop/image-map.png";
import locationImageTablet from "../assets/tablet/image-map.png";

import ArrowButton from "../components/UI/ArrowButton";

export default function Location() {
    
  return (
    <section className="location ">
      <div className="image__wrapper ">
        <picture>
            <source media="(min-width: 1024px)" srcSet={locationImageDesktop} />
            <source media="(min-width: 768px)" srcSet={locationImageTablet} />
            <img src={locationImageMobile} alt="Location Image" />
        </picture>
         <ArrowButton to="/home" variant="left">
            Back to Home
        </ArrowButton>
          
       </div>
       <div className="info__location">
           <div className="info__location-title-container">
             <h2 className="info__location-title">
              <span>Our</span>
              <span>Location</span>
              </h2>
          </div>
          <div className="info__location-description">
              <div className="wrapper__address">
                  <span className="info__location-description-bold">99 King Street</span> 
                  <ul className="address">
                    <li>Newport</li>
                    <li>RI 02840</li>
                    <li>United States of America</li>
                  </ul>
                
              </div>
                <div className="wrapper__text">
                  <p> Our newly opened gallery is located nerar the Edward
                    kign House on 99 King Street, the Modern Art Gallery is free to all visitors and open seven days a week from 8am to 9am.
                  </p>
              </div>
            </div>
       </div>
  </section>
  );
}