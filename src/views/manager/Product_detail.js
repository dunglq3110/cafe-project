import coffee from "./image/coffee-cup.png"
function Product_detail() {
    return (
        <div className="Product_detail">
            <div class="mx-3 bg-custom rounded">
                <div class="row mx-2 my-2">
                    <div class="col col-4 d-inline align-items-center justify-content-center mt-4">
                        <img src={coffee} class="rounded mx-auto d-block w-75 h-75 img-thumbnail" />
                        <div class="mt-4 d-flex justify-content-around">
                            <button type="button" class="btn btn-danger">Remove</button>
                            <button type="button" class="btn btn-info">Edit</button>
                        </div>
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
                                <div class="col-md-8 mt-2">
                                    <label for="inputEmail" class="form-label">Email</label>
                                    <input type="email" class="form-control" id="inputEmail4" />
                                </div>
                                <div class="col-md-4 mt-2">
                                    <label for="inputState" class="form-label">Gentle</label>
                                    <select id="inputState" class="form-select">
                                        <option selected>Male</option>
                                        <option>Female</option>
                                        <option>Other</option>
                                    </select>
                                </div>

                                <div class="col-md-6 mt-2">
                                    <label for="inputCity" class="form-label">Phone Number</label>
                                    <input type="tel" class="form-control" id="inputCity" />
                                </div>
                                <div class="col-md-4 mt-2">
                                    <label for="inputState" class="form-label">State</label>
                                    <select id="inputState" class="form-select">
                                        <option selected>Active</option>
                                        <option>Inactive</option>
                                    </select>
                                </div>
                                <div class="col-md-2 mt-2">
                                    <label for="inputZip" class="form-label">Role</label>
                                    <input type="text" class="form-control" id="inputRole" />
                                </div>
                                <div class="col-12 mt-2">
                                    <label for="inputAddress" class="form-label">Birthday</label>
                                    <input type="date" class="form-control" id="inputBirthday" placeholder="" />
                                </div>
                                <div class="col-12 mt-2">
                                    <label for="inputAddress" class="form-label">Address</label>
                                    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
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