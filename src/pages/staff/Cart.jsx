import React, { useEffect } from 'react';
import coffee from '../../../assets/images/coffee-cup.png'
const Cart = () => {
    return (
        <div id="cartDetail" className="Cart container w-75" role="dialog">
            <div className="h-100 rounded" style={{ backgroundColor: '#a47152' }}>
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12">
                            <div className="card card-registration card-registration-2" style={{ borderRadius: "15px" }}>
                                <div className="card-body p-0">
                                    <div className="row g-0">
                                        <div className="col-lg-8">
                                            <div className="p-5">
                                                <div className="d-flex justify-content-between align-items-center mb-5">
                                                    <h1 className="fw-bold mb-0 text-black">Cart Detail</h1>


                                                    <h6 className="mb-0 text-muted">3 items</h6>

                                                </div>
                                                <hr className="my-4"></hr>
                                                <div className="row mb-4 d-flex justify-content-between align-items-center">
                                                    <div className="col-md-2 col-lg-2 col-xl-2">
                                                        <img
                                                            src={coffee}
                                                            className="img-fluid rounded-3" alt="Cotton T-shirt" />
                                                    </div>
                                                    <div className="col-md-3 col-lg-3 col-xl-3">
                                                        <h6 className="text-black mb-0">Espresso</h6>
                                                    </div>
                                                    <div className="col-md-4 col-lg-4 col-xl-3 d-flex flex-column">
                                                        <div>
                                                            <button data-mdb-button-init data-mdb-ripple-init className="btn btn-link"
                                                            >
                                                                <i className="fas fa-minus"></i>
                                                            </button>

                                                            <input id="form1" min="0" name="quantity" value="1" type="number"
                                                                className="form-control form-control-sm" />

                                                            <button data-mdb-button-init data-mdb-ripple-init className="btn btn-link"
                                                            >
                                                                <i className="fas fa-plus"></i>
                                                            </button>
                                                        </div>

                                                    </div>
                                                    <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                                        <h6 className="mb-0">€ 44.00</h6>
                                                    </div>
                                                    <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                                                        <a href="#!" className="float-end text-black">
                                                            <i className="fas fa-times">
                                                                <span className="material-symbols-outlined">
                                                                    close
                                                                </span>
                                                            </i>
                                                        </a>
                                                    </div>
                                                </div>



                                                <hr className="my-4"></hr>

                                                <div className="pt-5">
                                                    <h6 className="mb-0"><a href="" className="text-body"><i
                                                        className="fas fa-long-arrow-alt-left me-2"></i>Back to shop</a></h6>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="col-lg-4 bg-grey">
                                            <div className="p-5">
                                                <h3 className="fw-bold mb-5 mt-2 pt-1">Summary</h3>
                                                <hr className="my-4"></hr>

                                                <div className="d-flex flex-column justify-content-between mb-4">
                                                    <h5 className="text-uppercase">items 3</h5>
                                                    <h5>€ 132.00</h5>
                                                </div>
                                                <div className="mb-4 pb-2">
                                                    <div data-mdb-input-init className="form-outline">
                                                        <label className="form-label" for="phonenumber">Phone number</label>

                                                        <input type="text" id="phonemnumber" className="form-control form-control-lg" />
                                                    </div>
                                                </div>

                                                <h5 className="text-uppercase mb-3">Give code</h5>

                                                <div className="mb-5">
                                                    <div data-mdb-input-init className="form-outline">
                                                        <input type="text" id="code" className="form-control form-control-lg" />
                                                        <label className="form-label" for="code">Enter your code</label>
                                                    </div>
                                                </div>

                                                <hr className="my-4"></hr>

                                                <div className="d-flex flex-column justify-content-between mb-5">
                                                    <h5 className="text-uppercase">Total price</h5>
                                                    <h5>€ 137.00</h5>
                                                </div>

                                                <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-dark btn-block btn-lg"
                                                    data-mdb-ripple-color="dark">Register</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart;