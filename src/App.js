import React, { useState } from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const initial_expenses = [
  {
    id: "e1",
    title: "New Laptop",
    amount: 50500.12,
    date: new Date(2021, 4, 11),
  },
  { id: "e2",
    title: "New Keyboard", 
    amount: 799.49, 
    date: new Date(2021, 2, 12) 
  },
  {
    id: "e3",
    title: "Motorcycle Insurance",
    amount: 7300,
    date: new Date(2021, 9, 23),
  },
  {
    id: "e4",
    title: "Travel",
    amount: 450,
    date: new Date(2021, 6, 10),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(initial_expenses);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <div>
        <h1 className="heading">Expense Tracker</h1>
      </div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
