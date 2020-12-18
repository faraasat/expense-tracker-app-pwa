import { BodyContainerStyles, SmallContainerStyles } from "./container.styles";
import { IChildNodes } from "../../Types/expense-types";

export const BodyContainer: React.FC<IChildNodes> = ({ children }) => {
  return <BodyContainerStyles>{children}</BodyContainerStyles>;
};

export const SmallContainer: React.FC<IChildNodes> = ({ children }) => {
  return <SmallContainerStyles>{children}</SmallContainerStyles>;
};
