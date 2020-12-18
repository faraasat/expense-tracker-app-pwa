import { IChildNodes } from "../../Types/expense-types";
import {
  BalancedWrapperStyle,
  BalanceTextStyle,
  MainHeadingStyles,
} from "./typo.styles";

export const MainHeading: React.FC<IChildNodes> = ({ children }) => {
  return <MainHeadingStyles>{children}</MainHeadingStyles>;
};

export const BalancedWrapper: React.FC<IChildNodes> = ({ children }) => {
  return <BalancedWrapperStyle>{children}</BalancedWrapperStyle>;
};

export const BalancedText: React.FC<IChildNodes> = ({ children }) => {
  return <BalanceTextStyle>{children}</BalanceTextStyle>;
};
