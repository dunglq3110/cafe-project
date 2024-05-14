import coffeecup from '../../../assets/images/coffee-cup.png'
import MenuItem from './MenuItem';
import React, { useState } from 'react';
const Order = () => {

    const [showOrderDetail, setShowOrderDetail] = useState(false);

    const handleClick = () => {
        setShowOrderDetail(true);
    };

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
                                    <div class="card item-drink d-flex align-items-center">
                                        <img src={coffeecup}
                                            class="card-img-top w-75 h-75" alt="Laptop" />
                                        <div class="card-body">
                                            <div class="d-flex justify-content-between">
                                                <h5 class="mb-0">Espresso </h5>
                                                <h5 class="text-dark mb-0 mx-3">$44</h5>
                                            </div>
                                            <div id="orderbtn">
                                                <button type="button" className="btn btn-info border border-2 border-dark rounded" onClick={handleClick}>Order</button>
                                            </div>
                                        </div>
                                    </div>
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
