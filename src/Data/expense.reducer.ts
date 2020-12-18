import { TransactionBasicType } from "../Types/expense-types";

export default function ExpenseReducer(
  state: TransactionBasicType,
  action: { type: string; payload: any }
) {
  switch (action.type) {
    case "ADD_BASIC_TRANSACTION": {
      return { ...state, basic: [action.payload, ...state.basic] };
    }
    case "DELETE_BASIC_TRANSACTION": {
      return {
        ...state,
        basic: [...state.basic.filter((st: any) => st.id !== action.payload)],
      };
    }
    default:
      return state;
  }
}
