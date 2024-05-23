import ech from '../../../assets/images/ech.jpg';
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import CustomerService from '../../../services/customer.service';
import condimentService from '../../../services/condiment.service';
import productService from '../../../services/product.service';

const AddProduct = () => {

    const navigate = useNavigate();


    const sizeSRef = useRef();
    const sizeMRef = useRef();
    const sizeLRef = useRef();

    const nameRef = useRef();
    const imageRef = useRef();
    const discountRef = useRef();
    const producTypeRef = useRef();
    const productStatusRef = useRef();

    const handleAddClick = () => {
        const product = {
            name: nameRef.current.value,
            image: imageRef.current.value,
            discount: discountRef.current.value,
            productType: producTypeRef.current.value,
            productStatus: "ABLE",
            sizes: [
                { name: 'S', price: sizeSRef.current.value },
                { name: 'M', price: sizeMRef.current.value },
                { name: 'L', price: sizeLRef.current.value },
            ],

        };
        console.log(product)
        productService.addProduct(product)
            .then(data => {
                console.log('Product added:', data);
                toast.success('Product added successfully!');
                window.location.href = 'products';


            })
            .catch(error => {
                console.error('Failed to add Product:', error);
                toast.error('Failed to add Product');
                window.location.href = 'products';
            });
    };


    return (
        <div className="">
            <div className="mx-5 my-2 bg-custom rounded h-100">
                <div className="row mx-2 my-2">
                    <div class="mx-1 my-2" style={{ height: "5%" }}>
                        <a href='products' class="handle h-100">
                            <div class="material-symbols-outlined fs-2" >
                                close
                            </div>
                        </a>
                    </div>
                    <div className="col col-4 d-inline align-items-center justify-content-center mt-4">
                        <img src={ech} className="rounded mx-auto d-block w-100 h-100 img-thumbnail" />
                    </div>
                    <div className="col col-8">
                        <div className="row">
                        </div>
                        <div className="container my-2 mb-4">
                            <form className="row">
                                <div className="col-md-12">
                                    <label htmlFor="inputFirstName" className="form-label text-uppercase fw-bold">Name</label>
                                    <input type="text" className="form-control" id="inputFirstName" ref={nameRef} />
                                </div>
                                <div className="col-md-12">
                                    <label htmlFor="inputLastName" className="form-label text-uppercase fw-bold">Image URL</label>
                                    <input type="text" className="form-control" id="inputLastName" ref={imageRef} />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="inputFirstName" className="form-label text-uppercase fw-bold">Discount</label>
                                    <input type="number" step="0.01" className="form-control" id="inputFirstName" ref={discountRef} />
                                </div>
                                <div className="col-6 md-6">
                                    <label htmlFor="inputGender" className="form-label text-uppercase fw-bold">Product Type</label>
                                    <select id="inputGender" className="form-select" ref={producTypeRef}>
                                        <option value="CAFE" selected>Cafe</option>
                                        <option value="MILKTEA">Milk Tea</option>
                                        <option value="SOFTDRINK" >Soft Drink</option>
                                        <option value="SMOOTHIE">Smoothie</option>
                                        <option value="FOOD">Food</option>
                                    </select>
                                </div>
                                <div className="col-md-4 mt-2">
                                    <label htmlFor="inputSizeS" className="form-label text-uppercase fw-bold">Size S Price</label>
                                    <input type="number" step="0.01" className="form-control" id="inputSizeS" ref={sizeSRef} />
                                </div>
                                <div className="col-md-4 mt-2">
                                    <label htmlFor="inputSizeM" className="form-label text-uppercase fw-bold">Size M Price</label>
                                    <input type="number" step="0.01" className="form-control" id="inputSizeM" ref={sizeMRef} />
                                </div>
                                <div className="col-md-4 mt-2">
                                    <label htmlFor="inputSizeL" className="form-label text-uppercase fw-bold">Size L Price</label>
                                    <input type="number" step="0.01" className="form-control" id="inputSizeL" ref={sizeLRef} />
                                </div>



                                <div className="mt-4 d-flex justify-content-around">
                                    <a className='w-15'>
                                        <Link to="/manager/products">

                                            <button type="button" className="btn btn-danger w-100">CANCEL</button>
                                        </Link>
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

export default AddProduct;