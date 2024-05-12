import ech from '../../../assets/images/ech.jpg'
const AddStaff = () => {
    return (
        <div className="container my-2 h-75">
            <div className="mx-2 bg-custom rounded h-100">
                <div className="row mx-2 my-2 h-100">
                    <a href='staffs' class="close text-center align-items-center">
                        <div class="material-symbols-outlined ">
                            close
                        </div>
                    </a>
                    <div className="col col-4 d-flex flex-column align-items-center justify-content-center mt-4">
                        <img src={ech} className="rounded mx-auto d-block w-75 h-75 img-thumbnail" />
                        <button type="button" className="btn btn-outline-success mt-1 d-flex flex-column align-items-center justify-content-center"><span class="material-symbols-outlined">
                            add_a_photo
                        </span></button>

                    </div>
                    <div className="col col-8">
                        <div className="container my-2 mb-4">
                            <form className="row">
                                <div className="col-md-12">
                                    <label for="inputName" className="form-label fw-bold">Full name</label>
                                    <input type="text" className="form-control" id="inputName" />
                                </div>
                                <div className="col-md-8 mt-2">
                                    <label for="inputEmail" className="form-label fw-bold">Email</label>
                                    <input type="email" className="form-control" id="inputEmail4" />
                                </div>
                                <div className="col-md-4 mt-2">
                                    <label for="inputState" className="form-label fw-bold">Gentle</label>
                                    <select id="inputState" className="form-select">
                                        <option selected>Male</option>
                                        <option>Female</option>
                                        <option>Other</option>
                                    </select>
                                </div>

                                <div className="col-md-6 mt-2">
                                    <label for="inputCity" className="form-label fw-bold">Phone Number</label>
                                    <input type="tel" className="form-control" id="inputCity" />
                                </div>
                                <div className="col-md-4 mt-2">
                                    <label for="inputState" className="form-label fw-bold">State</label>
                                    <select id="inputState" className="form-select">
                                        <option selected>Active</option>
                                        <option>Inactive</option>
                                    </select>
                                </div>
                                <div className="col-md-2 mt-2">
                                    <label for="inputZip" className="form-label fw-bold">Role</label>
                                    <input type="text" className="form-control" id="inputRole" />
                                </div>
                                <div className="col-12 mt-2">
                                    <label for="inputAddress" className="form-label fw-bold">Birthday</label>
                                    <input type="date" className="form-control" id="inputBirthday" placeholder="" />
                                </div>
                                <div className="col-12 mt-2">
                                    <label for="inputAddress" className="form-label fw-bold">Address</label>
                                    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                                </div>
                            </form>
                        </div>
                        <div className="mt-4 d-flex justify-content-around">
                            <button type="button" className="btn btn-danger w-25">Remove</button>
                            <button type="button" className="btn btn-success w-25">Edit</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AddStaff;