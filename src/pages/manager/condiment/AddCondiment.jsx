import ech from '../../../assets/images/ech.jpg';
import { useState, useEffect, useRef } from 'react';

import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import CustomerService from '../../../services/customer.service';
import condimentService from '../../../services/condiment.service';

const AddCondiment = () => {
    const nameRef = useRef();
    const unitPriceRef = useRef();

    const navigate = useNavigate();

    const handleAddClick = () => {
        const condiment = {
            name: nameRef.current.value,
            unitPrice: unitPriceRef.current.value,

        };
        console.log(condiment)
        condimentService.addCondiment(condiment)
            .then(data => {
                console.log('Condiment added:', data);
                toast.success('Condiment added successfully!');

            })
            .catch(error => {
                console.error('Failed to add Condiment:', error);
                toast.error('Failed to add Condiment');
            });
    };


    return (
        <div className="">
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
                                <div className="col-md-6">
                                    <label htmlFor="inputFirstName" className="form-label text-uppercase fw-bold">Name</label>
                                    <input type="text" className="form-control" id="inputFirstName" ref={nameRef} />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="inputLastName" className="form-label text-uppercase fw-bold">Price</label>
                                    <input type="text" className="form-control" id="inputLastName" ref={unitPriceRef} />
                                </div>

                                <div className="mt-4 d-flex justify-content-around">
                                    <a className='w-15' href='staffs'>
                                        <button type="button" className="btn btn-danger w-100">CANCEL</button>
                                    </a>
                                    <a className='w-15'>
                                        <button type="button" className="btn btn-success w-100" onClick={handleAddClick}>ADD</button>
                                    </a>
                                </div>
                            </form>
                        </div>

                    </div>

                </div>

            </div>
            <ToastContainer />
        </div>
    );

}

export default AddCondiment;