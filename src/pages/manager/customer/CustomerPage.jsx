import { useState, useEffect } from 'react';
import right from '../../../assets/images/right.png';
import customerService from '../../../services/customer.service';
import { Link } from 'react-router-dom';
import add from '../../../assets/images/add.png'




const Customer = () => {

    const [customer, setCustomer] = useState(null);
    const [status, setStatus] = useState('process');

    useEffect(() => {
        customerService.getListCustomer()
            .then(data => {
                setCustomer(data);
                setStatus('finish');
            })
            .catch(error => {
                console.error('There was an error!', error);
                setStatus('error');
            });
    }, []);



    return (
        <div className="Customer">
            <div className="container my-3">
                <div className="mx-1 my-1 bg-custom p-2 rounded">
                    <div className="d-flex " id="filter-bar">
                        <div className="dropdown w-15">
                            <button type="button" className="btn btn-primary dropdown-toggle w-100" data-bs-toggle="dropdown">
                                Role
                            </button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="">Admin</a></li>
                                <li><a className="dropdown-item" href="">Staff</a></li>
                            </ul>
                        </div>
                        <div className="w-15" style={{ marginRight: '0px', marginLeft: 'auto' }}>
                            <a href="add-customer" className="btn btn-success w-100">
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
                                        <th scope="col">Name</th>
                                        <th scope="col">Rank</th>
                                        <th scope="col">Phone Number</th>
                                        <th scope="col"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {customer.map((customer, index) => (

                                        <tr key={index}>
                                            <th scope="row">{customer.id}</th>
                                            <td>{customer.firstName}</td>
                                            <td>{customer.lastName}</td>
                                            <td>{customer.phoneNumber}</td>
                                            <td><Link to={`/manager/customers/${customer.id}`}><img src={right} alt="right"
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

export default Customer;