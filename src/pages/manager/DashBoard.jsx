import React, { useState } from 'react';
import { Bar, Pie } from 'react-chartjs-2';

import { CDBContainer } from 'cdbreact';
import { CategoryScale } from 'chart.js';
import Chart from 'chart.js/auto';

const Dashboard = () => {
    Chart.register(CategoryScale);
    const [dataType, setdataType] = useState('WEEK');
    const [chartType, setChartType] = useState('Bar Chart');

    const weekData = {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        datasets: [
            {
                label: 'My First dataset',
                backgroundColor: 'rgba(194, 116, 161, 0.5)',
                borderColor: 'rgb(194, 116, 161)',
                data: [65, 59, 90, 81, 56, 55, 40],
            },
        ],
    };
    const monthData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
            {
                label: 'Monthly Sales',
                backgroundColor: 'rgba(194, 116, 161, 0.5)',
                borderColor: 'rgb(194, 116, 161)',
                data: [1200, 1500, 1800, 1600, 2000, 2100],
            },
        ],
    };
    const yearData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
            {
                label: 'Annual Revenue',
                backgroundColor: 'rgba(71, 225, 167, 0.5)',
                borderColor: 'rgb(71, 225, 167)',
                data: [5000, 5500, 6200, 5900, 5800, 6000, 6100, 6300, 6400, 6200, 5900, 6000],
            },
        ],
    };



    // Update data based on dataType
    const data = checkData(dataType);
    function checkData(dataType) {
        if (dataType === 'WEEK') {
            return weekData;
        } else if (dataType === 'MONTH') {
            return monthData;
        } else if (dataType === 'YEAR') {
            return yearData;
        }
    }


    return (
        <div className='w-100'>
            <div className='d-flex'>

                <div className='w-15 mx-5 my-3'>
                    <div class="dropdown w-100 d-flex">
                        <button type="button" class="btn btn-success dropdown-toggle w-75" data-bs-toggle="dropdown">
                            {dataType}
                        </button>
                        <ul class="dropdown-menu">
                            <li><a className="dropdown-item" onClick={() => setdataType('WEEK')}>Week</a></li>
                            <li><a className="dropdown-item" onClick={() => setdataType('MONTH')}>Month</a></li>
                            <li><a className="dropdown-item" onClick={() => setdataType('YEAR')}>Year</a></li>
                        </ul>
                    </div>
                </div>
                <div className='w-15 mx-5 my-3'>
                    <div class="dropdown w-100 d-flex">
                        <button type="button" class="btn btn-success dropdown-toggle w-75" data-bs-toggle="dropdown">
                            {chartType}
                        </button>
                        <ul class="dropdown-menu">
                            <li><a className="dropdown-item" onClick={() => setChartType('Bar Chart')}>Bar Chart</a></li>
                            <li><a className="dropdown-item" onClick={() => setChartType('Pie Chart')}>Pie Chart</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='d-flex'>
                <div className='mx-5 my-1 p-5 w-75 rounded' style={{ background: "#fef2c7" }}>

                    <CDBContainer className='m-2'>
                        {chartType === 'Bar Chart' && <Bar data={data} options={{ responsive: true }} />}
                        {chartType === 'Pie Chart' && <Pie data={data} options={{ responsive: true }} />}
                    </CDBContainer>
                </div>
                <div>
                    <button>Export</button>
                </div>
            </div>

        </div>

    );
};

export default Dashboard;