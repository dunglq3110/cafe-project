import { useState } from 'react';
import right from '../../../assets/images/right.png'
const ProductList = () => {

    const [productStatusFilter, setProductStatusFilter] = useState("ALL")

    return (
        <div className="ProductList h-100 w-100">
            <div class="container my-3 h-100">
                <div class="h-100 mx-1 my-1 bg-custom p-2 rounded">
                    <div class="d-flex " id="filter-bar">
                        <div class="dropdown w-15">
                            <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" >
                                {productStatusFilter}
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" onClick={() => setProductStatusFilter("ALL")}>All</a></li>
                                <li><a class="dropdown-item" onClick={() => setProductStatusFilter("ABLE")}>Able</a></li>
                                <li><a class="dropdown-item" onClick={() => setProductStatusFilter("OUTSTOCK")}>Out of stock</a></li>
                                <li><a class="dropdown-item" onClick={() => setProductStatusFilter("ENABLE")}>Enable</a></li>
                            </ul>
                        </div>
                        <div class="dropdown w-15">
                            <button type="button" class="btn btn-success dropdown-toggle" data-bs-toggle="dropdown">
                                Type
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">1</a></li>
                                <li><a class="dropdown-item" href="#">2</a></li>
                                <li><a class="dropdown-item" href="#">3</a></li>
                            </ul>
                        </div>
                        <div id="reset" class="d-flex px-3 rounded align-items-center bg-warning">
                            Reset
                        </div>
                    </div>
                    <div class="mt-3">
                        <table class="table table-striped  table-hover">
                            <caption>List of Products</caption>
                            <thead class="thead-dark">
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Type</th>
                                    <th scope="col">Status</th>

                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Espresso</td>
                                    <td>$100</td>
                                    <td>Coffee</td>
                                    <td>Active</td>
                                    <td><img src={right} alt="right" class="button-transition" /></td>
                                </tr>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Espresso</td>
                                    <td>$100</td>
                                    <td>Coffee</td>
                                    <td>Active</td>
                                    <td><img src={right} alt="right" class="button-transition" /></td>
                                </tr>

                            </tbody>

                        </table>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductList;