import styled from "styled-components";

// export const FooterStyle = styled.div`

// position:absolute;
// top:50px;

//   .fan-container {
//     position: relative;
//     max-width: 400px;

//     background-color:green;
// box-sizing:border:box;
// display:inline-block;

//     .fan-rotate {
//       position: absolute;

//     }

//     .one {
//       width: 121.14px;
//       height: 744.46px;
//       left: 0.57px;
//       top: 520px;
//       background: linear-gradient(
//         1.87deg,
//         rgba(255, 229, 0, 0.5) -1.18%,
//         rgba(255, 230, 9, 0.435) 3.33%,
//         rgba(255, 231, 23, 0.335) 10.55%,
//         rgba(255, 233, 36, 0.245) 17.77%,
//         rgba(255, 234, 47, 0.17) 25.89%,
//         rgba(255, 234, 56, 0.11) 34.01%,
//         rgba(255, 235, 62, 0.06) 42.13%,
//         rgba(255, 236, 67, 0.025) 51.15%,
//         rgba(255, 236, 70, 0.006) 60.17%,
//         rgba(255, 236, 71, 0.002) 71.89%
//       );
//       transform: matrix(-0.59, 0.81, 0.81, 0.59, 0, 0);
//   animation: spin 4500ms linear infinite;
//     }
//     .two {
//       width: 149.81px;
//       height: 920.67px;
//       background: linear-gradient(
//         1.87deg,
//         rgba(255, 229, 0, 0.5) -1.18%,
//         rgba(255, 230, 9, 0.435) 3.33%,
//         rgba(255, 231, 23, 0.335) 10.55%,
//         rgba(255, 233, 36, 0.245) 17.77%,
//         rgba(255, 234, 47, 0.17) 25.89%,
//         rgba(255, 234, 56, 0.11) 34.01%,
//         rgba(255, 235, 62, 0.06) 42.13%,
//         rgba(255, 236, 67, 0.025) 51.15%,
//         rgba(255, 236, 70, 0.005) 60.17%,
//         rgba(255, 236, 71, 0) 71.89%
//       );
//       transform: matrix(-0.86, 0.52, 0.52, 0.86, 0, 0);
//       left: 92.25px;
//       top: 233px;
//        animation: spin2 4500ms linear infinite;
//     }
//     .three {
//       position: absolute;
//       width: 158px;
//       height:971px;
//       left: 403px;
//       top: 100px;

//       background: linear-gradient(
//         1.87deg,
//         rgba(255, 229, 0, 0.5) -1.18%,
//         rgba(255, 230, 9, 0.435) 3.33%,
//         rgba(255, 231, 23, 0.335) 10.55%,
//         rgba(255, 233, 36, 0.245) 17.77%,
//         rgba(255, 234, 47, 0.17) 25.89%,
//         rgba(255, 234, 56, 0.11) 34.01%,
//         rgba(255, 235, 62, 0.06) 42.13%,
//         rgba(255, 236, 67, 0.025) 51.15%,
//         rgba(255, 236, 70, 0.005) 60.17%,
//         rgba(255, 236, 71, 0) 71.89%
//       );
//     }
//     .four {
//       width: 149.81px;
//       height: 920.67px;
//       left: 783.85px;
//       top: 231px;

//       background: linear-gradient(
//         1.87deg,
//         rgba(255, 229, 0, 0.5) -1.18%,
//         rgba(255, 230, 9, 0.435) 3.33%,
//         rgba(255, 231, 23, 0.335) 10.55%,
//         rgba(255, 233, 36, 0.245) 17.77%,
//         rgba(255, 234, 47, 0.17) 25.89%,
//         rgba(255, 234, 56, 0.11) 34.01%,
//         rgba(255, 235, 62, 0.06) 42.13%,
//         rgba(255, 236, 67, 0.025) 51.15%,
//         rgba(255, 236, 70, 0.005) 60.17%,
//         rgba(255, 236, 71, 0) 71.89%
//       );
//       transform: rotate(31.12deg);
//     }
//     .five {
//       width: 121.14px;
//       height: 744.46px;
//       left: 916.62px;
//       top: 527px;

