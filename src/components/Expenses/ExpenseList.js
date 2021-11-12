import React from 'react';

import ExpenseItem from './ExpenseItem';
import './ExpenseList.css';

function ExpenseList(props) {

    if(props.filteredExpenses === 0) {
        return <h2 className='expenses-list__fallbakck'>Found no expenses.</h2>;
    }

    return (
        <ul className='expenses-list'>
            {props.filteredExpenses.map(expense =>
            (<ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            />
            ))}
        </ul>
    );
}

export default ExpenseList;