import right from '../../../assets/images/right.png'
import React, { useState, useEffect } from 'react';
import receiptService from '../../../services/receipt.service';
import close from '../../../assets/images/OIP.jpg';
const Receipt = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [receipts, setReceipts] = useState(null)
    const [status, setStatus] = useState('process');

    const [selectedReceipt, setSelectedReceipt] = useState(null);

    const ReceiptDetail = (receipt) => {
        if (isVisible === false) {
            setIsVisible(!isVisible);
        }
        setSelectedReceipt(receipt);
    };


    useEffect(() => {
        receiptService.getAll()
            .then(data => {
                setReceipts(data);
                setStatus('finish');
            })
            .catch(error => {
                console.error('There was an error!', error);
                setStatus('error');
            });
    }, []);


    if (status === 'process') {
        return <div>Loading...</div>; // Or some loading spinner
    }

    if (status === 'error') {
        return <div>Error loading data</div>; // Or some error message
    }

    if (status === 'empty') {
        return <div>No data found</div>; // Or some empty state
    }

    return (
        <div className="Receipt" class="h-100">
            <div className="my-3 h-100">
                <div className="mx-3 my-1 p-3 bg-custom p-2 rounded h-100">
                    <div className="d-flex " id="filter-bar">
                        <div className="col-3 d-flex align-items-end">
                            <input type="date" className="form-control w-75" id="inputBirthday" placeholder="" />
                        </div>
                        <div className="dropdown col-3">
                            <div className="w-75">
                                <label class="form-label mb-0" style={{ color: "black", zIndex: "1", marginLeft: "10px" }}>Status</label>
                                <select className="form-select form-select-lg" style={{ marginTop: '-10px', backgroundColor: '#b5783d' }} >
                                    <option value="" selected>ALL</option>
                                    <option value="0">Processing</option>
                                    <option value="1">Done</option>
                                </select>
                            </div>
                        </div>
                        <div className="dropdown col-3">
                            <div className='w-75'>

                                <label class="form-label mb-0" style={{ color: "black", zIndex: "1", marginLeft: "10px" }}>Space</label>
                                <select className="form-select form-select-lg" style={{ marginTop: '-10px', backgroundColor: '#b5783d' }} >
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                            </div>
                        </div>
                        <div id="reset" className="col-3 rounded d-flex align-items-end">
                            <button className='bg-warning rounded align-items-bottom'>Reset</button>
                        </div>
                    </div>
                    <div className='d-flex h-100 my-4 overflow-auto'>
                        <div className={`${isVisible ? 'col-md-8' : 'col-md-12'}`}>
                            <div className='overflow-auto' style={{ height: "80%" }}>
                                <table className="table table-striped table-bordered rounded table-hover">
                                    <thead className="thead-dark">
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Date</th>
                                            <th scope="col">Time</th>
                                            <th scope="col">Staff</th>
                                            <th scope="col">Customer</th>
                                            <th scope="col">Discount</th>
                                            <th scope="col">Total Price</th>
                                            <th scope="col"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {receipts && receipts.map((receipt, index) => (
                                            <tr key={receipt.id}>
                                                <th scope="row">{receipt.id}</th>
                                                <td>{new Date(receipt.date).toLocaleDateString()}</td>
                                                <td>{new Date(receipt.date).toLocaleTimeString()}</td>
                                                <td>{`${receipt.staff.firstName} ${receipt.staff.lastName}`}</td>
                                                <td>{receipt.customer ? `${receipt.customer.firstName} ${receipt.customer.lastName}` : 'N/A'}</td>
                                                <td>{`${receipt.discount * 100}%`}</td>
                                                <td>{`$${(receipt.totalPrice * (1 - receipt.discount)).toFixed(2)}`}</td>
                                                <td><img src={right} alt="right" className="button-transition handle" onClick={() => ReceiptDetail(receipt)} /></td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                        </div>
                        <div className={`h-100 col-md-4 mx-1 ${!isVisible ? 'd-none' : ''}`}>
                            <div class=" bg-white p-2 rounded" style={{ height: "80%" }}>
                                <div class="container w-100 h-100">
                                    <span className="material-symbols-outlined handle" onClick={() => setIsVisible(false)}>
                                        close
                                    </span>
                                    <div class="h-50 bg-secondary rounded mt-2">
                                        <div className='h-100 scroll' style={{overflowX:"hidden" }}>
                                            {selectedReceipt && selectedReceipt.productDetails.map((product, index) => (
                                                <>
                                                    <div className="row w-100 mx-2 my-2 d-flex align-items-center" style={{ height: '15%' }} key={product.id}>
                                                        <div className='bg-white w-50 h-100 mt-2 rounded col col-md-6 d-flex align-items-center'>
                                                            <div className="d-flex align-items-center overflow-hidden">{product.productSize.productName}</div>
                                                        </div>
                                                        <div className="h-100 col-md-6 row d-flex mt-2 align-items-center text-align-center justify-content-center">
                                                            {/* for the size name*/}
                                                            <div className='h-100 col-md-4 d-inline  bg-white rounded-circle px-2' id="size">{product.productSize.sizeName}</div>
                                                            {/* for the product price*/}
                                                            <div class="h-100 col col-md-4 d-inline bg-white px-2 rounded ">{product.productQuantity}</div>
                                                            {/* for the quantity*/}
                                                            <div class="h-100 col col-md-4 d-inline bg-white px-2 rounded">${product.productQuantity * product.productPrice}</div>
                                                            {/* for the discount of each product*/}
                                                        </div>
                                                    </div>
                                                    {product.productCondimentDetails.map((condimentDetail, index) => (
                                                        <div className="row w-100 mx-2 my-2 d-flex align-items-center" style={{ height: '15%' }} key={condimentDetail.id}>
                                                            <div className='bg-white w-50 h-100 mt-2 rounded col col-md-6 d-flex align-items-center'>
                                                                <div className="d-flex align-items-center ">{condimentDetail.condiment.name}</div>
                                                            </div>
                                                            <div className="col-md-6 row h-75 mt-2 w-50">
                                                                <div class="col d-inline bg-white mx-1 rounded fit-content">{condimentDetail.quantity}</div>
                                                                {/* for the quantity*/}
                                                                <div class="col d-inline bg-white mx-1 rounded fit-content">${condimentDetail.quantity * condimentDetail.condimentPrice}</div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="col mt-3">
                                        <form className="row d-flex justify-content-center align-items-center">
                                            <div className="col-md-6">
                                                <label for="inputCustomer" className="form-label">Customer</label>
                                                <input type="text" className="form-control" id="inputName" value={selectedReceipt && selectedReceipt.customer ? `${selectedReceipt.customer.firstName} ${selectedReceipt.customer.lastName}` : 'N/A'} readOnly />
                                            </div>
                                            <div className="col-md-6">
                                                <label for="inputStaff" className="form-label">Staff</label>
                                                <input type="text" className="form-control" id="inputName" value={selectedReceipt ? `${selectedReceipt.staff.firstName} ${selectedReceipt.staff.lastName}` : ''} readOnly />
                                            </div>
                                            <div className="col-md-6">
                                                <label for="inputTotal" className="form-label">Subtotal</label>
                                                <input type="number" className="form-control" id="inputName" placeholder='$' value={selectedReceipt ? selectedReceipt.totalPrice : ''} readOnly />
                                            </div>
                                            <div className="col-md-6">
                                                <label for="inputDiscount" className="form-label">Discount</label>
                                                <input type="text" className="form-control" id="inputName" value={selectedReceipt ? `${selectedReceipt.discount * 100}%` : ''} readOnly />
                                            </div>
                                            <div className="col-md-12">
                                                <label for="inputDiscount" className="form-label">Total Price</label>
                                                <input type="text" className="form-control" id="inputName" value={selectedReceipt ? `$${selectedReceipt.totalPrice * (1 - selectedReceipt.discount)}` : ''} readOnly />
                                            </div>
                                        </form>
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

export default Receipt;