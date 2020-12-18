import styled from "styled-components";
import { ButtonBase, Paper } from "@material-ui/core";
import { IButtonBaseStyleConfig, IPaperStyleConfig } from "./paper";

export const PaperAlignmentStyles = styled(Paper)`
  && {
    display: flex;
    width: 375px;
    height: 115px;
    align-items: center;
    justify-content: center;
    /* background-color: rgba(255, 255, 255, 0.79) !important; */
    background-color: rgba(252, 228, 228, 0.79) !important;
    margin-top: 23px;
    margin-bottom: 10px;
    box-shadow: 0px 8px 9px -5px rgba(0, 0, 0, 0.2),
      0px 15px 22px 2px rgba(0, 0, 0, 0.14),
      0px 6px 28px 5px rgba(0, 0, 0, 0.12) !important;

    @media only screen and (max-width: 600px) {
      width: 75vw;
      min-height: 220px;
      flex-direction: column;
      background-color: rgba(252, 228, 228, 0.79) !important;
      margin-top: 20px;
      margin-bottom: 20px;
    }
  }
`;

export const ButtonBaseAlignmentStyles = styled(
  ButtonBase
)<IButtonBaseStyleConfig>`
  && {
    margin-left: ${(props) => props.mlnormal};
    margin-right: ${(props) => props.mrnormal};

    @media only screen and (max-width: 600px) {
      margin-left: ${(props) => props.mlsmall};
      margin-top: ${(props) => props.mtsmall};
      margin-right: ${(props) => props.mrsmall};
    }
  }
`;

export const PaperComponentStyles = styled(Paper)<IPaperStyleConfig>`
  && {
    font-size: 19px !important;
    font-weight: bold !important;
    font-family: "Times New Roman", Times, serif !important;
    padding: 19px 40px !important;
    color: ${(props) => props.color};
    text-shadow: ${(props) => props.textshadow};
    box-shadow: 0px 6px 6px -3px rgba(0,0,0,0.2), 0px 10px 14px 1px rgba(0,0,0,0.14), 0px 4px 18px 3px rgba(0,0,0,0.12);

    @media only screen and (max-width: 600px) {
      font-size: 19px !important;
      font-weight: bold !important;
      font-family: "Times New Roman", Times, serif !important;
      padding: 3.7vw 9vw !important;
      width: 45vw;
    }
  }
`;
