import right from '../../../assets/images/right.png'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useFetch from '../../../hooks/useFetch'

const EmployeePage = () => {

    const [staff, status, setStaff] = useFetch('http://localhost:8080/manager/staffs');

    return (
        <div className="Employee_page">
            <div className="container my-3">
                <div className="mx-1 my-1 bg-custom p-2 rounded">
                    <div className="d-flex " id="filter-bar">
                        <div className="dropdown w-15">
                            <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown">
                                Role
                            </button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="./EmployeePage#">Admin</a></li>
                                <li><a className="dropdown-item" href="./EmployeePage#">Staff</a></li>
                            </ul>
                        </div>
                        <div id="reset" className="d-flex px-3 rounded align-items-center bg-warning">
                            Reset
                        </div>
                    </div>
                    <div className="mt-3">
                        {status === 'process' && <h1>Loading...</h1>}
                        {status === 'finish' && (
                            <table className="table table-striped  table-hover">
                                <thead className="thead-dark">
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">First Name</th>
                                    <th scope="col">Last Name</th>
                                    <th scope="col">Role</th>
                                    <th scope="col">Phone Number</th>
                                    <th scope="col"></th>
                                </tr>
                                </thead>
                                <tbody>
                                {staff.map((employee, index) => (
                                    <tr key={index}>
                                        <th scope="row">{employee.id}</th>
                                        <td>{employee.firstName}</td>
                                        <td>{employee.lastName}</td>
                                        <td>{employee.role}</td>
                                        <td>{employee.phoneNumber}</td>
                                        <td><img src={right} alt="right" className="button-transition" /></td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        )}
                        {status === 'error' && <h1>Error...</h1>}
                        {status === 'empty' && <h1>Empty...</h1>}
                    </div>

                </div>
            </div>
        </div>
    );

}

export default EmployeePage;