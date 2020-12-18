import styled from "styled-components";
import { Card } from "@material-ui/core";
import {
  IBasicCardComponentStyleConfig,
  IBasicCardSymbolStyleConfig,
  IBasicCardTextStyleConfig,
} from "./card";

export const BasicCardsStyles = styled.div`
  pointer-events: none;
  box-sizing: border-box;
  margin-top: 20px;
  width: 380px;

  @media only screen and (max-width: 600px) {
    box-sizing: border-box;
    margin-top: 20px;
    width: 75vw;
  }
`;

export const BasicCardComponentStyles = styled(
  Card
)<IBasicCardComponentStyleConfig>`
  display: flex;
  margin: 8px 0px;
  padding: 5px;
  font-family: "Sansita Swashed", cursive;
  font-size: 18px;
  font-weight: 800;
  border-right: ${(props) =>
    props?.amount! > 0 ? "10px solid skyblue" : "10px solid pink"};

  &:hover {
    background-color: rgba(255, 0, 0, 0.349) !important;
  }

  @media only screen and (max-width: 600px) {
    font-size: 5vw;
  }
`;

export const BasicCardSymbolStyles = styled.span<IBasicCardSymbolStyleConfig>`
  pointer-events: auto;
  margin: 0px 15px 0px 5px !important;
  font-family: "Work Sans", sans-serif;
  font-size: 22px !important;
  cursor: pointer !important;
  color: ${(props) =>
    props?.amount! > 0 ? "rgba(111, 1, 255, 0.89)" : "rgb(247, 55, 7)"};

  @media only screen and (max-width: 600px) {
    font-size: 5vw !important;
  }
`;

export const BasicCardTextStyles = styled.span<IBasicCardTextStyleConfig>`
  && {
    text-shadow: 1px 1px rgba(1, 1, 1, 0.7);
    letter-spacing: 1px;
    margin-left: ${(props) => props.ml};
    margin-right: ${(props) => props.mr};
    color: ${(props) =>
      props?.amount! > 0 ? "rgba(111, 1, 255, 0.89)" : "rgb(247, 55, 7)"};
  }
`;
