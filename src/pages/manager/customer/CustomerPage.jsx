import right from '../../../assets/images/right.png';
const Customer = () => {
    return (
        <div className="Customer">
            <div className="container my-3">
                <div className="mx-1 my-1 bg-custom p-2 rounded">
                    <div className="d-flex " id="filter-bar">
                        <div className="dropdown w-15">
                            <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown">
                                Role
                            </button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="">Admin</a></li>
                                <li><a className="dropdown-item" href="">Staff</a></li>
                            </ul>
                        </div>
                        <div id="reset" className="d-flex px-3 rounded align-items-center bg-warning">
                            Reset
                        </div>
                    </div>
                    <div className="mt-3">
                        <table className="table table-striped  table-hover">
                            <thead className="thead-dark">
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Rank</th>
                                    <th scope="col">Phone Number</th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row"></th>
                                    <td>a</td>
                                    <td>a</td>
                                    <td>a</td>
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

export default Customer;