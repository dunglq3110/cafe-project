import coffee from "./image/coffee-cup.png"
function Product_detail() {
    return (
        <div className="Product_detail">
            <div class="mx-3 bg-custom rounded">
                <div class="row mx-2 my-3">
                    <div class="col col-4 d-inline align-items-center justify-content-center mt-4 mb-4">
                        <img src={coffee} class="rounded mx-auto d-block w-75 h-100 img-thumbnail" />
                    </div>
                    <div class="col col-8">
                        <div class="row">
                        </div>
                        <div class="container my-2 mb-4">
                            <form class="row">
                                <div class="col-md-12">
                                    <label for="inputName" class="form-label">Name</label>
                                    <input type="text" class="form-control" id="inputName" />
                                </div>
                                <div class="col-md-6 mt-2">
                                    <label for="inputType" class="form-label">Type</label>
                                    <select id="inputType" class="form-select">
                                        <option selected>Type 1</option>
                                        <option>Type 2</option>
                                    </select>
                                </div>
                                <div class="col-md-6 mt-2">
                                    <label for="inputStatus" class="form-label">Status</label>
                                    <select id="inputStatus" class="form-select">
                                        <option selected>Active</option>
                                        <option>Inactive</option>
                                    </select>
                                </div>
                                <div class="col-md-4 mt-2">
                                    <label for="inputSize" class="form-label">Size</label>
                                    <select id="inputSize" class="form-select">
                                        <option selected>L</option>
                                        <option>M</option>
                                        <option>S</option>
                                    </select>
                                </div>
                                <div class="col-md-8 mt-2">
                                <label for="inputPrice" class="form-label">Price</label>
                                    <input type="text" class="form-control" id="inputPrice" />
                                </div>
                                <div class="mt-4 d-flex justify-content-around">
                            <button type="button" class="btn btn-danger w-15">Remove</button>
                            <button type="button" class="btn btn-info w-15">Edit</button>
                        </div>

                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Product_detail;