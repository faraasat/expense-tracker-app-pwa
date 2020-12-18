import { Button } from "@material-ui/core";
import { IChildNodes, IChildElementNodes } from "../../Types/expense-types";
import {
  BalancedBtnWrapperStyles,
  BalancedFieldBtnInputStyles,
  BalancedFieldStyles,
  BalancedFieldTextStyles,
  BalancedFieldTextSubStyles,
} from "./form-inputs.styles";

export const BalancedField: React.FC<IChildNodes> = ({ children }) => {
  return <BalancedFieldStyles>{children}</BalancedFieldStyles>;
};

export const BalancedFieldText: React.FC<IChildNodes> = ({ children }) => {
  return <BalancedFieldTextStyles>{children}</BalancedFieldTextStyles>;
};

export const BalancedFieldTextSub: React.FC<IChildNodes> = ({ children }) => {
  return <BalancedFieldTextSubStyles>{children}</BalancedFieldTextSubStyles>;
};

export const BalancedBtnWrapper: React.FC<IChildNodes> = ({ children }) => {
  return <BalancedBtnWrapperStyles>{children}</BalancedBtnWrapperStyles>;
};

export const BalancedFieldBtnInput: React.FC<IChildElementNodes> = ({
  children,
}) => {
  return (
    <BalancedFieldBtnInputStyles as={Button} type="submit">
      {children}
    </BalancedFieldBtnInputStyles>
  );
};
