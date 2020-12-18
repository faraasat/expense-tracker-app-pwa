import styled from "styled-components";
import { Grid } from "@material-ui/core";

export const GridContainerStyles = styled(Grid)`
  && {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
  }
`;

export const SmallGridStyles = styled(Grid)`
  && {
    display: flex;
    flex-direction: column;
    /* background-color: rgba(94, 201, 250, 0.76); */
    background-color: rgba(198, 229, 243, 0.555);
    margin-top: 20px;
    margin-bottom: 20px;
    align-items: center;
    justify-content: center;

    @media only screen and (max-width: 600px) {
      background-color: rgba(94, 201, 250, 0.267);
      margin-top: 0px;
      margin-bottom: 0px;
      width: 100% !important;
    }
  }
`;
