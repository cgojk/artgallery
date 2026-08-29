import React from "react";
import facebookIcon from "../assets/icon-facebook.svg";
import instagramIcon from "../assets/icon-instagram.svg";

import twitterIcon from "../assets/icon-twitter.svg";




export default function Footer() {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <div className="footer__info ">
                <h1 className="footer__title">Modern 
                   <span>Art Gallery</span> </h1>

                <p className="footer__text">The Modern Art Gallery is free to all visitors and open seven days a week from 8am to 9am.  Find us at 99 King Street, Newport, USA</p>

            </div>
                <div className="footer__container--icons">
                <a href="#" className="footer__icon">
                    <img src={facebookIcon} alt="Facebook" />
                </a>
                <a href="#" className="footer__icon">
                    <img src={instagramIcon} alt="Instagram" />
                </a>
                <a href="#" className="footer__icon">
                    <img src={twitterIcon} alt="Twitter" />
                </a>
                
                
            
                </div>
        </div>
    </footer>
  );
}