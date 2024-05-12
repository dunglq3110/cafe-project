import ech from '../../../assets/images/ech.jpg';
import { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';
import useFetchObject from '../../../hooks/useFetchObject';

const AddStaff = () => {
    return (
        <div className="AddStaff">
            <div className="mx-5 my-2 bg-custom rounded h-100">
                <div className="row mx-2 my-2">
                    <div className="col col-4 d-inline align-items-center justify-content-center mt-4">
                        <img src={ech} className="rounded mx-auto d-block w-100 h-100 img-thumbnail" />
                    </div>
                    <div className="col col-8">
                        <div className="row">
                        </div>
                        <div className="container my-2 mb-4">
                            <form className="row">
                                <div className="col-md-12">
                                    <label for="inputName" className="form-label text-uppercase fw-bold">Name</label>
                                    <input type="text" className="form-control" id="inputName" />
                                </div>
                                <div className="col-md-8 mt-2">
                                    <label for="inputEmail" className="form-label text-uppercase fw-bold">Email</label>
                                    <input type="email" className="form-control" id="inputEmail4" />
                                </div>
                                <div className="col-md-4 mt-2">
                                    <label for="inputState" className="form-label text-uppercase fw-bold">Gentle</label>
                                    <select id="inputState" className="form-select">
                                        <option selected>Male</option>
                                        <option>Female</option>
                                        <option>Other</option>
                                    </select>
                                </div>

                                <div className="col-md-6 mt-2">
                                    <label for="inputCity" className="form-label text-uppercase fw-bold">Phone Number</label>
                                    <input type="tel" className="form-control" id="inputCity" />
                                </div>
                                <div className="col-md-4 mt-2">
                                    <label for="inputState" className="form-label text-uppercase fw-bold">State</label>
                                    <select id="inputState" className="form-select">
                                        <option selected>Active</option>
                                        <option>Inactive</option>
                                    </select>
                                </div>
                                <div className="col-md-2 mt-2">
                                    <label for="inputZip" className="form-label text-uppercase fw-bold">Role</label>
                                    <input type="text" className="form-control" id="inputRole" />
                                </div>
                                <div className="col-12 mt-2">
                                    <label for="inputAddress" className="form-label text-uppercase fw-bold">Birthday</label>
                                    <input type="date" className="form-control" id="inputBirthday" placeholder="" />
                                </div>
                                <div className="col-12 mt-2">
                                    <label for="inputAddress" className="form-label text-uppercase fw-bold">Address</label>
                                    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                                </div>
                            </form>
                            <div className="mt-4 d-flex justify-content-around">
                                <a href="staffs" className='w-15'>
                                    <button type="button" className="btn btn-danger w-100">CANCEL</button>
                                </a>
                                <a href="staffs" className='w-15'>
                                    <button type="button" className="btn btn-success w-100">ADD</button>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default AddStaff;