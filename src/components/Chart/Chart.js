import React from 'react';

import ChartBar from './ChartBar';
import './Chart.css';

function Chart(props) {

    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMax = Math.max(...dataPointValues); //bc Math.max() wants a list of arguments instead of an array. ex: Math.max(1, 2, 3)

    return <div className='chart'>
        {props.dataPoints.map((dataPoint) => {
            <ChartBar 
                key={dataPoint.label}
                value={dataPoint.value}
                maxValue={totalMax}
                label={dataPoint.label}
            />
        })}
    </div>
}

export default Chart;