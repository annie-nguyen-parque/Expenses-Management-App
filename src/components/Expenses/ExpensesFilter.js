import React from 'react';

import './ExpensesFilter.css';

function ExpensesFilter(props) {

    function yearSubmitHandler(event) {
        props.onFilterYear(event.target.value);
    }

    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label for='years'>Filter by year</label>

                <select name='years' value={props.selected} onChange={yearSubmitHandler}>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                </select>
            </div>
        </div>
    );
};

export default ExpensesFilter;