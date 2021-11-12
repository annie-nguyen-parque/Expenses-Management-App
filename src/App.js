import React, { useState } from 'react';

import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

// array of data
const INITIAL_EXPENSES =
  [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: 'e2',
      title: 'New TV',
      amount: 799.49,
      date: new Date(2021, 2, 12)
    },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

// App is a root component, rendered into a single HTML page
function App() {

  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  function addExpenseHandler(expense) {
    setExpenses(preExpenses => { return [expense, ...preExpenses]});
  };

  return (
    // JSX: 1 root div per return
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />

      <Expenses expenses={expenses} />
    </div>
  );
}

export default App; 


// If you update state that depends on the previous state, you should use a function as a paramater instead of explicitly updating 
// ex: const [counter, setCounter] = useState(1);
// setCounter(counter + 1) --> WRONG
// setCounter(counter => {counter + 1};);