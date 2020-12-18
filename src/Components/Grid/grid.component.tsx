import { IChildNodes } from "../../Types/expense-types";
import { GridContainerStyles, SmallGridStyles } from "./grid.styles";

export const GridContainer: React.FC<IChildNodes> = ({ children }) => {
  return <GridContainerStyles>{children}</GridContainerStyles>;
};

export const SmallGrid: React.FC<IChildNodes> = ({ children }) => {
  return <SmallGridStyles>{children}</SmallGridStyles>;
};
