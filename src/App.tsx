import { useContext, useEffect, useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TextField } from "@material-ui/core";
import "./App.css";
import { ExpenseContext } from "./Data/expense.context";
import { Loader, TransactionType } from "./Types/expense-types";
import {
  BasicCardComponent,
  BasicCards,
  BasicCardText,
} from "./Components/Cards/card.component";
import {
  BodyContainer,
  SmallContainer,
} from "./Components/Container/container.component";
import {
  BalancedField,
  BalancedFieldText,
  BalancedFieldTextSub,
  BalancedBtnWrapper,
  BalancedFieldBtnInput,
} from "./Components/FormInputs/form-inputs.component";
import { GridContainer, SmallGrid } from "./Components/Grid/grid.component";
import {
  ButtonBaseAlignment,
  PaperAlignment,
  PaperComponent,
} from "./Components/Paper/paper.component";
import {
  BalancedText,
  BalancedWrapper,
  MainHeading,
} from "./Components/Typography/typo.component";
import { BasicCardSymbolStyles } from "./Components/Cards/card.styles";

const App: React.FC<Loader> = ({ hideLoader, showLoader }) => {
  const {
    insertBasicTransaction,
    transactions,
    deleteBasicTransaction,
  } = useContext(ExpenseContext);
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const ref: React.RefObject<HTMLFormElement> = useRef<HTMLFormElement>(null);

  useEffect(() => {
    hideLoader();
  }, [transactions, hideLoader]);

  const toastProps = {
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  };

  const handleAddition = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text === "") {
      toast("🤔 Do not leave text empty!!", {
        ...toastProps,
        position: "top-right",
      });
      toast.clearWaitingQueue();
      return;
    } else if (text.length < 3) {
      toast("🤔 Text must be of 3 or more characters!!", {
        ...toastProps,
        position: "top-right",
      });
      toast.clearWaitingQueue();
      return;
    } else if (Number(amount) === 0) {
      toast("🤔 Amount should not be equal to zero!!", {
        ...toastProps,
        position: "top-right",
      });
      toast.clearWaitingQueue();
      return;
    }
    insertBasicTransaction(text, Number(amount));
    ref.current?.reset();
    setText("");
    setAmount("");
  };

  const getIncome = (): number => {
    let income = 0;
    for (let i = 0; i < transactions?.basic?.length; i++) {
      if (transactions?.basic[i]?.amount > 0)
        income += Number.parseFloat(transactions?.basic[i]?.amount);
    }
    return income;
  };

  const getExpense = (): number => {
    let expense = 0;
    for (let i = 0; i < transactions?.basic?.length; i++) {
      if (transactions?.basic[i]?.amount < 0)
        expense += Number.parseFloat(transactions?.basic[i]?.amount);
    }
    return expense;
  };

  return (
    <BodyContainer>
      <GridContainer>
        <SmallContainer>
          <SmallGrid>
            <MainHeading>Expense Tracker App</MainHeading>
            <BalancedWrapper>
              <BalancedText>Your Balance</BalancedText>
              <BalancedText>$ {getIncome() - getExpense()}</BalancedText>
            </BalancedWrapper>
            <div>
              <PaperAlignment>
                <ButtonBaseAlignment
                  mrnormal="5px !important"
                  mrsmall="0px !important"
                >
                  <PaperComponent
                    color="skyblue !important"
                    textshadow="1px 1px rgba(47, 0, 255, 0.555) !important"
                  >
                    <div>INCOME</div>
                    <div>$ {getIncome()}</div>
                  </PaperComponent>
                </ButtonBaseAlignment>
                <ButtonBaseAlignment
                  mlnormal="5px !important"
                  mlsmall="0px !important"
                  mtsmall="15px !important"
                >
                  <PaperComponent
                    color="pink !important"
                    textshadow="1px 1px rgba(255, 0, 179, 0.493) !important"
                  >
                    <div>EXPENSE</div>
                    <div>$ {getExpense()}</div>
                  </PaperComponent>
                </ButtonBaseAlignment>
              </PaperAlignment>
            </div>
            <BalancedWrapper>
              <BalancedText>History 📃</BalancedText>
            </BalancedWrapper>
            <BasicCards>
              {transactions?.basic?.map((transaction: TransactionType) => {
                if (
                  transaction.text === "" &&
                  transaction.amount === 0 &&
                  transaction.id === ""
                ) {
                  return null;
                }
                return (
                  <BasicCardComponent
                    key={String(transaction?.id)}
                    amount={transaction?.amount}
                  >
                    <BasicCardText amount={transaction.amount} ml="10px">
                      {transaction?.text}
                    </BasicCardText>
                    <BasicCardText
                      amount={transaction.amount}
                      mr="10px"
                      ml="auto !important"
                    >
                      {transaction?.amount}
                    </BasicCardText>
                    <BasicCardSymbolStyles
                      amount={transaction.amount}
                      as="span"
                      onClick={() => deleteBasicTransaction(transaction.id)}
                    >
                      &times;
                    </BasicCardSymbolStyles>
                  </BasicCardComponent>
                );
              })}
            </BasicCards>
            <BalancedWrapper>
              <BalancedText>Add New Transaction 👇</BalancedText>
            </BalancedWrapper>
            <form
              ref={ref}
              onSubmit={(e) => handleAddition(e)}
              className="balance-form"
            >
              <BalancedField>
                <BalancedFieldText>Transaction Text</BalancedFieldText>
                <TextField
                  onChange={(e) => setText(e.target.value)}
                  label="Enter Transaction Text"
                  variant="filled"
                  className="balance-text-field__input"
                />
              </BalancedField>
              <BalancedField>
                <BalancedFieldText>
                  Amount{" "}
                  <BalancedFieldTextSub>
                    (Negative - Expense | Positive - Income)
                  </BalancedFieldTextSub>
                </BalancedFieldText>
                <TextField
                  type="number"
                  onChange={(e) => setAmount(e.target.value)}
                  label="Enter Amount"
                  variant="filled"
                  className="balance-text-field__input balance-text-field__input-2"
                />
              </BalancedField>
              <BalancedBtnWrapper>
                <BalancedFieldBtnInput>Submit</BalancedFieldBtnInput>
              </BalancedBtnWrapper>
            </form>
          </SmallGrid>
        </SmallContainer>
      </GridContainer>
      <ToastContainer />
    </BodyContainer>
  );
};

export default App;
