import right from '../../../assets/images/right.png'
function Order() {
    return (
        <div className="Order">
            <div className="container my-3">
                <div className="mx-1 my-1 bg-custom p-2 rounded">
                    <div className="d-flex " id="filter-bar">
                        <div className="w-15 d-flex mx-3 h-100">
                        <label for="inputAddress" className="form-label d-flex align-items-center mr-2">Date</label>
                        <input type="date" className="form-control" id="inputBirthday" placeholder="" />
                        </div>
                        <div className="dropdown w-15">
                            <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown">
                                Status
                            </button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="./Order#">Waiting</a></li>
                                <li><a className="dropdown-item" href="./Order#">Done</a></li>
                                <li><a className="dropdown-item" href="./Order#">Execute</a></li>
                            </ul>
                        </div>
                        <div className="dropdown w-15">
                            <button type="button" className="btn btn-success dropdown-toggle" data-bs-toggle="dropdown">
                                Space
                            </button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="./Order#">1</a></li>
                                <li><a className="dropdown-item" href="./Order#">2</a></li>
                                <li><a className="dropdown-item" href="./Order#">3</a></li>
                            </ul>
                        </div>
                        <div id="reset" className="d-flex px-3 rounded align-items-center bg-warning">
                            Reset
                        </div>
                    </div>
                    <div className="mt-3">
                        <table className="table table-striped  table-hover">
                            <caption>List of Orders</caption>
                            <thead className="thead-dark">
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Desk</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Space</th>
                                    <th scope="col">Staff</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Price</th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Desk 1</td>
                                    <td>Space 1</td>
                                    <td>Waiting</td>
                                    {/* if waiting red, active yelow, done green */}
                                    <td>Trinh</td>
                                    <td>1/1/1010</td>
                                    <td>$100</td>
                                    <td><img src={right} alt="right" className="button-transition" /></td>
                                </tr>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Desk 1</td>
                                    <td>Space 1</td>
                                    <td>Waiting</td>
                                    {/* if waiting red, active yelow, done green */}
                                    <td>Trinh</td>
                                    <td>1/1/1010</td>
                                    <td>$100</td>
                                    <td><img src={right} alt="right" className="button-transition" /></td>
                                </tr>
                            </tbody>

                        </table>


                    </div>
                </div>
            </div>

        </div>

    );
}

export default Order;