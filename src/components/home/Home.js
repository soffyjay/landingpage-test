import React, { useEffect } from "react";
import { HomeStyle } from "./HomeStyle";
import DetailBox from "../detailbox/Detail";
import emlogo from "../../assets/mlogo.png";
import Calendar from "../calendar/Calendar";
import WOW from "wowjs";
import whitestar from "../../assets/whitestar.svg";
import yellowstar from "../../assets/yellowstar.svg";
import greenstar from "../../assets/greenstar.svg";
import PlayButton from "../playbutton/PlayButton";
import Footer from "../footercomponent/Footer";

const Home = () => {
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, []);
  return (
    <HomeStyle>
      <header>
        <div>
          <img src={emlogo} className={`m-logo`} />
        </div>
        <div>
          <Calendar />
        </div>
      </header>

      <h1 className="desktop">
        <span className={`unlock wow fadeInUp`} data-wow-delay="0.4s">
          Unlock to
        </span>
        <br />
        <span className={`power wow fadeInUp`}>Power your dreams!</span>
        <img src={yellowstar} className={`yellowstar`} />
      </h1>
      <h1 className="mobile">
        <span className={`unlock  wow fadeInUp`} data-wow-delay="0.4s">
          Unlock to
          <b>Power your dreams!</b>
        </span>

        <img src={yellowstar} className={`yellowstar`} />
      </h1>

      <h2 className=" wow fadeInUp h2">
        Stand a chance to win <br />
        <b>N3,000,000 </b> everyday for the next 5 days
      </h2>
      <img src={whitestar} className={`whitestar`} />

      <img src={greenstar} className={`greenstar`} />
      <div className={`details wow fadeInUp`} data-wow-delay="0s">
        <DetailBox />
      </div>
      <div className={`home-button wow fadeInUp`}>
        <PlayButton />
      </div>
      <div className="footer">
        <div className={`footer-animation`}>
          <Footer />
        </div>
      </div>
    </HomeStyle>
  );
};

export default Home;
