import bg from '../../../assets/images/coffee-cup.png'

const MenuItem = () => {
    return (
        <div className="w-25 h-75 container bg-white px-0 rounded">
            <div className="h-25 w-100 d-flex align-items-center rounded" style={{ backgroundColor: "#885b46" }}>
                <div className="w-100 d-flex justify-content-center align-items-center" style={{ marginTop: "25%" }}>
                    <img src={bg} className="rounded d-block img-thumbnail z-1" style={{ width: "20%", backgroundColor: "#b1835e" }} />
                    <div className='mx-3 fs-2 text-center flex-column mb-0'>
                        <p className="text-start" style={{ color: "#f9f6f3" }}>Espresso</p>
                    </div>
                </div>
            </div>
            <div className="mx-4 my-3 h-75">
                <div class="col pt-5">
                    <form class="row d-flex justify-content-center align-items-center">
                        <div className="col-md-12 d-flex mb-2">
                            <p className='text-uppercase fw-bold'>Current cost : </p>
                            <p className="mx-3">$100</p>
                        </div>
                        <div className="col-md-6">
                            <label for="inputTotal" className="form-label">Size</label>
                            <select id="inputType" className="form-select">
                                <option selected>S</option>
                                <option value="1">M</option>
                                <option value="2">L</option>
                            </select>
                        </div>
                        <div className="col-md-6">
                            <label for="inputTotal" className="form-label">Sugar</label>
                            <select id="inputType" className="form-select">
                                <option selected>100%</option>
                                <option value="1">90%</option>
                                <option value="2">80%</option>
                                <option value="3">70%</option>
                                <option value="4">60%</option>
                                <option value="5">50%</option>
                                <option value="6">40%</option>
                                <option value="7">30%</option>
                                <option value="8">20%</option>
                                <option value="9">10%</option>
                                <option value="10">0%</option>

                            </select>
                        </div>
                        <div className="col-md-12 mt-2">
                            <label for="inputDiscount" className="form-label">Dicription</label>
                            <input type="text" className="form-control" id="inputName" />
                        </div>
                        <button className="col-md-10 btn btn-success mt-4 rounded " style={{ height: '50px' }}>
                            Add to cart
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default MenuItem;