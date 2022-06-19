import styled from "styled-components";

export const InfoStyle = styled.div`
  display: flex;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  justify-content: space-between;
  span {
    display: block;
  }
  width: 371px;

  padding: 10px;
  .text {
    letter-spacing: -0.02em;
    font-weight: 400;
    font-size: 12px;
    line-height: 1.6;
  }
  @media (max-width: 580px) {
    width: 280px;
    height: 96px;
  }
`;
