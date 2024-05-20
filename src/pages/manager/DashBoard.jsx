import { Bar, Pie } from 'react-chartjs-2';

import { CDBContainer } from 'cdbreact';
import { CategoryScale } from 'chart.js';
import Chart from 'chart.js/auto';
import React, { useEffect, useState } from 'react';
import reportService from '../../services/report.service';
import * as XLSX from 'xlsx';

const Dashboard = () => {
    const formatDate = (date) => {
        return date.toISOString().slice(0, 10);
    }
    Chart.register(CategoryScale);
    const years = Array.from({ length: 10 }, (_, i) => new Date().getFullYear() - i);

    const [selectedReportCategory, setSelectedReportCategory] = useState("revenue")
    //states for revenue report
    const [selectedView, setSelectedView] = useState("chart")
    const [selectedRevenueCategory, setSelectedRevenueCategory] = useState("totalRevenue")
    const [selectedChartType, setSelectedChartType] = useState("bar")
    const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
    //states for product report
    const [selectedStartDate, setSelectedStartDate] = useState(formatDate(new Date())); // set to current day
    const [selectedEndDate, setSelectedEndDate] = useState(formatDate(new Date())); // set to current day
    const [selectedProductCategory, setselectedProductCategory] = useState("product")

    const [responseData, setResponseData] = useState([]);
    const [status, setStatus] = useState('finish');

    const exportToExcel = () => {
        const ws = XLSX.utils.json_to_sheet(responseData);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "Report");
        XLSX.writeFile(wb, "report.xlsx");
    }


    const [chartData, setChartData] = useState({
        labels: [],
        datasets: [
            {
                label: '',
                backgroundColor: 'rgba(194, 116, 161, 0.5)',
                borderColor: 'rgb(194, 116, 161)',
                data: [],
            },
        ],
    });

    useEffect(() => {
        if (selectedReportCategory === "revenue" && selectedView === "chart") {
            const labels = responseData.map(item => item.label);
            const data = responseData.map(item => item[selectedRevenueCategory]);

            setChartData({
                labels: labels,
                datasets: [
                    {
                        label: selectedRevenueCategory,
                        backgroundColor: 'rgba(194, 116, 161, 0.5)',
                        borderColor: 'rgb(194, 116, 161)',
                        data: data,
                    },
                ],
            });
        }
    }, [responseData, selectedRevenueCategory, selectedReportCategory, selectedView]);




    useEffect(() => {
        if (selectedReportCategory === "revenue") {
            reportService.getYearReport(selectedYear)
                .then(data => {
                    setResponseData(data);
                    setStatus('finish');
                })
                .catch(error => {
                    console.error('There was an error!', error);
                    setStatus('error');
                });
        } else if (selectedReportCategory === "product") {
            let reportMethod;
            if (selectedProductCategory === "product") {
                reportMethod = reportService.getProductReport;
            } else if (selectedProductCategory === "condiment") {
                reportMethod = reportService.getCondimentReport;
            } else if (selectedProductCategory === "productType") {
                reportMethod = reportService.getProductTypeReport;
            }

            if (reportMethod) {
                reportMethod(selectedStartDate, selectedEndDate)
                    .then(data => {
                        setResponseData(data);
                        setStatus('finish');
                    })
                    .catch(error => {
                        console.error('There was an error!', error);
                        setStatus('error');
                    });
            }
        }
    }, [selectedYear, selectedStartDate, selectedEndDate, selectedReportCategory, selectedProductCategory]); // add dependencies here


    if (status === 'process') {
        return <div>Loading...</div>; // Or some loading spinner
    }

    if (status === 'error') {
        return <div>Error loading data</div>; // Or some error message
    }

    if (status === 'empty') {
        return <div>No data found</div>; // Or some empty state
    }

    return (
        <>
            <div className="w-100 thumnail" style={{ height: '90%' }}>
                <div class="my-3 h-100 ">
                    <div class="mx-3 h-100 bg-custom p-2 rounded">
                        <div class="d-flex h-auto" id="filter-bar">
                            <div class="w-15">
                                <label class="form-label mb-0" style={{ color: "black", zIndex: "1", marginLeft: "10px" }}>Status</label>
                                <select className="form-select form-select-lg" style={{ marginTop: '-10px', backgroundColor: '#b5783d' }}
                                    value={selectedReportCategory}
                                    onChange={(e) => setSelectedReportCategory(e.target.value)}>
                                    <option value="revenue">Revenue</option>
                                    <option value="product">Product</option>
                                </select>
                            </div>

                            {selectedReportCategory === 'revenue' && (
                                <>
                                    <div class="dropdown w-15 d-flex">
                                        <select className="side-button center-layout"
                                            value={selectedView}
                                            onChange={(e) => setSelectedView(e.target.value)}>
                                            <option value="chart">Chart</option>
                                            <option value="table">Table</option>
                                        </select>
                                    </div>

                                    <div class="dropdown w-15 d-flex">
                                        <select className="side-button center-layout" value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)}>
                                            {years.map(year => <option key={year} value={year}>{year}</option>)}
                                        </select>
                                    </div>

                                    <div class="dropdown d-flex">
                                        <select className="side-button center-layout"
                                            value={selectedRevenueCategory}
                                            onChange={(e) => setSelectedRevenueCategory(e.target.value)}
                                            disabled={selectedView === 'table'}>
                                            <option value="totalRevenue">Total Revenue</option>
                                            <option value="productQuantity">Product Quantity</option>
                                            <option value="condimentQuantity">Condiment Quantity</option>
                                            <option value="discounted">Discounted</option>
                                        </select>
                                    </div>
                                    <div class="dropdown w-15 d-flex">
                                        <select className="side-button center-layout"
                                            value={selectedChartType}
                                            onChange={(e) => setSelectedChartType(e.target.value)}
                                            disabled={selectedView === 'table'}>
                                            <option value="bar">Bar chart</option>
                                            <option value="pie">Pie chart</option>
                                        </select>
                                    </div>
                                </>
                            )}
                            {selectedReportCategory === 'product' && (
                                <>
                                    <div class="dropdown w-15 mx-3">
                                        <label class="form-label mb-0" style={{ color: "black", zIndex: "2", marginLeft: "10px" }}>Start date</label>
                                        <input type="date" className="form form-select-lg w-100" style={{ marginTop: '-10px', backgroundColor: '#b5783d', zIndex: "1" }}
                                            value={selectedStartDate}
                                            onChange={(e) => setSelectedStartDate(e.target.value)} />
                                    </div>

                                    <div class=" w-15">
                                        <label class="form-label mb-0 " style={{ color: "black", zIndex: "1000", marginLeft: "10px" }}>End date</label>
                                        <input type="date" className="form form-select-lg w-100" style={{ marginTop: '-10px', backgroundColor: '#b5783d' }}
                                            value={selectedEndDate}
                                            onChange={(e) => setSelectedEndDate(e.target.value)} />
                                    </div>

                                    <div class="w-15">
                                        <label class="form-label mb-0" style={{ color: "black", zIndex: "2", marginLeft: "10px" }}>Type</label>
                                        <select className="form-select form-select-lg" style={{ marginTop: '-10px', backgroundColor: '#b5783d', zIndex: "1" }}
                                            value={selectedProductCategory}
                                            onChange={(e) => setselectedProductCategory(e.target.value)}>
                                            <option value="product">Product</option>
                                            <option value="condiment">Condiment</option>
                                            <option value="productType">Product Type</option>
                                        </select>
                                    </div>
                                </>
                            )}
                            <div class="dropdown w-15 d-flex" style={{ background: '' }}>
                                <button className="side-button center-layout" onClick={exportToExcel}>Export</button>
                            </div>
                            <div class="dropdown">
                                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Dropdown button
                                </button>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <input class="dropdown-item" type="text" placeholder="Input field" />
                                    <a class="dropdown-item" href="#">Option 1</a>
                                    <a class="dropdown-item" href="#">Option 2</a>
                                    <a class="dropdown-item" href="#">Option 3</a>
                                </div>
                            </div>

                        </div>
                        {selectedReportCategory === 'revenue' && selectedView === 'chart' && (
                            <div class="mt-3 h-75 w-75">
                                <div className="w-100" >
                                    <div className='d-flex w-100 h-100'>
                                        <div className='my-1 p-5 rounded w-100 h-100' style={{ background: "#fef2c7" }}>
                                            <CDBContainer className='m-2 w-100 h-100'>
                                                {selectedChartType === 'bar' && <Bar data={chartData} options={{ responsive: true }} />}
                                                {selectedChartType === 'pie' && <Pie data={chartData} options={{ responsive: true }} />}
                                            </CDBContainer>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        {selectedReportCategory === 'revenue' && selectedView === 'table' && (
                            <table className="table table-striped  table-hover">
                                <thead className="thead-dark">
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Label</th>
                                        <th scope="col">Total Revenue</th>
                                        <th scope="col">Total Product Quantity</th>
                                        <th scope="col">Total Condiment Quantity</th>
                                        <th scope="col">Total Discounted</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {responseData.map((item, index) => (
                                        <tr key={index}>
                                            <th scope="row">{index + 1}</th>
                                            <td>{item.label}</td>
                                            <td>{item.totalRevenue}</td>
                                            <td>{item.productQuantity}</td>
                                            <td>{item.condimentQuantity}</td>
                                            <td>{item.discounted}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}
                        {selectedReportCategory === 'product' && (
                            <table className="table table-striped  table-hover">
                                <thead className="thead-dark">
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Label</th>
                                        <th scope="col">Total Quantity</th>
                                        <th scope="col">Total Revenue</th>
                                        <th scope="col">Discounted</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {responseData.map((item, index) => (
                                        <tr key={index}>
                                            <th scope="row">{index + 1}</th>
                                            <td>{item.label}</td>
                                            <td>{item.totalQuantity}</td>
                                            <td>{item.totalRevenue}</td>
                                            <td>{item.discounted}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}


                    </div>
                </div>
            </div>


        </>

    );
};

export default Dashboard;