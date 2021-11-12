import React, { useState } from 'react';

import './ExpenseForm.css';

function ExpenseForm(props) {

    // C1: // NOTE: pass an object into userState()
    // const [userInput, setUserInput] = useState({enteredTitle: '',
    //                                             enteredAmount: '',
    //                                             enteredDate: ''});

    // function titleChangeHandler(event) {
    //     setUserInput((prevState) => {
    //         return { ...prevState, enteredTitle: event.target.value };
    //     });
    // };
    // function amountChangeHandler(event) {};
    // function dateChangeHandler(event) {};

    // C2:
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    function titleChangeHandler(event) {
        setEnteredTitle(event.target.value); // change the value of enteredTitle
    };
    function amountChangeHandler(event) {
        setEnteredAmount(event.target.value);
    };
    function dateChangeHandler(event) {
        setEnteredDate(event.target.value);
    };

    function submitHandler(event) {
        event.preventDefault(); // bc page will be reloaded when a submit button clicked in a <form/>. The code prevent the reloading

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,  // NOTE: to make enteredAmount a number, instead of a string
            date: new Date(enteredDate) // convert a date string to a date object 
        };

        props.onSaveExpenseData(expenseData); // NOTE: pass data to parent 'NewExpense'
        // clear the input once submit button is clicked
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');

        props.onStopEditing();
    };

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' value={enteredTitle} onChange={titleChangeHandler}/>
                    {/* onChange to change the state, value to keep the value b4b clearing inputs */}
                </div>

                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min='0.01' step='0.01' value={enteredAmount} onChange={amountChangeHandler}/>
                </div>

                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min='2019-01-01' max='2022-12-31' value={enteredDate} onChange={dateChangeHandler}/>
                </div>
            </div>

            <div className='new-expense__actions'>
                <button type='button' onClick={props.onStopEditing}>Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;