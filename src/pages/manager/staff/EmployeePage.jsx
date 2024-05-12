import right from '../../../assets/images/right.png'

import add from '../../../assets/images/add.png'
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import StaffService from '../../../services/staff.service'

const EmployeePage = () => {


    const [roleFilter, setRoleFilter] = useState('ALL');
    const [staff, setStaff] = useState(null);
    const [status, setStatus] = useState('process');

    useEffect(() => {
        StaffService.getListStaff()
            .then(data => {
                setStaff(data);
                setStatus('finish');
            })
            .catch(error => {
                console.error('There was an error!', error);
                setStatus('error');
            });
    }, []);

    return (
        <div className="Employee_page">
            <div className="container my-3">
                <div className="mx-1 my-1 bg-custom p-2 rounded">
                    <div className="d-flex" id="filter-bar">
                        <div className="dropdown w-15 d-flex">
                            <button type="button" className="btn btn-primary dropdown-toggle w-50" data-bs-toggle="dropdown">
                                {roleFilter}
                            </button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" onClick={() => setRoleFilter('ALL')}>All</a></li>
                                <li><a className="dropdown-item" onClick={() => setRoleFilter('MANAGER')}>Manager</a>
                                </li>
                                <li><a className="dropdown-item" onClick={() => setRoleFilter('STAFF')}>Staff</a></li>
                            </ul>
                        </div>
                        <div class="" style={{ marginRight: '0px', marginLeft: 'auto',width:'10%' }}>
                                <a class="btn btn-success w-100" href='addstaff'>
                                    <img src={add} alt="add" className="button-transition" />
                                </a>
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
                                    {staff.slice(1).filter(employee => roleFilter === 'ALL' || employee.role === roleFilter).map((employee, index) => (

                                        <tr key={index}>
                                            <th scope="row">{employee.id}</th>
                                            <td>{employee.firstName}</td>
                                            <td>{employee.lastName}</td>
                                            <td>{employee.role}</td>
                                            <td>{employee.phoneNumber}</td>
                                            <td><Link to={`/manager/staffs/${employee.id}`}><img src={right} alt="right"
                                                className="button-transition" /></Link>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}
                        {status === 'error' && <h1>Đợi 1 xíu...</h1>}
                        {status === 'empty' && <h1>Empty...</h1>}
                    </div>

                </div>
            </div>
        </div>
    );

}

export default EmployeePage;