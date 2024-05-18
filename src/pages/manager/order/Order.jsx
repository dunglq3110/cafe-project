import coffeecup from '../../../assets/images/coffee-cup.png'
import productService from '../../../services/product.service';
import MenuItem from './MenuItem';
import React, { useState, useEffect } from 'react';
import SearchBar from '../../../components/SearchBar';
import orderService from '../../../services/order.service';
import add from '../../../assets/images/add.png'
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import condimentService from '../../../services/condiment.service';
import CondimentItem from './CondimentItem';

const Order = () => {

    const [selectedProduct, setSelectedProduct] = useState(null)
    const [showOrderDetail, setShowOrderDetail] = useState(false);
    const [receipt, setReceipt] = useState(null)
    const [products, setProducts] = useState(null);
    const [condiments, setCondiments] = useState(null);
    const [status, setStatus] = useState('process');

    const [selectedOption, setSelectedOption] = useState('Product');




    const handleClick = (product) => {
        setSelectedProduct(product);
        setShowOrderDetail(true);
    };


    const newOrder = () => {
        orderService.newOrder()
            .then(data => {
                setReceipt(data); // set the receiptId with the data.id
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }
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
    useEffect(() => {
        orderService.getLastestProcessOrder()
            .then(data => {
                setReceipt(data); // set the receiptId with the data.id
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }, []);

    useEffect(() => {
        condimentService.getAll()
            .then(data => {
                setCondiments(data);
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }, []);


    return (
        <div class="h-100">
            <div className='search_bar'>
                <SearchBar
                    receipt={receipt}
                    newOrder={newOrder}>
                </SearchBar>

            </div>
            <div className={`Order menu_container w-100 ${showOrderDetail ? 'dim' : ''}`}>
                <div id="drink-show" className="h-100 w-100 ">
                    <div id="drink-item" className="d-flex w-100">
                        <div id="item" className="w-100 rounded">
                            <div id="food-show" className="mt-2">
                                <div className="title merriweather-regular-italic" id="filter-bar">
                                    Our Menu
                                </div>
                                <div id="food-option" className="d-flex flex-row text-align-center my-2">
                                    <select className="side-button center-layout" value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
                                        <option value="Product">Product</option>
                                        <option value="Condiment">Condiment</option>
                                    </select>
                                    <div className="side-button center-layout">Drink 1</div>
                                    <div className="side-button center-layout">Drink 1</div>
                                </div>
                                <div id="list-food" className="grid-container">
                                    {status === 'process' && <h1>Loading...</h1>}
                                    {status === 'finish' && (
                                        <>
                                            {(selectedOption === 'Product' ? products : condiments).map((item, index) => (
                                                <div class="card item-drink d-flex align-items-center">
                                                    <img src={coffeecup}
                                                        class="card-img-top w-75 h-75" alt="Laptop" />
                                                    <div class="card-body">
                                                        <div class="d-flex justify-content-between">
                                                            <h5 class="mb-0">{item.name} </h5>
                                                        </div>
                                                        <div id="orderbtn">
                                                            <button type="button" className="btn btn-info border border-2 border-dark rounded" onClick={() => handleClick(item)}>Order</button>
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
            {showOrderDetail && (
                <div className="order-detail">
                    {selectedOption === 'Product' ? (
                        <MenuItem
                            selectedProduct={selectedProduct}
                            receipt={receipt}
                            closeMenu={() => setShowOrderDetail(false)}
                        />
                    ) : (
                        <CondimentItem
                            selectedProduct={selectedProduct}
                            receipt={receipt}
                            closeMenu={() => setShowOrderDetail(false)}
                        />
                    )}
                </div>
            )}

            <ToastContainer />
        </div>
    );
}

export default Order;

