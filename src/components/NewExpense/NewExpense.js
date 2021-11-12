import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

function NewExpense(props) {

    const [isEditing, setIsEditing] = useState(false)

    function saveExpenseDataHandler(enteredExpenseData) {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        };
        
        props.onAddExpense(expenseData); // NOTE: pass data upto parent "App.js" (Lifting State up)
    };

    function stopEditingHandler() {
        setIsEditing(false);
    }

    function startEditingHandler() {
        setIsEditing(true);
    }

    return (
        <div className='new-expense'>
            {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onStopEditing={stopEditingHandler}/>}
            {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
        </div>
    );
};

export default NewExpense;