import coffee from "../../../assets/images/coffee-cup.png"
import condimentService from "../../../services/condiment.service";
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
const CondimentDetail = () => {


    const { id } = useParams();
    const [condiment, setCondiment] = useState(null);
    const [status, setStatus] = useState('process');

    useEffect(() => {
        condimentService.getById(id)
            .then(data => {
                setCondiment(data);
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

    if (status === 'empty' || !condiment) {
        return <div>No data found</div>; // Or some empty state
    }

    return (
        <div className="Product_detail h-75 w-100">
            <div className="mx-3 bg-custom rounded h-100">
                <div className="row mx-2 my-3">
                    <div className="col col-4 d-inline align-items-center justify-content-center mt-4 mb-4">
                        <img src={coffee} className="rounded mx-auto d-block w-75 h-100 img-thumbnail" />
                    </div>
                    <div className="col col-8">
                        <div className="row">
                        </div>
                        <div className="container my-2 mb-4">
                            <form className="row">
                                <div className="col-md-12 mt-5">
                                    <label for="inputName" className="form-label">Name</label>
                                    <input type="text" className="form-control" id="inputName" value={condiment.name} />
                                </div>
                                <div className="col-md-6 mt-4">
                                    <label for="inputType" className="form-label">Price</label>
                                    <input type="text" className="form-control" id="inputPrice" value={"$" + condiment.unitPrice} />
                                </div>
                                <div className="col-md-6 mt-4">
                                    <label for="inputStatus" className="form-label">Status</label>
                                    <input type="text" className="form-control" id="inputStatus" value={condiment.productStatus} />
                                </div>

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

export default CondimentDetail;