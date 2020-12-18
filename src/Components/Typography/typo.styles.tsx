import styled from "styled-components";
import { Typography } from "@material-ui/core";

export const MainHeadingStyles = styled(Typography)`
  && {
    font-family: "Sansita Swashed", cursive !important;
    font-weight: 500 !important;
    font-size: 30px !important;
    color: #ffd901;
    text-shadow: 0.8px 0.8px #ff5100;
    margin-top: 25px !important;

    @media only screen and (max-width: 600px) {
      font-family: "Sansita Swashed", cursive !important;
      color: #ffd901;
      text-shadow: 0.8px 0.8px #ff5100;
      background-color: rgba(15, 91, 255, 0.644);
      width: 100%;
      text-align: center;
      margin-top: 0px !important;
    }
  }
`;

export const BalancedWrapperStyle = styled.div`
  && {
    align-self: flex-start;
    margin-left: 7%;
    margin-top: 5%;

    @media only screen and (max-width: 600px) {
      margin-left: 0%;
      margin: 5% auto 2% auto;

      & > * {
        display: inline-block;
        padding: 0px 15px;
      }
    }
  }
`;

export const BalanceTextStyle = styled(Typography)`
  && {
    font-family: "Work Sans", sans-serif !important;
    font-size: 22px !important;
    /* color: rgb(2, 95, 172); */
    color: rgba(81, 138, 185, 0.911);
    /* text-shadow: 1.5px 1.5px rgba(255, 216, 216, 0.966); */
    text-shadow: 1.5px 1.5px rgba(255, 210, 210, 0.966);
    font-weight: 800 !important;
    margin-block: 0em !important;
    line-height: 1 !important;

    @media only screen and (max-width: 600px) {
      color: rgba(0, 134, 105, 0.911);
      text-shadow: 0.6px 0.6px rgba(255, 255, 255, 0.966);
    }
  }
`;
