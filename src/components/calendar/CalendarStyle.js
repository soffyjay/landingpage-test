import styled from "styled-components";

export const CalenderStyle = styled.div`
  display: flex;
  .day-one {
    width: 65px;
    height: auto;
    padding-left: 10px;
    span {
      display: block;
    }
    .day-one-text {
      font-weight: 700;
      font-size: 18px;
      padding-bottom: 4px;
    }
    .of-five {
      font-weight: 400;
      font-size: 14px;
      opacity: 60%;
    }
  }
`;
