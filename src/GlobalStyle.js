import { createGlobalStyle } from "styled-components";
import background from "./assets/background.svg";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;   
    font-family: 'Inter';
    color:#fff;
      background: url(${background});
   
     border:1px solid green;
  }
  *{
      padding:0;
      margin:0;
      box-sizing:border-box;
      
  }
 
`;

export default GlobalStyle;
