import React from "react";
import { CalenderStyle } from "./CalendarStyle";
import calendar from "../../assets/calendar.png";

const Calendar = () => {
  return (
    <CalenderStyle>
      <img src={calendar} />
      <div className={`day-one`}>
        <span className={`day-one-text`}>Day 1</span>
        <span className={`of-five`}>of 5</span>
      </div>
    </CalenderStyle>
  );
};

export default Calendar;
