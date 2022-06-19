import styled from "styled-components";
import background from "../../assets/background.svg";

export const HomeStyle = styled.div`
  position: relative;
  max-width: 1600px;
  margin: auto;
  height: 970px !important;
  overflow-y: hidden !important;
  overflow-x: hidden;
  pading-top: 120px;
  padding: 0 104px;
  .bottom {
    width: 100vw;
    height: auto;
  }
  header {
    display: flex;
    padding-top: 44px;
    justify-content: space-between;
    align-items: center;
    .m-logo {
      width: 40.25px;
      height: auto;
    }
  }
  h1 {
    text-align: center;
    padding-top: 53px;
    font-size: 70px;
    line-height: 1;
    font-family: "Poppins";

    position: relative;
    width: fit-content;
    margin: auto;
    .yellowstar {
      top: 172px;

      position: absolute;
      right: 128px;
    }
    span {
      max-height: 70px;
    }
    .unlock {
      font-weight: 300;
      display: inline-block;
    }
    .power {
      font-weight: 700;
      display: inline-block;
    }
  }
  h2 {
    text-align: center;
    font-weight: 400;
    font-size: 29.43px;
    padding-top: 7px;
  }
  .details {
    margin: auto;
    display: flex;
    justify-content: center;
    padding-top: 24px;
    overflow: hidden;
  }
  .whitestar {
    position: absolute;
    top: 164px;
    right: 164px;
  }
  .greenstar {
    position: absolute;
    top: 135px;
    left: 181px;
  }
  .home-button {
    margin-top: 44px;
    display: flex;
    justify-content: center;
  }
  .h2 {
    max-height: 80px;
    overflow: hidden;
  }
  @media (min-width: 964px) {
    h1 {
      max-height: 207px;
      overflow: hidden;
      .unlock {
        overflow: hidden;
        max-height: 60px;
      }
    }
  }
  .mobile {
    display: none;
  }
  @media (max-width: 700px) {
    padding-left: 19px;
    padding-right: 19px;
    h1 {
      font-size: 40px;
    }
  }
  @media (max-width: 580px) {
    .mobile {
      display: contents;
      font-weight: 300;
      font-size: 40px;

      b {
        padding-left: 10px;
      }
    }
    header {
      margin-bottom: 53px;
    }
    .desktop {
      display: none;
    }
    h1 {
      width: 100%;

      font-weight: 400;
      .yellowstar {
        top: 315px;
        right: 10%;
      }
      br {
        display: none;
      }
      span {
        display: inline-block;
      }
    }
    h2 {
      font-size: 16px;
      padding: 23px 0;
      font-weight: 400;
    }
  }
  .whitestar {
    top: 120px;
    right: 0;
  }
  .greenstar {
    top: 400px;
    left: 0;
  }
`;
