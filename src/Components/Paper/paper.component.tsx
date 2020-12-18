import { IChildNodes } from "../../Types/expense-types";
import { IButtonBaseConfig, IPaperStyleConfig } from "./paper";
import {
  PaperAlignmentStyles,
  ButtonBaseAlignmentStyles,
  PaperComponentStyles,
} from "./paper.styles";

export const PaperAlignment: React.FC<IChildNodes> = ({ children }) => {
  return <PaperAlignmentStyles>{children}</PaperAlignmentStyles>;
};

export const ButtonBaseAlignment: React.FC<IButtonBaseConfig> = ({
  children,
  mlnormal,
  mrnormal,
  mlsmall,
  mrsmall,
  mtsmall,
}) => {
  return (
    <ButtonBaseAlignmentStyles
      mlnormal={mlnormal}
      mrnormal={mrnormal}
      mlsmall={mlsmall}
      mrsmall={mrsmall}
      mtsmall={mtsmall}
    >
      {children}
    </ButtonBaseAlignmentStyles>
  );
};

export const PaperComponent: React.FC<IPaperStyleConfig> = ({
  children,
  color,
  textshadow,
}) => {
  return (
    <PaperComponentStyles color={color} textshadow={textshadow}>
      {children}
    </PaperComponentStyles>
  );
};
