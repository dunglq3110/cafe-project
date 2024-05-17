import coffee from "../../../assets/images/coffee-cup.png"
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import productService from "../../../services/product.service";
const ProductDetail = () => {


    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [status, setStatus] = useState('process');

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
        <div className="Product_detail w-100" style={{height:"80%"}}>
            <div className="mx-3 bg-custom rounded h-100">
                <div className="row mx-2 my-3 h-100">
                    <div className="col col-4 d-inline align-items-center justify-content-center mt-4 mb-4">
                        <img src={coffee} className="rounded mx-auto d-block w-75 img-thumbnail" />
                    </div>
                    <div className="col col-8">
                        <div className="row">
                        </div>
                        <div className="container my-2 mb-4">
                            <form className="row">
                                <div className="col-md-12 mt-5">
                                    <label for="inputName" className="form-label">Name</label>
                                    <input type="text" className="form-control" id="inputName" value={product.name} />
                                </div>
                                <div className="col-md-4 mt-4">
                                    <label for="inputType" className="form-label">Type</label>
                                    <input type="text" className="form-control" id="inputName" value={product.productType} />
                                </div>
                                <div className="col-md-4 mt-4">
                                    <label for="inputStatus" className="form-label">Status</label>
                                    <input type="text" className="form-control" id="inputName" value={product.productStatus} />
                                </div>
                                <div className="col-md-4 mt-4">
                                    <label for="inputStatus" className="form-label">Discount</label>
                                    <input type="text" className="form-control" id="inputName" value={parseFloat(product.discount) * 100 + "%"} />
                                </div>
                                {product.sizes.map((productSize, index) => (
                                    <>
                                        <div className="col-md-6 mt-4">
                                            <label for="inputStatus" className="form-label">Size name</label>
                                            <input type="text" className="form-control" id="inputName" value={productSize.name} />
                                        </div>
                                        <div className="col-md-6 mt-4">
                                            <label for="inputStatus" className="form-label">Price</label>
                                            <input type="text" className="form-control" id="inputName" value={"$" + productSize.price} />
                                        </div>
                                    </>
                                ))}
                                <div className="mt-4 d-flex justify-content-around">
                                    <button type="button" className="btn btn-danger w-15">Remove</button>
                                    <button type="button" className="btn btn-info w-15">Edit</button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default ProductDetail;