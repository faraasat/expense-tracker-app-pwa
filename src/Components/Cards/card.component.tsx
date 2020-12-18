import { IChildElementNodes } from "../../Types/expense-types";
import {
  IBasicCardComponentConfig,
  IBasicCardSymbolConfig,
  IBasicCardTextConfig,
} from "./card";
import {
  BasicCardsStyles,
  BasicCardTextStyles,
  BasicCardComponentStyles,
  BasicCardSymbolStyles,
} from "./card.styles";

export const BasicCards: React.FC<IChildElementNodes> = ({ children }) => {
  return <BasicCardsStyles>{children}</BasicCardsStyles>;
};

export const BasicCardComponent: React.FC<IBasicCardComponentConfig> = ({
  children,
  amount,
}) => {
  return (
    <BasicCardComponentStyles amount={amount}>
      {children}
    </BasicCardComponentStyles>
  );
};

export const BasicCardSymbol: React.FC<IBasicCardSymbolConfig> = ({
  children,
  amount,
}) => {
  return (
    <BasicCardSymbolStyles amount={amount}>{children}</BasicCardSymbolStyles>
  );
};

export const BasicCardText: React.FC<IBasicCardTextConfig> = ({
  children,
  ml,
  mr,
  amount,
}) => {
  return (
    <BasicCardTextStyles ml={ml} mr={mr} amount={amount}>
      {children}
    </BasicCardTextStyles>
  );
};
