import coffee from "../../../assets/images/coffee-cup.png"
import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import productService from '../../../services/product.service';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';



const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState('process');

    // Create refs
    const nameRef = useRef();
    const typeRef = useRef();
    const statusRef = useRef();
    const discountRef = useRef();
    const priceRefs = useRef([]);

    useEffect(() => {
        productService.getById(id)
            .then(data => {
                setProduct(data);
                setStatus('finish');
            })
            .catch(error => {
                console.error('There was an error!', error);
                setStatus('error');
            });
    }, [id]);

    const handleEdit = () => {
        setEditMode(true);
    }

    const handleFinish = () => {
        setEditMode(false)
        const updatedProduct = {
            ...product,
            name: nameRef.current.value,
            image: "Sample product url",
            productType: parseInt(typeRef.current.value),
            productStatus: parseInt(statusRef.current.value),
            discount: parseFloat(discountRef.current.value),
            sizes: product.sizes.map((size, index) => ({
                ...size,
                price: parseFloat(priceRefs.current[index].value)
            }))
        };

        productService.updateProduct(id, updatedProduct)
            .then(data => {
                setProduct(data);
                toast.success('Update successfully!');
                setEditMode(false);
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
        window.location.href = './';
    }

    if (status === 'process') {
        return <div>Loading...</div>; // Or some loading spinner
    }

    if (status === 'error') {
        return <div>Error loading data</div>; // Or some error message
    }

    if (status === 'empty' || !product) {
        return <div>No data found</div>; // Or some empty state
    }

    return (
        <div className="Product_detail w-100" style={{ height: "80%" }}>
            <div className="mx-3 bg-custom rounded h-100">
                <div className="row mx-2 my-3 h-100">
                    <a href='./' class="mx-1 my-2 handle">
                        <div class="material-symbols-outlined fs-2" >
                            close
                        </div>
                    </a>
                    <div className="col col-4 d-inline align-items-center justify-content-center mt-4 mb-4">
                        <img src="https://firebasestorage.googleapis.com/v0/b/cafe-firebase-2f4b9.appspot.com/o/539290fc-eb7b-494e-9ec5-6cfb4a536429.jpg?alt=media" className="rounded mx-auto d-block w-75 img-thumbnail" />
                    </div>
                    <div className="col col-8">
                        <div className="container mb-4">
                            <form className="row">
                                <div className="col-md-12">
                                    <label for="inputName" className="form-label">Name</label>
                                    <input type="text" className="form-control" id="inputName" defaultValue={product.name} ref={nameRef} disabled={!editMode} />
                                </div>
                                <div className="col-md-4 mt-4">
                                    <label for="inputType" className="form-label">Type</label>
                                    <select id="inputType" className="form-control" defaultValue={product.productType} ref={typeRef} disabled={!editMode}>
                                        <option value="0">Cafe</option>
                                        <option value="1">Milk Tea</option>
                                        <option value="2">Soft Drink</option>
                                        <option value="3">Smoothie</option>
                                        <option value="4">Food</option>
                                    </select>
                                </div>
                                <div className="col-md-4 mt-4">
                                    <label for="inputStatus" className="form-label">Status</label>
                                    <select id="inputStatus" className="form-control" defaultValue={product.productStatus} ref={statusRef} disabled={!editMode}>
                                        <option value="0">Able</option>
                                        <option value="1">Enable</option>
                                        <option value="2">Out of stock</option>
                                    </select>
                                </div>
                                <div className="col-md-4 mt-4">
                                    <label for="inputDiscount" className="form-label">Discount</label>
                                    <input type="number" step="0.01" min="0" max="1" className="form-control" id="inputDiscount" defaultValue={product.discount} ref={discountRef} disabled={!editMode} />
                                </div>
                                {product.sizes.map((productSize, index) => (
                                    <>
                                        <div className="col-md-6 mt-4">
                                            <label for="inputSizeName" className="form-label">Size name</label>
                                            <input type="text" className="form-control" id="inputSizeName" defaultValue={productSize.name} disabled />
                                        </div>
                                        <div className="col-md-6 mt-4">
                                            <label for="inputPrice" className="form-label">Price</label>
                                            <input type="number" className="form-control" id="inputPrice" defaultValue={productSize.price} ref={el => priceRefs.current[index] = el} disabled={!editMode} />
                                        </div>
                                    </>
                                ))}
                                <div className="mt-4 d-flex justify-content-around">
                                    <button type="button" className="btn btn-info w-15" onClick={handleEdit}>Edit</button>
                                    {editMode && <button type="button" className="btn btn-success w-15" onClick={handleFinish}>Finish</button>}
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

export default ProductDetail;
