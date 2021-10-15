import React from "react";
import Card from "./../UI/Card";
import Expensedate from "./../Expenses/ExpenseDate";
import "./ExpenseItem.css";
const ExpenseItem = (props) => {
  const clickHandler=()=>{
  }
  return (
    <li>
    <Card className="expense-item">
      <Expensedate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
        <button onClick={clickHandler}>Change title</button>
      </div>
    </Card>
    </li>
  );
};

export default ExpenseItem;
