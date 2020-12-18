import { TextField } from "@material-ui/core";
import "./App.css";
import {
  BasicCardComponent,
  BasicCards,
  BasicCardSymbol,
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

function App() {
  const transactions = [{ text: "asd", amount: 3, id: "asdas" }];

  return (
    <BodyContainer>
      <GridContainer>
        <SmallContainer>
          <SmallGrid>
            <MainHeading>Expense Tracker App</MainHeading>
            <BalancedWrapper>
              <BalancedText>Your Balance</BalancedText>
              <BalancedText>$ 0</BalancedText>
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
                    <div>$ 0</div>
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
                    <div>$ 0</div>
                  </PaperComponent>
                </ButtonBaseAlignment>
              </PaperAlignment>
            </div>
            <BalancedWrapper>
              <BalancedText>History 📃</BalancedText>
            </BalancedWrapper>
            <BasicCards>
              {transactions?.map((transaction: any) => {
                if (
                  transaction.text === "" &&
                  transaction.amount === 0 &&
                  transaction.id === ""
                ) {
                  return null;
                }
                return (
                  <BasicCardComponent
                    key={String(transaction.id)}
                    amount={transaction.amount}
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
                    <BasicCardSymbol
                      amount={transaction.amount}
                      // onClick={() => deleteBasicTransaction(transaction.id)}
                    >
                      &times;
                    </BasicCardSymbol>
                  </BasicCardComponent>
                );
              })}
            </BasicCards>
            <BalancedWrapper>
              <BalancedText>Add New Transaction 👇</BalancedText>
            </BalancedWrapper>
            <form
              // ref={ref}
              // onSubmit={(e) => handleAddition(e)}
              className="balance-form"
            >
              <BalancedField>
                <BalancedFieldText>Transaction Text</BalancedFieldText>
                <TextField
                  // onChange={(e) => setText(e.target.value)}
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
                  // onChange={(e) => setAmount(e.target.value)}
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
    </BodyContainer>
  );
}

export default App;
