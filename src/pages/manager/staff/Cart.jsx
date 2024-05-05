import React, { useEffect } from 'react';
import coffee from '../../../assets/images/coffee-cup.png'
const Cart = ({ cartDetailRef }) => {

    useEffect(() => {
        // Attach the ref to the cartDetail element
        // if (cartDetailRef.current) {
        //     // Now you can manipulate cartDetailRef.current as needed
        //     // For example, add event listeners or modify its content
        // }
    }, [cartDetailRef]);
    return (
        <div id="cartDetail" className="Cart container w-75" role="dialog">
            <div class="h-100 rounded" style={{ backgroundColor: '#a47152' }}>
                <div class="container py-5 h-100">
                    <div class="row d-flex justify-content-center align-items-center h-100">
                        <div class="col-12">
                            <div class="card card-registration card-registration-2" style={{ borderRadius: "15px" }}>
                                <div class="card-body p-0">
                                    <div class="row g-0">
                                        <div class="col-lg-8">
                                            <div class="p-5">
                                                <div class="d-flex justify-content-between align-items-center mb-5">
                                                    <h1 class="fw-bold mb-0 text-black">Cart Detail</h1>


                                                    <h6 class="mb-0 text-muted">3 items</h6>

                                                </div>
                                                <hr class="my-4"></hr>
                                                <div class="row mb-4 d-flex justify-content-between align-items-center">
                                                    <div class="col-md-2 col-lg-2 col-xl-2">
                                                        <img
                                                            src={coffee}
                                                            class="img-fluid rounded-3" alt="Cotton T-shirt" />
                                                    </div>
                                                    <div class="col-md-3 col-lg-3 col-xl-3">
                                                        <h6 class="text-black mb-0">Espresso</h6>
                                                    </div>
                                                    <div class="col-md-4 col-lg-4 col-xl-3 d-flex flex-column">
                                                        <div>
                                                            <button data-mdb-button-init data-mdb-ripple-init class="btn btn-link"
                                                            >
                                                                <i class="fas fa-minus"></i>
                                                            </button>

                                                            <input id="form1" min="0" name="quantity" value="1" type="number"
                                                                class="form-control form-control-sm" />

                                                            <button data-mdb-button-init data-mdb-ripple-init class="btn btn-link"
                                                            >
                                                                <i class="fas fa-plus"></i>
                                                            </button>
                                                        </div>

                                                    </div>
                                                    <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                                        <h6 class="mb-0">€ 44.00</h6>
                                                    </div>
                                                    <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                                                        <a href="#!" class="float-end text-black">
                                                            <i class="fas fa-times">
                                                                <span class="material-symbols-outlined">
                                                                    close
                                                                </span>
                                                            </i>
                                                        </a>
                                                    </div>
                                                </div>



                                                <hr class="my-4"></hr>

                                                <div class="pt-5">
                                                    <h6 class="mb-0"><a href="#!" class="text-body"><i
                                                        class="fas fa-long-arrow-alt-left me-2"></i>Back to shop</a></h6>
                                                </div>

                                            </div>
                                        </div>
                                        <div class="col-lg-4 bg-grey">
                                            <div class="p-5">
                                                <h3 class="fw-bold mb-5 mt-2 pt-1">Summary</h3>
                                                <hr class="my-4"></hr>

                                                <div class="d-flex flex-column justify-content-between mb-4">
                                                    <h5 class="text-uppercase">items 3</h5>
                                                    <h5>€ 132.00</h5>
                                                </div>
                                                <div class="mb-4 pb-2">
                                                    <div data-mdb-input-init class="form-outline">
                                                        <label class="form-label" for="phonenumber">Phone number</label>

                                                        <input type="text" id="phonemnumber" class="form-control form-control-lg" />
                                                    </div>
                                                </div>

                                                <h5 class="text-uppercase mb-3">Give code</h5>

                                                <div class="mb-5">
                                                    <div data-mdb-input-init class="form-outline">
                                                        <input type="text" id="code" class="form-control form-control-lg" />
                                                        <label class="form-label" for="code">Enter your code</label>
                                                    </div>
                                                </div>

                                                <hr class="my-4"></hr>

                                                <div class="d-flex flex-column justify-content-between mb-5">
                                                    <h5 class="text-uppercase">Total price</h5>
                                                    <h5>€ 137.00</h5>
                                                </div>

                                                <button type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-dark btn-block btn-lg"
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