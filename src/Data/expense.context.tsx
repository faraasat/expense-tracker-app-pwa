import { createContext, useReducer } from "react";
import { IChildNodes } from "../Types/expense-types";
import ExpenseReducer from "./expense.reducer";
import cuid from "cuid";

const initialValue: any = {
  basic: [{ id: "", text: "", amount: 0 }],
};

export const ExpenseContext = createContext(initialValue);

export const ExpenseContextProvider: React.FC<IChildNodes> = ({ children }) => {
  const [state, dispatch] = useReducer(ExpenseReducer, initialValue);

  function insertBasicTransaction(text: string, amount: Number) {
    dispatch({
      type: "ADD_BASIC_TRANSACTION",
      payload: {
        id: cuid(),
        text: text,
        amount: amount,
      },
    });
  }

  function deleteBasicTransaction(id: string) {
    dispatch({
      type: "DELETE_BASIC_TRANSACTION",
      payload: id,
    });
  }

  return (
    <ExpenseContext.Provider
      value={{
        insertBasicTransaction,
        deleteBasicTransaction,
        transactions: state,
      }}
    >
      {children}
    </ExpenseContext.Provider>
  );
};
