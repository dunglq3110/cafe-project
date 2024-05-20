import ech from '../../../assets/images/ech.jpg';

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import StaffService from '../../../services/staff.service'


const EmployeeDetail = () => {

    const { id } = useParams();
    const [staff, setStaff] = useState(null);
    const [status, setStatus] = useState('process');

    useEffect(() => {
        StaffService.getStaffById(id)
            .then(data => {
                setStaff(data);
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

    if (status === 'empty' || !staff) {
        return <div>No data found</div>; // Or some empty state
    }
    return (
        <div className="container my-2 h-75">
            <div className="mx-2 bg-custom rounded h-100">
                <div>

                </div>
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
                                    <input type="text" className="form-control" id="inputName" value={staff.firstName + ' ' + staff.lastName} />
                                </div>
                                <div className="col-md-8 mt-2">
                                    <label for="inputEmail" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="inputEmail4" value={staff.email} />
                                </div>
                                <div className="col-md-4 mt-2">
                                    <label for="inputState" className="form-label">Gender</label>
                                    <input type="email" className="form-control" id="inputEmail4" value={staff.gender} />

                                </div>
                                <div className="col-md-6 mt-2">
                                    <label for="inputCity" className="form-label">Phone Number</label>
                                    <input type="tel" className="form-control" id="inputCity" value={staff.phoneNumber} />
                                </div>
                                <div className="col-md-6 mt-2">
                                    <label for="inputZip" className="form-label">Role</label>
                                    <input type="text" className="form-control" id="inputRole" value={staff.role} />
                                </div>
                                <div className="col-12 mt-2">
                                    <label for="inputAddress" className="form-label">Address</label>
                                    <input type="text" className="form-control" id="inputAddress" value={staff.address} />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default EmployeeDetail;