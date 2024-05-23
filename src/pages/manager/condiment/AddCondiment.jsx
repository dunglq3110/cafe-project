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
                window.location.href = 'condiments';

            })
            .catch(error => {
                console.error('Failed to add Condiment:', error);
                toast.error('Failed to add Condiment');
                window.location.href = 'condiments';
            });
    };


    return (
        <div className="h-100 d-flex justify-content-center">
            <div className="w-75 ">
                <div className="row my-4 py-3 bg-custom rounded w-100">
                    <div class="mx-1 my-2" style={{ height: "5%" }}>
                        <a href='condiments' class="handle h-100">
                            <div class="material-symbols-outlined fs-2" >
                                close
                            </div>
                        </a>
                    </div>
                    <div className="col col-4 d-inline align-items-center justify-content-center mb-2">
                        <img src={ech} className="rounded mx-auto d-block w-75 h-100 img-thumbnail" />
                    </div>
                    <div className="col col-8">
                        <div className="container mb-4">
                            <form className="row">
                                <div className="col-md-6">
                                    <label htmlFor="inputFirstName" className="form-label text-uppercase fw-bold">Name</label>
                                    <input type="text" className="form-control" id="inputFirstName" ref={nameRef} />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="inputLastName" className="form-label text-uppercase fw-bold">Price</label>
                                    <input type="number" className="form-control" id="inputLastName" ref={unitPriceRef} />
                                </div>

                                <div className="mt-4 d-flex justify-content-around">
                                    <a className='w-15' href='condiments'>
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