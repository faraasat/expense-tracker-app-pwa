import styled from "styled-components";
import { Button, Typography } from "@material-ui/core";

export const BalancedFieldStyles = styled.div`
  && {
    margin-top: 7px;
  }
`;

export const BalancedFieldTextStyles = styled(Typography)`
  && {
    font-family: "Work Sans", sans-serif !important;
    font-size: 22px !important;
    color: rgb(126, 95, 129);
    text-shadow: 0.4px 0.4px rgb(251, 255, 0);
    font-weight: 800 !important;
    margin-block: 0em !important;
    line-height: 2.2 !important;
    transform: translateX(-30px);

    @media only screen and (max-width: 600px) {
      font-size: 5vw !important;
      color: rgba(5, 113, 156, 0.733);
      text-shadow: 0.4px 0.4px rgba(251, 255, 0, 0.589);
      transform: translateX(0px);
    }
  }
`;

export const BalancedFieldTextSubStyles = styled.span`
  && {
    display: block;
    margin-block: 0;
    transform: translateY(-21px);
    font-size: 15px !important;
    margin-bottom: -10px;

    @media only screen and (max-width: 600px) {
      transform: translateY(-17px);
      font-size: 3.2vw !important;
    }
  }
`;

export const BalancedBtnWrapperStyles = styled.div`
  && {
    margin-bottom: 25px;
  }
`;

export const BalancedFieldBtnInputStyles = styled(Button)`
  && {
    /* background-color: rgba(35, 190, 56, 0.932) !important; */
    background-color: rgba(96, 126, 100, 0.932) !important;
    width: 350px;
    padding: 10px 15px !important;
    font-family: cursive !important;
    font-weight: bold !important;
    font-size: 18px !important;
    color: #fff;
    margin-top: 15px;

    &:hover {
      background-color: rgba(27, 122, 40, 0.781) !important;
      transform: scaleX(1.02);
      border-radius: 5px;
      transition-timing-function: all 5s ease-in;
    }

    @media only screen and (max-width: 600px) {
      background-color: rgba(96, 126, 100, 0.932) !important;
      width: 75vw !important;
      border-radius: 50px !important;
      font-size: 5vw !important;
      padding: 5vw;

      &:hover {
        transform: scaleX(1);
        background-color: rgba(96, 126, 100, 0.932) !important;
        border-radius: 50px;
        transition-timing-function: all 5s ease-in;
      }
    }
  }
`;

// export const PaperComponentStyles = styled(Paper)<IPaperStyleConfig>`
//   && {
//     font-size: 19px !important;
//     font-weight: bold !important;
//     font-family: "Times New Roman", Times, serif !important;
//     padding: 19px 40px !important;
//     color: ${(props) => props.color};
//     text-shadow: ${(props) => props.textshadow};

//     @media only screen and (max-width: 600px) {
//       font-size: 19px !important;
//       font-weight: bold !important;
//       font-family: "Times New Roman", Times, serif !important;
//       padding: 3.7vw 9vw !important;
//       width: 45vw;
//     }
//   }
// `;
