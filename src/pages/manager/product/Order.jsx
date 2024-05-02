import right from '../../../assets/images/right.png'
import React, { useState } from 'react';
const Order = () => {
    const [isVisible, setIsVisible] = useState(false);

    const OrderDetail = () => {setIsVisible(!isVisible);}; 
    
    return (
        <div className="Order" class="h-100">
            <div className="my-3 h-100">
                <div className="mx-2 my-1 bg-custom p-2 rounded h-100">
                    <div className="d-flex " id="filter-bar">
                        <div className="col-3">
                            <input type="date" className="form-control w-75" id="inputBirthday" placeholder="" />
                        </div>
                        <div className="dropdown col-3">
                            <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown">
                                Status
                            </button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="./Order#">Waiting</a></li>
                                <li><a className="dropdown-item" href="./Order#">Done</a></li>
                                <li><a className="dropdown-item" href="./Order#">Execute</a></li>
                            </ul>
                        </div>
                        <div className="dropdown col-3">
                            <button type="button" className="btn btn-success dropdown-toggle" data-bs-toggle="dropdown">
                                Space
                            </button>
                            <ul className="dropdown-menu col-3">
                                <li><a className="dropdown-item" href="./Order#">1</a></li>
                                <li><a className="dropdown-item" href="./Order#">2</a></li>
                                <li><a className="dropdown-item" href="./Order#">3</a></li>
                            </ul>
                        </div>
                        <div id="reset" className="d-flex px-3 rounded align-items-center bg-warning">
                            Reset
                        </div>
                    </div>
                    <div className='d-flex h-100'>
                        <div className={`${isVisible ? 'col-md-8':'col-md-12'}`}>
                            <table className="table table-striped table-bordered rounded table-hover mt-1">
                                <caption>List of Orders</caption>
                                <thead className="thead-dark">
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Desk</th>
                                        <th scope="col">Space</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Staff</th>
                                        <th scope="col">Date</th>
                                        <th scope="col">Total Price</th>
                                        <th scope="col"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Desk 1</td>
                                        <td>Space 1</td>
                                        <td>Waiting</td>
                                        {/* if waiting red, active yelow, done green */}
                                        <td>Trinh</td>
                                        <td>1/1/1010</td>
                                        <td>$100</td>
                                        <td><img src={right} alt="right" className="button-transition" onClick={OrderDetail}/></td>
                                    </tr>
                                </tbody>

                            </table>
                        </div>
                        <div className={`h-100 col-md-4 mx-1 ${!isVisible ? 'd-none' : ''}`}>
                            <div class="my-1 bg-white p-2 rounded h-75 ">
                                <div class="container w-100 h-100">
                                    <img src={right} style={{ width: '30px', height: '30px' }}  onClick={OrderDetail} />
                                    <div class="w-100 h-50 bg-secondary rounded mt-2">
                                        <div className='w-100 h-100'>
                                            <div className="row w-100 mx-2 my-2 d-flex align-items-center" style={{ height: '15%' }}>
                                                <div className='bg-white w-50 h-100 mt-2 rounded col col-md-6 d-flex align-items-center'>
                                                    <div className="d-flex align-items-center ">Coffee</div>
                                                </div>
                                                <div className="col-md-6 row h-75 mt-2 w-50">
                                                    <div className='h-100 w-50 col d-inline justify-content-center align-items-center bg-white rounded-circle mx-1' id="size"></div>
                                                    <div class="col d-inline bg-white mx-1 rounded fit-content"></div>
                                                    <div class="col d-inline bg-white mx-1 rounded fit-content"></div>
                                                    <div class="col d-inline bg-white mx-1 rounded fit-content"></div>
                                                </div>
                                            </div>

                                            <div className="row w-100 mx-2 my-2 d-flex align-items-center" style={{ height: '15%' }}>
                                                <div className='bg-white w-50 h-100 mt-2 rounded col col-md-6 d-flex align-items-center'>
                                                    <div className="d-flex align-items-center ">Coffee</div>
                                                </div>
                                                <div className="col-md-6 row h-75 mt-2 w-50">
                                                    <div className='h-100 w-50 col d-inline justify-content-center align-items-center bg-white rounded-circle mx-1' id="size"></div>
                                                    <div class="col d-inline bg-white mx-1 rounded fit-content"></div>
                                                    <div class="col d-inline bg-white mx-1 rounded fit-content"></div>
                                                    <div class="col d-inline bg-white mx-1 rounded fit-content"></div>
                                                </div>
                                            </div>

                                            <div className="row w-100 mx-2 my-2 d-flex align-items-center" style={{ height: '15%' }}>
                                                <div className='bg-white w-50 h-100 mt-2 rounded col col-md-6 d-flex align-items-center'>
                                                    <div className="d-flex align-items-center ">Coffee</div>
                                                </div>
                                                <div className="col-md-6 row h-75 mt-2 w-50">
                                                    <div className='h-100 w-50 col d-inline justify-content-center align-items-center bg-white rounded-circle mx-1' id="size"></div>
                                                    <div class="col d-inline bg-white mx-1 rounded fit-content"></div>
                                                    <div class="col d-inline bg-white mx-1 rounded fit-content"></div>
                                                    <div class="col d-inline bg-white mx-1 rounded fit-content"></div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div class="col mt-3">
                                        <form class="row d-flex justify-content-center align-items-center">
                                            <div className="col-md-6">
                                                <label for="inputCustomer" className="form-label">Customer</label>
                                                <input type="text" className="form-control" id="inputName" />
                                            </div>
                                            <div className="col-md-6">
                                                <label for="inputStaff" className="form-label">Staff</label>
                                                <input type="text" className="form-control" id="inputName" />
                                            </div>
                                            <div className="col-md-6">
                                                <label for="inputTotal" className="form-label">Total</label>
                                                <input type="number" className="form-control" id="inputName" placeholder='$' />
                                            </div>
                                            <div className="col-md-6">
                                                <label for="inputDiscount" className="form-label">Discount</label>
                                                <input type="text" className="form-control" id="inputName" />
                                            </div>
                                            <button className="col-6 bg-success mt-4 rounded" style={{ height: '50px' }}>Payment</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    );
}

export default Order;

