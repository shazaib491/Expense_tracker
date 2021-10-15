import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";
function ExpensesList(props) {
    if(props.item.length===0){
        return <p className="expenses-list__fallback">No Expenses found</p>
    }
  return <ul className="expenses-list">
      {props.item.map((element) => (
      <ExpenseItem 
        key={element.id}
        title={element.title}
        amount={element.amount}
        date={element.date}
      />
    ))}
  </ul>;
}

export default ExpensesList;
