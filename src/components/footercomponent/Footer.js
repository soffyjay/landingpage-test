import React, { useEffect } from "react";
import { FooterStyle } from "./FooterStyle";
import fan from "../../assets/fan.svg";
import coinpot from "../../assets/coin pot.svg";
import right from "../../assets/coin right.svg";
import left from "../../assets/coin left.svg";
import stroke from "../../assets/stroke.svg";
import WOW from "wowjs";
import one from "../../assets/starone.svg";
import two from "../../assets/star2.svg";
import three from "../../assets/star3.svg";
import four from "../../assets/star4.svg";
import five from "../../assets/star5.svg";
import six from "../../assets/star6.svg";
import seven from "../../assets/star7.svg";
import eight from "../../assets/star8.svg";
import nine from "../../assets/star9.svg";
import ten from "../../assets/star10.svg";
import elev from "../../assets/star11.svg";
import twelve from "../../assets/star12.svg";
import whitestar from "../../assets/whitestar.svg";
import yellowstar from "../../assets/yellowstar.svg";

const Footer = () => {
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, []);
  return (
    <FooterStyle>
      <div className="goldDiv">
        <div className="gold-container">
          <img className="firstCoin" src={left} alt="firstCoin" />
          <img className="goldStack" src={coinpot} alt="goldStack" />
          <img className="secondCoin" src={right} alt="secondCoin" />
        </div>
        <div className="main-spinner">
          <p className="spinning-light first"></p>
          <p className="spinning-light second"></p>
          <p className="spinning-light third"></p>
          <p className="spinning-light fourth"></p>
          <p className="spinning-light fifth"></p>
          <p className="spinning-light sixth"></p>
        </div>

        <div id="grad"></div>
        <div className="moving-stars">
          <img src={one} className=" img-item" />
          <img src={two} className="two" />
          <img src={three} className="three " />
          <img src={four} /> <img src={five} className="five" />
          <img src={six} className="six" />
          <img src={seven} /> <img src={eight} className="eight" />
          <img src={nine} className="nine" />
          <img src={ten} /> <img src={elev} className="elev img-item" />
          <img src={twelve} className="'twelve" />
          <img src={whitestar} className="white-star" />
          <img src={yellowstar} className="yellow-star" />
        </div>
      </div>
    </FooterStyle>
  );
};

export default Footer;
