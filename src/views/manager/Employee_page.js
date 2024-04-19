import right from './image/right.png'
function Employee_page() {
    return (
        <div className="Employee_page">
            <div class="container my-3">
                <div class="mx-1 my-1 bg-custom p-2 rounded">
                    <div class="d-flex " id="filter-bar">
                        <div class="dropdown w-15">
                            <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown">
                                Role
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Admin</a></li>
                                <li><a class="dropdown-item" href="#">Staff</a></li>
                            </ul>
                        </div>
                        <div id="reset" class="d-flex px-3 rounded align-items-center bg-warning">
                            Reset
                        </div>
                    </div>
                    <div class="mt-3">
                        <table class="table table-striped  table-hover">
                            <caption>List of Employees</caption>
                            <thead class="thead-dark">
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Full Name</th>
                                    <th scope="col">Gentle</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Role</th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Vu Tien Trinh</td>
                                    <td>Male</td>
                                    <td>Active</td>
                                    <td>Admin</td>
                                    <td><img src={right} alt="right" class="button-transition" /></td>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Vu Tien Trinh</td>
                                    <td>Male</td>
                                    <td>Active</td>
                                    <td>Admin</td>
                                    <td><img src={right} alt="right" class="button-transition" /></td>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Vu Tien Trinh</td>
                                    <td>Male</td>
                                    <td>Active</td>
                                    <td>Admin</td>
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

export default Employee_page;