import coffeecup from '../../../assets/images/coffee-cup.png';
import "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js";
function MenuPage() {
    return (
        <div className="Menu_page">
            <div className="menu_container h-100">
                <div id="drink-show" className="h-100 ">
                    <div id="drink-item" className="row container h-100 overflow-auto mt-2">
                        <div id="food-option" className="h-100 d-flex flex-column col-2 bg-secondary">
                            <div className="side-button">Drink 1</div>
                            <div className="side-button">Drink 1</div>
                            <div className="side-button">Drink 1</div>
                        </div>

                        <div id="item" className="flex col-10 bg-menu rounded">
                            <div id="food-show" className="mt-2">
                                <div className="row d-flex align-items-center" id="filter-bar">
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
                                </div>
                                <div id="list-food" className="d-flex row">
                                    <div className="col-3 mx-3 my-3 pt-3 pb-3 bg-light rounded d-flex flex-column align-items-center border border-2 border-dark">
                                        <img className="w-75 h-75 justify-contents-center border border-2 border-secondary rounded" src={coffeecup} />
                                        <div className="d-flex w-100 align-items-center pt-1 justify-content-around my-2">
                                            <div id="cost" className=" text-align-center">
                                                100$
                                            </div>
                                            <div id="orderbtn">
                                                <button type="button" className="btn btn-info border border-2 border-dark rounded">Order</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-3 mx-3 my-3 pt-3 pb-3 bg-light rounded d-flex flex-column align-items-center border border-2 border-dark">
                                        <img className="w-75 h-75 justify-contents-center border border-2 border-secondary rounded" src={coffeecup} />
                                        <div className="d-flex w-100 align-items-center pt-1 justify-content-around my-2">
                                            <div id="cost" className=" text-align-center">
                                                100$
                                            </div>
                                            <div id="orderbtn">
                                                <button type="button" className="btn btn-info border border-2 border-dark rounded">Order</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-3 mx-3 my-3 pt-3 pb-3 bg-light rounded d-flex flex-column align-items-center border border-2 border-dark">
                                        <img className="w-75 h-75 justify-contents-center border border-2 border-secondary rounded" src={coffeecup} />
                                        <div className="d-flex w-100 align-items-center pt-1 justify-content-around my-2">
                                            <div id="cost" className=" text-align-center">
                                                100$
                                            </div>
                                            <div id="orderbtn">
                                                <button type="button" className="btn btn-info border border-2 border-dark rounded">Order</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-3 mx-3 my-3 pt-3 pb-3 bg-light rounded d-flex flex-column align-items-center border border-2 border-dark">
                                        <img className="w-75 h-75 justify-contents-center border border-2 border-secondary rounded" src={coffeecup} />
                                        <div className="d-flex w-100 align-items-center pt-1 justify-content-around my-2">
                                            <div id="cost" className=" text-align-center">
                                                100$
                                            </div>
                                            <div id="orderbtn">
                                                <button type="button" className="btn btn-info border border-2 border-dark rounded">Order</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-3 mx-3 my-3 pt-3 pb-3 bg-light rounded d-flex flex-column align-items-center border border-2 border-dark">
                                        <img className="w-75 h-75 justify-contents-center border border-2 border-secondary rounded" src={coffeecup} />
                                        <div className="d-flex w-100 align-items-center pt-1 justify-content-around my-2">
                                            <div id="cost" className=" text-align-center">
                                                100$
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

        </div>
    );
}

export default MenuPage;