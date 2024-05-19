import React, { useState, useParams, useEffect } from 'react';
import { Bar, Pie } from 'react-chartjs-2';

import { CDBContainer } from 'cdbreact';
import { CategoryScale } from 'chart.js';
import Chart from 'chart.js/auto';
import reportService from '../../services/report.service';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Dashboard = () => {

    Chart.register(CategoryScale);
    const [dataType, setdataType] = useState("WEEK");
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
                    <label class="form-label mb-0" style={{ color: "white", zIndex: "1", marginLeft: "10px" }}>Period</label>
                    <select className="form-select form-select-lg" style={{ marginTop: '-10px',backgroundColor:'#b5783d' }} onChange={(e) => setdataType(e.target.value)}>
                        <option value="WEEK">WEEK</option>
                        <option value="MONTH">MONTH</option>
                        <option value="YEAR">YEAR</option>
                    </select>
                </div>
                <div className='w-15 mx-5 my-3'>
                    <label class="form-label mb-0" style={{ color: "white", zIndex: "1", marginLeft: "10px" }}>Type Chart</label>
                    <select
                        className="form-select form-select-lg"
                        style={{ marginTop: '-10px',backgroundColor:"#b5783d" }}
                        value={chartType}
                        onChange={(e) => setChartType(e.target.value)}
                    >
                        <option value="Bar Chart">Bar Chart</option>
                        <option value="Pie Chart">Pie Chart</option>
                    </select>

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