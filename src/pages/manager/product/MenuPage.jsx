import coffeecup from '../../../assets/images/coffee-cup.png';
import "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js";
const MenuPage = () => {
    return (
        <div className="Menu_page w-100">
            <div className="menu_container w-100">
                <div id="drink-show" className="h-100 w-100 ">
                    <div id="drink-item" className="d-flex w-100">

                        <div id="item" className="w-100 rounded">
                            <div id="food-show" className="mt-2">
                                <div className="title merriweather-regular-italic" id="filter-bar">
                                    Our Menu
                                </div>
                                {/* <div className="row d-flex align-items-center mx-2" id="filter-bar">
                                    <div className="dropdown col">
                                        <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown">
                                            Product
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="./MenuPage#">Link 1</a></li>
                                            <li><a className="dropdown-item" href="./MenuPage#">Link 2</a></li>
                                            <li><a className="dropdown-item" href="./MenuPage#">Link 3</a></li>
                                        </ul>
                                    </div>
                                    <div className="dropdown col">
                                        <button type="button" className="btn btn-success dropdown-toggle" data-bs-toggle="dropdown">
                                            Type
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="./MenuPage#">Link 1</a></li>
                                            <li><a className="dropdown-item" href="./MenuPage#">Link 2</a></li>
                                            <li><a className="dropdown-item" href="./MenuPage#">Link 3</a></li>
                                        </ul>
                                    </div>
                                    <div className="dropdown col">
                                        <button type="button" className="btn btn-warning dropdown-toggle" data-bs-toggle="dropdown">
                                            Status
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="./MenuPage#">Link 1</a></li>
                                            <li><a className="dropdown-item" href="./MenuPage#">Link 2</a></li>
                                        </ul>
                                    </div>
                                    <div id="apply" className="col">
                                        Apply
                                    </div>
                                    <div id="reset" className="col">
                                        Reset
                                    </div>
                                </div> */}
                                <div id="food-option" className="d-flex flex-row text-align-center justify-content-center my-2">
                                    <div className="side-button center-layout">Drink 1</div>
                                    <div className="side-button center-layout">Drink 1</div>
                                    <div className="side-button center-layout">Drink 1</div>
                                </div>
                                <div id="list-food" className="grid-container">
                                    <div class="card item-drink d-flex align-items-center">
                                        <img src={coffeecup}
                                            class="card-img-top w-75 h-75" alt="Laptop" />
                                        <div class="card-body">
                                            <div class="d-flex justify-content-between">
                                                <h5 class="mb-0">Espresso </h5>
                                                <h5 class="text-dark mb-0 mx-3">$44</h5>
                                            </div>
                                            <div id="orderbtn">
                                                <button type="button" className="btn btn-info border border-2 border-dark rounded">Order</button>
                                            </div>
                                        </div>
                                    </div>



                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        </div >
    );
}

export default MenuPage;