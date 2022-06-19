import React from "react";
import { InfoStyle } from "./InfoStyle";

const InfoBox = () => {
  return (
    <InfoStyle>
      <span>💡</span>
      <div className={`text`}>
        Think well before you guess. You have only 2 attempts per day and even
        after you wi, you can come back the next day to try for another jackpot!
      </div>
    </InfoStyle>
  );
};

export default InfoBox;
