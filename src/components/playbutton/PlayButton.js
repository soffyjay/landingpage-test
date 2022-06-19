import React from "react";
import { Style } from "./Style";
import stroke from "../../assets/stroke.svg";

const PlayButton = () => {
  return (
    <Style>
      <span>Play The Game</span>
      <img src={stroke} />
    </Style>
  );
};

export default PlayButton;
