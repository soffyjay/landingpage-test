import styled from "styled-components";

export const DetailStyle = styled.div`
  width: fit-content;

  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.39) -213.5%,
    rgba(255, 255, 255, 0) 100%
  );
  box-shadow: inset 0px -1px 11px rgba(255, 255, 255, 0.17),
    inset 0px 2px 0px rgba(255, 255, 255, 0.24);
  border-radius: 8px;
  padding: 24px 27px;

  .list {
    padding-top: 16px;
    span {
      display: block;
      font-weight: 400;
      font-size: 14px;
      color;rgba(255, 255, 255, 1);
      line-height:1.65;
      letter-spacing: -0.02em;

    }
  }
  .title {
    text-align: center;
    display: block;
    font-weight: 700;
  }
  .bottom-text{
      padding:8px 0 16px 0;
      display:block;
       font-weight: 400;
      font-size: 14px;
      color;rgba(255, 255, 255, 1);
      line-height:1.65;
      letter-spacing: -0.02em;

  }
  @media(max-width:580px){
    width: 335px;
    font-size:14px;
height: 298px;
padding-left:16px;
padding-right:16px;
box-sizing:border-box;
  }
`;
