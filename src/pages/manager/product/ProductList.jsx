import right from '../../../assets/images/right.png'
import { useState, useEffect } from 'react';
import productService from '../../../services/product.service';
import add from '../../../assets/images/add.png'
import { Link } from 'react-router-dom';
const ProductList = () => {
    const [productStatusFilter, setProductStatusFilter] = useState("ALL")
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
        <div className="ProductList w-100 thumnail" style={{ height: '90%' }}>
            <div class="my-3 h-100">
                <div class="mx-3 h-100 mx-1 my-1 bg-custom p-2 rounded">
                    <div class="d-flex h-auto" id="filter-bar">
                        <div class="dropdown w-15 d-flex" style={{ background: '' }}>
                            <button type="button" class="btn btn-primary dropdown-toggle w-75" data-bs-toggle="dropdown">
                                {productStatusFilter}
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" onClick={() => setProductStatusFilter("ALL")}>All</a></li>
                                <li><a class="dropdown-item" onClick={() => setProductStatusFilter("ABLE")}>Able</a></li>
                                <li><a class="dropdown-item" onClick={() => setProductStatusFilter("OUTSTOCK")}>Out of stock</a></li>
                                <li><a class="dropdown-item" onClick={() => setProductStatusFilter("ENABLE")}>Enable</a></li>
                            </ul>
                        </div>
                        <div class="dropdown w-15 d-flex">
                            <button type="button" class="btn btn-success dropdown-toggle w-75" data-bs-toggle="dropdown">
                                Type
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">1</a></li>
                                <li><a class="dropdown-item" href="#">2</a></li>
                                <li><a class="dropdown-item" href="#">3</a></li>
                            </ul>
                        </div>
                        <div id="reset" class="d-flex px-3 rounded align-items-center  bg-warning h-75" style={{ marginBottom: '0px', marginTop: 'auto' }}>
                            Reset
                        </div>
                        <div class="" style={{ marginRight: '0px', marginLeft: 'auto', width: '10%' }}>
                            <a class="btn btn-success w-100" href='add-product'>
                                <img src={add} alt="add" className="button-transition" />
                            </a>
                        </div>
                    </div>
                    <div class="mt-3" style={{ height: '100%' }} >
                        <div style={{ overflowY: 'scroll', height: '90%' }}>

                            {status === 'process' && <h1>Loading...</h1>}
                            {status === 'finish' && (
                                <table className="table table-striped  table-hover">
                                    <thead className="thead-dark">
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Type</th>
                                            <th scope="col">Discount</th>
                                            <th scope="col">Status</th>
                                            <th scope="col"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {products.map((product, index) => (

                                            <tr key={index}>
                                                <th scope="row">{product.id}</th>
                                                <td>{product.name}</td>
                                                <td>{product.productType}</td>
                                                <td>{product.discount}</td>
                                                <td>{product.productStatus}</td>
                                                <td><Link to={`/manager/products/${product.id}`}><img src={right} alt="right"
                                                    className="button-transition" /></Link>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            )}
                            {status === 'error' && <h1>Đợi 1 xíu...</h1>}
                            {status === 'empty' && <h1>Empty...</h1>}

                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductList;