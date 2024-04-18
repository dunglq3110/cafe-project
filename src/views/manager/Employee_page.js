import right from './image/right.png'
function Employee_page() {
    return (
        <div className="Employee_page">
            <div id="filter-bar">'
            </div>
            <div className="">
                <table class="table table-striped">
                    <thead>
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
                </table>


            </div>

        </div>
    );

}

export default Employee_page;