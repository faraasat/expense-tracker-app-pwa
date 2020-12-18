import styled from "styled-components";
import { Container } from "@material-ui/core";

export const BodyContainerStyles = styled.div`
  && {
    display: block;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
    padding-bottom: 30px;

    @media only screen and (max-width: 600px) {
      margin: 0px !important;
      padding: 0px !important;
    }
  }
`;

export const SmallContainerStyles = styled(Container)`
  && {
    /* background-color: rgba(0, 81, 255, 0.589); */
    background-color: rgba(51, 56, 66, 0.589);
    max-width: 600px;

    @media only screen and (max-width: 600px) {
      background-color: rgba(0, 81, 255, 0.274);
      padding: 0px !important;
      margin: 0px !important;
      max-width: 100%;
    }
  }
`;