//       background: linear-gradient(
//         1.87deg,
//         rgba(255, 229, 0, 0.5) -1.18%,
//         rgba(255, 230, 9, 0.435) 3.33%,
//         rgba(255, 231, 23, 0.335) 10.55%,
//         rgba(255, 233, 36, 0.245) 17.77%,
//         rgba(255, 234, 47, 0.17) 25.89%,
//         rgba(255, 234, 56, 0.11) 34.01%,
//         rgba(255, 235, 62, 0.06) 42.13%,
//         rgba(255, 236, 67, 0.025) 51.15%,
//         rgba(255, 236, 70, 0.005) 60.17%,
//         rgba(255, 236, 71, 0) 71.89%
//       );
//       transform: rotate(53.78deg);
//     }
//   }

//     @keyframes spin {
//   0% {
//     transform: rotate(0deg);
//   transform-origing:center center;
//   }

//   100% {
//     transform: rotate(-60deg);
//     transform-origing:center center;

//   }
// }
//  @keyframes spin2 {
//   0% {
//     transform: rotate(0deg);
//   transform-origing:center center;
//   }

//   100% {
//     transform: rotate(-30deg);
//     transform-origing:top top;

//   }
// }

// `;
export const FooterStyle = styled.div`
  max-height: 300px;
  @keyframes mymove {
    0% {
      bottom: 90%;
    }
    50% {
      bottom: 70%;
    }
    100% {
      bottom: 90%;
    }
  }
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }

  @keyframes Star1 {
    0% {
      bottom: 0%;
    }

    50% {
      right: 53%;
      bottom: 20%;
    }

    100% {
      right: 51%;
      bottom: 37%;
      display: none;
    }
  }

  @keyframes Star2 {
    0% {
      bottom: 0%;
    }
    50% {
      right: 55%;
      bottom: 23%;
    }
    100% {
      right: 59%;
      bottom: 45%;
      display: none;
    }
  }

  @keyframes Star3 {
    0% {
      bottom: 0%;
    }
    50% {
      right: 45%;
      bottom: 25%;
    }
    100% {
      right: 40%;
      bottom: 40%;
      display: none;
    }
  }

  @keyframes Star4 {
    0% {
      bottom: 0%;
    }
    50% {
      right: 40%;
      bottom: 25%;
    }
    100% {
      right: 35%;
      bottom: 50%;
      display: none;
    }
  }

  @keyframes rightmove {
    0% {
      bottom: 60%;
    }
    50% {
      bottom: 35%;
    }
    100% {
      bottom: 60%;
    }
  }

  @keyframes rotatemove {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }
  @-webkit-keyframes rotate1 {
    from {
      -webkit-transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(20deg);
    }
  }

  @-moz-keyframes rotate1 {
    from {
      -moz-transform: rotate(0deg);
    }
    to {
      -moz-transform: rotate(20deg);
    }
  }

  .bottom {
    display: flex;

    position: relative;
    padding-top: 40px;
  }

  .goldStack {
    width: 555px;

    // bottom: 0;
    left: 50%;
    top: 400px;
    transform: translate(-50%, 0);
    z-index: 2;
  }
  .gold-container {
    position: absolute;
    top: 800px;
    left: 50%;
  }
  .firstCoin {
    //width: 145px;
    position: absolute;
    left: -60%;
    //top: -40%;

    transform: translate(30%, 0);
    animation: mymove 5s infinite;
  }
  .secondCoin {
    // width: 145px;
    position: absolute;
    left: 65%;
    transform: translate(-80%, 0);
    bottom: 0%;
    animation: rightmove 5.1s infinite;
  }

  .goldLight {
    position: absolute;
    bottom: 0;
    left: 47%;
    transform: translate(-50%, 0);
  }
  .moving-stars {
    position: relative;
  }
  .img-item {
    position: absolute;
    right: 50%;
  }
  .first {
    animation: Star1 10s infinite;
  }

  .second {
    animation: Star2 7s infinite;
  }
  .third {
    animation: Star3 8s infinite;
  }
  .fourth {
    animation: Star4 9s infinite;
  }
  .star1 {
    position: absolute;
    left: 20%;
    bottom: 3%;
  }
  .star3 {
    position: absolute;
    left: 20%;
    bottom: 65%;
  }
  .star2 {
    position: absolute;
    right: 10%;
    bottom: 5%;
  }

  .spinning-light {
    width: 450px;
    height: 750px;
    position: absolute;
    bottom: 0;
    left: 50%;
    background-image: linear-gradient(
      180deg,
      rgba(255, 229, 0, 0) -1.18%,
      rgba(255, 230, 9, 0) 3.33%,
      rgba(255, 231, 23, 0.003) 10.55%,
      rgba(255, 233, 36, 0.006) 17.77%,
      rgba(255, 234, 47, 0.01) 25.89%,
      rgba(255, 234, 56, 0.033) 34.01%,
      rgba(255, 235, 62, 0.051) 42.13%,
      rgba(255, 236, 67, 0.093) 51.15%,
      rgba(255, 236, 70, 0.13) 60.17%,
      rgba(255, 236, 71, 0.21) 71.89%
    );
    transform-origin: center bottom;
    clip-path: polygon(0 0, 100% 0, 50% 100%, 50% 100%);
  }

  .main-spinner {
    position: relative;
    width: 200px;
    height: auto;
    // bottom: -140px;
    left: 40%;
    z-index: -2;
    top: 300px;
    transform-origin: center bottom;
    animation: spin 45.1s infinite reverse linear;
  }

  .main-spinner .first {
    transform: translateX(-50%) rotate(0deg);
  }

  .main-spinner .second {
    transform: translateX(-50%) rotate(60deg);
  }

  .main-spinner .third {
    transform: translateX(-50%) rotate(120deg);
  }

  .main-spinner .fourth {
    transform: translateX(-50%) rotate(180deg);
  }

  .main-spinner .fifth {
    transform: translateX(-50%) rotate(240deg);
  }

  .main-spinner .sixth {
    transform: translateX(-50%) rotate(300deg);
  }

  @media screen and (max-width: 600px) {
    bottom: 0;

    .goldLight {
      overflow: hidden;
      width: 100vw;
      height: 100vh;
    }
    .goldStack {
      width: 100vw;
      border: 1px solid red;
      margin-top: 60px;
    }
    .firstCoin {
      right: 5%;
    }
    .secondCoin {
      left: 40%;
    }
  }

  .moving-stars {
    position: relative;

    .img-item {
      animation: imageAnimation 5s infinite normal ease-out;
    }
    .nine {
      animation: imageAnimation 3s normal infinite 0s;
    }
    .six {
      position: absolute;
      animation: imageAnimation 4s normal infinite 0s;
    }
    .twelve {
      animation: imageAnimation 6s normal infinite 0s;
      position: absolute;
      top: 45px;
    }
    .eight {
      animation: imageAnimation 2s normal infinite 0s;
    }
    .elev {
      animation: imageAnimation 6s normal infinite 0s;
    }
    .five {
      animation: imageAnimation 2s normal infinite 0s;
    }
  }
  @keyframes imageAnimation {
    0% {
      animation-timing-function: ease-in;
      opacity: 1;
      top: 500px;
    }
    8% {
      animation-timing-function: ease-out;
      opacity: 1;
    }
    17% {
      opacity: 0.8;
    }
    25% {
      opacity: 0.6;
    }
    66% {
      opacity: 0;
    }
    100% {
      opacity: 1;
      top: 0px;
    }
  }
  .yellow-star {
    position: absolute;
    left: 25%;
  }
  .white-star {
    position: absolute;
    top: 35px;
    left: 15%;
  }
  @media (max-width: 580px) {
  }
`;
