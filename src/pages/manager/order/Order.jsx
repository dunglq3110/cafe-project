import coffeecup from '../../../assets/images/coffee-cup.png'
import productService from '../../../services/product.service';
import MenuItem from './MenuItem';
import React, { useState, useEffect } from 'react';

const Order = () => {

    const [showOrderDetail, setShowOrderDetail] = useState(false);
    const [receiptId, setReceiptId] = useState(second)
    const handleClick = () => {
        setShowOrderDetail(true);
    };

    const [products, setProducts] = useState(null);
    const [status, setStatus] = useState('process');

    useEffect(() => {
        productService.getAll()
            .then(data => {
                setProducts(data);
                setStatus('finish');
            })
            .catch(error => {
                console.error('There was an error!', error);
                setStatus('error');
            });
    }, []);

    return (
        <div class="h-100">
            <div className={`Order menu_container w-100 ${showOrderDetail ? 'dim' : ''}`}>
                <div id="drink-show" className="h-100 w-100 ">
                    <div id="drink-item" className="d-flex w-100">

                        <div id="item" className="w-100 rounded">
                            <div id="food-show" className="mt-2">
                                <div className="title merriweather-regular-italic" id="filter-bar">
                                    Our Menu
                                </div>
                                <div id="food-option" className="d-flex flex-row text-align-center justify-content-center my-2">
                                    <div className="side-button center-layout">Drink 1</div>
                                    <div className="side-button center-layout">Drink 1</div>
                                    <div className="side-button center-layout">Drink 1</div>
                                </div>
                                <div id="list-food" className="grid-container">
                                    {status === 'process' && <h1>Loading...</h1>}
                                    {status === 'finish' && (
                                        <>
                                            {products.map((product, index) => (
                                                <div class="card item-drink d-flex align-items-center">
                                                    <img src={coffeecup}
                                                        class="card-img-top w-75 h-75" alt="Laptop" />
                                                    <div class="card-body">
                                                        <div class="d-flex justify-content-between">
                                                            <h5 class="mb-0">{product.name} </h5>
                                                        </div>
                                                        <div id="orderbtn">
                                                            <button type="button" className="btn btn-info border border-2 border-dark rounded" onClick={handleClick}>Order</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </>
                                    )}
                                    {status === 'error' && <h1>Đợi 1 xíu...</h1>}
                                    {status === 'empty' && <h1>Empty...</h1>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            {
                showOrderDetail && (
                    <div className="order-detail">
                        <MenuItem></MenuItem>
                    </div>
                )
            }

        </div>



    );
}

export default Order;

