export interface IChildNodes {
  children:
    | React.ReactChild
    | React.ReactChildren
    | React.ReactChild[]
    | React.ReactChildren[];
}

export interface IChildElementNodes {
  children:
    | React.ReactChild
    | React.ReactChildren
    | React.ReactChild[]
    | React.ReactChildren[]
    | React.ReactElement
    | React.ReactElement[]
    | React.JSXElementConstructor;
}

export type TransactionType = {
  text: string;
  amount: number;
  id: string;
};

export type TransactionBasicType = {
  basic: {
    id: string;
    text: string;
    amount: number;
  }[];
};

export type TransactionAction = {
  type: string;
  payload: TransactionBasicType | string;
};

export type DispatchType = {
  type: string;
  payload?: TransactionType | string;
};

export type ReducerReturnType = {
  (prevState: TransactionBasicType, action: TransactionAction): {
    basic: (
      | string
      | TransactionBasicType
      | {
          id: string;
          text: string;
          amount: number;
        }
    )[];
  };
};
