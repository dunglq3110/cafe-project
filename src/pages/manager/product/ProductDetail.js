import coffee from "../../../assets/images/coffee-cup.png"
function ProductDetail() {
    return (
        <div className="Product_detail">
            <div className="mx-3 bg-custom rounded">
                <div className="row mx-2 my-3">
                    <div className="col col-4 d-inline align-items-center justify-content-center mt-4 mb-4">
                        <img src={coffee} className="rounded mx-auto d-block w-75 h-100 img-thumbnail" />
                    </div>
                    <div className="col col-8">
                        <div className="row">
                        </div>
                        <div className="container my-2 mb-4">
                            <form className="row">
                                <div className="col-md-12">
                                    <label for="inputName" className="form-label">Name</label>
                                    <input type="text" className="form-control" id="inputName" />
                                </div>
                                <div className="col-md-6 mt-2">
                                    <label for="inputType" className="form-label">Type</label>
                                    <select id="inputType" className="form-select">
                                        <option selected>Type 1</option>
                                        <option>Type 2</option>
                                    </select>
                                </div>
                                <div className="col-md-6 mt-2">
                                    <label for="inputStatus" className="form-label">Status</label>
                                    <select id="inputStatus" className="form-select">
                                        <option selected>Active</option>
                                        <option>Inactive</option>
                                    </select>
                                </div>
                                <div className="col-md-4 mt-2">
                                    <label for="inputSize" className="form-label">Size</label>
                                    <select id="inputSize" className="form-select">
                                        <option selected>L</option>
                                        <option>M</option>
                                        <option>S</option>
                                    </select>
                                </div>
                                <div className="col-md-8 mt-2">
                                <label for="inputPrice" className="form-label">Price</label>
                                    <input type="text" className="form-control" id="inputPrice" />
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

export default ProductDetail;