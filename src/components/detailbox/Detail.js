import React from "react";
import InfoBox from "../infobox/InfoBox";
import { DetailStyle } from "./DetailStyle";

const Detail = () => {
  return (
    <DetailStyle>
      <span className={`title`}>🚀 How To Play</span>
      <div className={`list`}>
        <span>1. Guess the right combination of numbers. </span>
        <span>
          2. Win <b>N3,000,000</b> instantly
        </span>
      </div>
      <span className={`bottom-text`}>
        Sounds unbelievable? Well, guess right & see for yourself!
      </span>
      <InfoBox />
    </DetailStyle>
  );
};

export default Detail;
