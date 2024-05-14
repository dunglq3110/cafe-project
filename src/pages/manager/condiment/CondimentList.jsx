import right from '../../../assets/images/right.png'
import condimentService from '../../../services/condiment.service';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import add from '../../../assets/images/add.png'


const CondimentList = () => {

    const [productStatusFilter, setProductStatusFilter] = useState("ALL")
    const [condiments, setCondiments] = useState(null);
    const [status, setStatus] = useState('process');

    useEffect(() => {
        condimentService.getAll()
            .then(data => {
                setCondiments(data);
                setStatus('finish');
            })
            .catch(error => {
                console.error('There was an error!', error);
                setStatus('error');
            });
    }, []);


    return (
        <div className="ProductList h-100 w-100">
            <div class="my-3 h-100">
                <div class="mx-3 h-100 mx-1 my-1 bg-custom p-2 rounded">
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

                        <div className="" style={{ marginRight: '0px', marginLeft: 'auto' }}>
                            <a href="add-condiment" className="btn btn-success">
                                <img src={add} alt="add" className="button-transition" />
                            </a>
                        </div>
                    </div>
                    <div className="mt-3">

                        {status === 'process' && <h1>Loading...</h1>}
                        {status === 'finish' && (
                            <table className="table table-striped  table-hover">
                                <thead className="thead-dark">
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Status</th>
                                        <th scope="col"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {condiments.map((condiments, index) => (

                                        <tr key={index}>
                                            <th scope="row">{condiments.id}</th>
                                            <td>{condiments.name}</td>
                                            <td>{"$" + condiments.unitPrice}</td>
                                            <td>{condiments.productStatus}</td>
                                            <td><Link to={`/manager/condiments/${condiments.id}`}><img src={right} alt="right"
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
    )
}

export default CondimentList;