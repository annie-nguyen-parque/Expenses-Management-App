import React, { useState } from 'react';

import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpenseList from './ExpenseList';
import ExpensesChart from './ExpensesChart';

function Expenses(props) {

    const [filterYear, setFilterYear] = useState('2021');

    function filterYearHandler(year) {
        setFilterYear(year);
    }

    const filteredExpenses = 
        props.expenses.filter(expense =>
            expense.date.getFullYear().toString() === filterYear);


    return (
        <Card className='expenses'>
            <ExpensesFilter 
                selected={filterYear} 
                onFilterYear={filterYearHandler}
            />
            <ExpensesChart expenses={filteredExpenses} />
            <ExpenseList filteredExpenses={filteredExpenses}/>
            
        </Card>
    );
}

export default Expenses;