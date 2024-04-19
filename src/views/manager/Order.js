import right from './image/right.png'
function Order() {
    return (
        <div className="Order">
            <div class="container my-3">
                <div class="mx-1 my-1 bg-custom p-2 rounded">
                    <div class="d-flex " id="filter-bar">
                        <div class="w-15 d-flex mx-3 h-100">
                        <label for="inputAddress" class="form-label d-flex align-items-center mr-2">Date</label>
                        <input type="date" class="form-control" id="inputBirthday" placeholder="" />
                        </div>
                        <div class="dropdown w-15">
                            <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown">
                                Status
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Waiting</a></li>
                                <li><a class="dropdown-item" href="#">Done</a></li>
                                <li><a class="dropdown-item" href="#">Execute</a></li>
                            </ul>
                        </div>
                        <div class="dropdown w-15">
                            <button type="button" class="btn btn-success dropdown-toggle" data-bs-toggle="dropdown">
                                Space
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
                            <caption>List of Orders</caption>
                            <thead class="thead-dark">
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
                                    <td><img src={right} alt="right" class="button-transition" /></td>
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
                                    <td><img src={right} alt="right" class="button-transition" /></td>
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