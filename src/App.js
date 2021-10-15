import Expenses from "./components/Expenses/Expenses";
import "./App.css";
import NewExpenses from "./components/Expenses/NewExpenses/NewExpenses";
import { useState } from "react";
const DUMMY_CONTENT = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 50,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "Car Insurance",
    amount: 70,
    date: new Date(2020, 2, 18),
  },
  {
    id: "e3",
    title: "New Desk",
    amount: 80.12,
    date: new Date(2021, 7, 14),
  },
];
function App() {
  const [expneses, setExpenses] = useState(DUMMY_CONTENT);
  const expenseDataHandler = (expenseData) => {

    setExpenses((prevExpenses) => {
      return [expenseData, ...prevExpenses]
    })
  }
 

  return (
    <div>
      <NewExpenses onAddExpenseData={expenseDataHandler} />
      <Expenses item={expneses}  />
    </div>
  );
}

export default App;
