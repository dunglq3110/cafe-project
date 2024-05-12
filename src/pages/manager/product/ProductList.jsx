import right from '../../../assets/images/right.png'
import add from '../../../assets/images/add.png'
const ProductList = () => {
    return (
        <div className="ProductList w-100 thumnail" style={{ height: '90%' }}>
            <div class="my-3 h-100">
                <div class="mx-3 h-100 mx-1 my-1 bg-custom p-2 rounded">
                    <div class="d-flex h-auto" id="filter-bar">
                        <div class="dropdown w-15 d-flex" style={{ background: '' }}>
                            <button type="button" class="btn btn-primary dropdown-toggle w-75" data-bs-toggle="dropdown">
                                Status
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Waiting</a></li>
                                <li><a class="dropdown-item" href="#">Done</a></li>
                                <li><a class="dropdown-item" href="#">Execute</a></li>
                            </ul>
                        </div>
                        <div class="dropdown w-15 d-flex">
                            <button type="button" class="btn btn-success dropdown-toggle w-75" data-bs-toggle="dropdown">
                                Type
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">1</a></li>
                                <li><a class="dropdown-item" href="#">2</a></li>
                                <li><a class="dropdown-item" href="#">3</a></li>
                            </ul>
                        </div>
                        <div id="reset" class="d-flex px-3 rounded align-items-center  bg-warning h-75" style={{ marginBottom: '0px', marginTop: 'auto' }}>
                            Reset
                        </div>
                        <div class="" style={{ marginRight: '0px', marginLeft: 'auto', width: '10%' }}>
                            <a class="btn btn-success w-100" href=''>
                                <img src={add} alt="add" className="button-transition" />
                            </a>
                        </div>
                    </div>
                    <div class="mt-3" style={{height:'100%'}} >
                        <div style={{ overflowY: 'scroll', height: '90%' }}>

                            <table class="table table-striped  table-hover">
                                <thead class="thead-dark">
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Type</th>
                                        <th scope="col">Status</th>

                                        <th scope="col"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Espresso</td>
                                        <td>$100</td>
                                        <td>Coffee</td>
                                        <td>Active</td>
                                        <td><img src={right} alt="right" class="button-transition" /></td>
                                    </tr>
                                    


                                </tbody>

                            </table>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductList;