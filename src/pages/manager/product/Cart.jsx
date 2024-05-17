import React, { useEffect, useState } from 'react';
import coffee from '../../../assets/images/coffee-cup.png'
import orderService from '../../../services/order.service';
import customerService from '../../../services/customer.service'


const Cart = () => {

    const [receipt, setReceipt] = useState(null)
    const [customers, setCustomers] = useState(null)
    const [status, setStatus] = useState('process');

    const updateQuantity = (productDetailId, quantity) => {
        orderService.updateProductReceipt(productDetailId, quantity)
            .then(data => {
                setReceipt(data); // update the receipt state with the new receipt data
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }

    const deleteProduct = (id) => {
        orderService.deleteProductReceipt(id)
            .then(data => {
                setReceipt(data); // update the receipt state with the new receipt data
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }




    useEffect(() => {
        orderService.getLastestProcessOrder()
            .then(data => {
                setReceipt(data);
                setStatus('finish');
                // set the receiptId with the data.id
            })
            .catch(error => {
                console.error('There was an error!', error);
                setStatus('error');
            });
    }, []);
    useEffect(() => {
        customerService.getListCustomer()
            .then(data => {
                setCustomers(data);
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }, []);



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
                                                {status === 'process' && <h1>Loading...</h1>}
                                                {status === 'finish' && (
                                                    <>
                                                        {receipt.productDetails.map((product, index) => (
                                                            <>
                                                                <hr className="my-4"></hr>
                                                                <div className="row mb-4 d-flex justify-content-between align-items-center">
                                                                    <div className="col-md-2 col-lg-2 col-xl-2">
                                                                        <img
                                                                            src={coffee}
                                                                            className="img-fluid rounded-3" alt="Cotton T-shirt" />
                                                                    </div>
                                                                    <div className="col-md-3 col-lg-3 col-xl-3">
                                                                        <h6 className="text-black mb-0">{`${product.productSize.productName} (${product.productSize.sizeName})`}</h6>
                                                                    </div>
                                                                    <div className="col-md-4 col-lg-4 col-xl-3 d-flex flex-column">
                                                                        <div>
                                                                            <button data-mdb-button-init data-mdb-ripple-init className="btn btn-link">
                                                                                <i className="fas fa-minus"></i>
                                                                            </button>

                                                                            <input
                                                                                id="form1"
                                                                                min="1"
                                                                                name="quantity"
                                                                                value={product.productQuantity}
                                                                                type="number"
                                                                                className="form-control form-control-sm"
                                                                                onChange={(e) => updateQuantity(product.id, e.target.value)}
                                                                            />

                                                                            <button data-mdb-button-init data-mdb-ripple-init className="btn btn-link">
                                                                                <i className="fas fa-plus"></i>
                                                                            </button>
                                                                        </div>

                                                                    </div>
                                                                    <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                                                        <h6 className="mb-0">{`${product.productDiscount * 100}%`}</h6>
                                                                    </div>
                                                                    <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                                                        <h6 className="mb-0">{`$${product.productQuantity * product.productPrice}`}</h6>
                                                                    </div>
                                                                    <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                                                        <h6 className="mb-0">{`$${(product.productQuantity * product.productPrice * (1 - product.productDiscount)).toFixed(2)}`}</h6>
                                                                    </div>


                                                                    <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                                                                        <a className="float-end text-black" onClick={() => deleteProduct(product.id)}>
                                                                            <i className="fas fa-times">
                                                                                <span className="material-symbols-outlined">
                                                                                    close
                                                                                </span>
                                                                            </i>
                                                                        </a>
                                                                    </div>


                                                                </div>
                                                            </>
                                                        ))}
                                                    </>
                                                )}

                                                {status === 'error' && <h1>Đợi 1 xíu...</h1>}
                                                {status === 'empty' && <h1>Empty...</h1>}
                                                <hr className="my-4"></hr>

                                                <div className="pt-5">
                                                    <h6 className="mb-0"><a href="order" className="text-body"><i
                                                        className="fas fa-long-arrow-alt-left me-2"></i>Back to shop</a></h6>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="col-lg-4 bg-grey">
                                            <div className="p-5">
                                                <h3 className="fw-bold mb-5 mt-2 pt-1">Summary</h3>
                                                <div className="d-flex flex-column justify-content-between mb-4">
                                                    <h5>{receipt ? `Date: ${receipt.date}` : ''}</h5>
                                                </div>
                                                <div className="d-flex flex-column justify-content-between mb-4">
                                                    <h5>{receipt ? `Staff name: ${receipt.staff.firstName + ' ' + receipt.staff.lastName}` : ''}</h5>
                                                </div>
                                                <hr className="my-4"></hr>
                                                <div className="mb-4 pb-2">
                                                    <div data-mdb-input-init className="form-outline">
                                                        <label className="form-label" for="phonenumber">Customer</label>
                                                        <input type="text" id="phonemnumber" className="form-control form-control-lg" />
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-column justify-content-between mb-4">
                                                    <h5>{receipt ? `Subtotal: $${receipt.totalPrice}` : '$0'}</h5>
                                                </div>
                                                <div className="d-flex flex-column justify-content-between mb-4">
                                                    <h5>{receipt ? `Discount: ${receipt.discount * 100}%` : '0%'}</h5>
                                                </div>
                                                <hr className="my-4"></hr>

                                                <div className="d-flex flex-column justify-content-between mb-5">
                                                    <h5 className="text-uppercase">Total price</h5>
                                                    <h5>{receipt ? `$${receipt.totalPrice * (1 - receipt.discount)}` : '$0'}</h5>
                                                </div>

                                                <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-dark btn-block btn-lg"
                                                    data-mdb-ripple-color="dark">Finish Order</button>
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