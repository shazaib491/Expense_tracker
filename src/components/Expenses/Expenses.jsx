import Card from "./../UI/Card";
import ExpenseItem from "./../Expenses/ExpenseItem";

import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("2020");

  const filterChangeHanlder = (selectedYear) => {
    setFilterYear(selectedYear);
  };

  const filterExpenses = props.item.filter((expenses) => {
    return expenses.date.getFullYear().toString() === filterYear;
  });




  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filterYear}
          onChangeFilter={filterChangeHanlder}
        />
        {/* {filterExpenses.length === 0 && <p>No expenses Found</p>}
        {filterExpenses.length > 0 &&
          filterExpenses.map((element) => (
            <ExpenseItem
              key={element.id}
              title={element.title}
              amount={element.amount}
              date={element.date}
            />
          ))} */}
          <ExpensesChart expenses={filterExpenses} />
          <ExpensesList item={filterExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
