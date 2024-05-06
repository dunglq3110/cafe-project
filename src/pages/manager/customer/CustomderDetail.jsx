import ech from '../../../assets/images/ech.jpg';

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import StaffService from '../../../services/staff.service'
import customerService from '../../../services/customer.service';


const CustomerDetail = () => {

    const { id } = useParams();
    const [customer, setCustomer] = useState(null);
    const [status, setStatus] = useState('process');

    useEffect(() => {
        customerService.getCustomerById(id)
            .then(data => {
                setCustomer(data);
                setStatus('finish');
            })
            .catch(error => {
                console.error('There was an error!', error);
                setStatus('error');
            });
    }, [id]);

    if (status === 'process') {
        return <div>Loading...</div>; // Or some loading spinner
    }

    if (status === 'error') {
        return <div>Error loading data</div>; // Or some error message
    }

    if (status === 'empty' || !customer) {
        return <div>No data found</div>; // Or some empty state
    }
    return (
        <div className="Employee_detail h-75">
            <div className="mx-2 bg-custom rounded h-100">
                <div className="row mx-2 my-2">
                    <div className="col col-4 d-inline align-items-center justify-content-center mt-4">
                        <img src={ech} className="rounded mx-auto d-block w-75 h-75 img-thumbnail" />
                        <div className="mt-4 d-flex justify-content-around">
                            <button type="button" className="btn btn-danger">Remove</button>
                            <button type="button" className="btn btn-info">Edit</button>
                        </div>
                    </div>
                    <div className="col col-8">
                        <div className="row">
                        </div>
                        <div className="container my-2 mb-4">
                            <form className="row">
                                <div className="col-md-12">
                                    <label for="inputName" className="form-label">Full name</label>
                                    <input type="text" className="form-control" id="inputName" value={customer.firstName + ' ' + customer.lastName} />
                                </div>
                                <div className="col-md-8 mt-2">
                                    <label for="inputEmail" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="inputEmail4" />
                                </div>
                                <div className="col-md-4 mt-2">
                                    <label for="inputState" className="form-label">Gentle</label>
                                    <select id="inputState" className="form-select">
                                        <option selected>Male</option>
                                        <option>Female</option>
                                        <option>Other</option>
                                    </select>
                                </div>

                                <div className="col-md-6 mt-2">
                                    <label for="inputCity" className="form-label">Phone Number</label>
                                    <input type="tel" className="form-control" id="inputCity" />
                                </div>
                                <div className="col-md-4 mt-2">
                                    <label for="inputState" className="form-label">State</label>
                                    <select id="inputState" className="form-select">
                                        <option selected>Active</option>
                                        <option>Inactive</option>
                                    </select>
                                </div>
                                <div className="col-md-2 mt-2">
                                    <label for="inputZip" className="form-label">Role</label>
                                    <input type="text" className="form-control" id="inputRole" />
                                </div>
                                <div className="col-12 mt-2">
                                    <label for="inputAddress" className="form-label">Birthday</label>
                                    <input type="date" className="form-control" id="inputBirthday" placeholder="" />
                                </div>
                                <div className="col-12 mt-2">
                                    <label for="inputAddress" className="form-label">Address</label>
                                    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default CustomerDetail;