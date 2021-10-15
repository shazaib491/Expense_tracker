import React, { useState } from "react";
import "./NewExpenses.css";
import ExpensesForm from "./ExpensesForm";
export default function NewExpenses(props) {
  const [isEditing, setIsEditing] = useState(false);
  const onSaveExpensesDataHandler = (enteredExpenseData) => {
    const expensesData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpenseData(expensesData);
    setIsEditing(false);
  };

  const startEditingHandler=()=>{
setIsEditing(true)
  }
  const stopEditngHandler = () => {
    setIsEditing(false);
  };
  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add Expenses</button>
      )}
      {isEditing && (
        <ExpensesForm
          onSaveExpensesData={onSaveExpensesDataHandler}
          onCancel={stopEditngHandler}
        />
      )}
    </div>
  );
}
