import coffeecup from './image/coffee-cup.png';
import "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js";
function Menu_page() {
    return (
        <div className="Menu_page">
            <div class="menu_container h-100">
                <div id="drink-show" class="h-100 ">
                    <div id="drink-item" class="row container h-100 overflow-auto mt-2">
                        <div id="food-option" class="h-100 d-flex flex-column col-2 bg-secondary">
                            <div class="side-button">Drink 1</div>
                            <div class="side-button">Drink 1</div>
                            <div class="side-button">Drink 1</div>
                        </div>

                        <div id="item" class="flex col-10 bg-menu rounded">
                            <div id="food-show" class="mt-2">
                                <div class="row d-flex align-items-center" id="filter-bar">
                                    <div class="dropdown col">
                                        <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown">
                                            Product
                                        </button>
                                        <ul class="dropdown-menu">
                                            <li><a class="dropdown-item" href="#">Link 1</a></li>
                                            <li><a class="dropdown-item" href="#">Link 2</a></li>
                                            <li><a class="dropdown-item" href="#">Link 3</a></li>
                                        </ul>
                                    </div>
                                    <div class="dropdown col">
                                        <button type="button" class="btn btn-success dropdown-toggle" data-bs-toggle="dropdown">
                                            Type
                                        </button>
                                        <ul class="dropdown-menu">
                                            <li><a class="dropdown-item" href="#">Link 1</a></li>
                                            <li><a class="dropdown-item" href="#">Link 2</a></li>
                                            <li><a class="dropdown-item" href="#">Link 3</a></li>
                                        </ul>
                                    </div>
                                    <div class="dropdown col">
                                        <button type="button" class="btn btn-warning dropdown-toggle" data-bs-toggle="dropdown">
                                            Status
                                        </button>
                                        <ul class="dropdown-menu">
                                            <li><a class="dropdown-item" href="#">Link 1</a></li>
                                            <li><a class="dropdown-item" href="#">Link 2</a></li>
                                        </ul>
                                    </div>
                                    <div id="apply" class="col">
                                        Apply
                                    </div>
                                    <div id="reset" class="col">
                                        Reset
                                    </div>
                                </div>
                                <div id="list-food" class="d-flex row">
                                    <div class="col-3 mx-3 my-3 pt-3 pb-3 bg-light rounded d-flex flex-column align-items-center border border-2 border-dark">
                                        <img class="w-75 h-75 justify-contents-center border border-2 border-secondary rounded" src={coffeecup} />
                                        <div class="d-flex w-100 align-items-center pt-1 justify-content-around my-2">
                                            <div id="cost" class=" text-align-center">
                                                100$
                                            </div>
                                            <div id="orderbtn">
                                                <button type="button" class="btn btn-info border border-2 border-dark rounded">Order</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-3 mx-3 my-3 pt-3 pb-3 bg-light rounded d-flex flex-column align-items-center border border-2 border-dark">
                                        <img class="w-75 h-75 justify-contents-center border border-2 border-secondary rounded" src={coffeecup} />
                                        <div class="d-flex w-100 align-items-center pt-1 justify-content-around my-2">
                                            <div id="cost" class=" text-align-center">
                                                100$
                                            </div>
                                            <div id="orderbtn">
                                                <button type="button" class="btn btn-info border border-2 border-dark rounded">Order</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-3 mx-3 my-3 pt-3 pb-3 bg-light rounded d-flex flex-column align-items-center border border-2 border-dark">
                                        <img class="w-75 h-75 justify-contents-center border border-2 border-secondary rounded" src={coffeecup} />
                                        <div class="d-flex w-100 align-items-center pt-1 justify-content-around my-2">
                                            <div id="cost" class=" text-align-center">
                                                100$
                                            </div>
                                            <div id="orderbtn">
                                                <button type="button" class="btn btn-info border border-2 border-dark rounded">Order</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-3 mx-3 my-3 pt-3 pb-3 bg-light rounded d-flex flex-column align-items-center border border-2 border-dark">
                                        <img class="w-75 h-75 justify-contents-center border border-2 border-secondary rounded" src={coffeecup} />
                                        <div class="d-flex w-100 align-items-center pt-1 justify-content-around my-2">
                                            <div id="cost" class=" text-align-center">
                                                100$
                                            </div>
                                            <div id="orderbtn">
                                                <button type="button" class="btn btn-info border border-2 border-dark rounded">Order</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-3 mx-3 my-3 pt-3 pb-3 bg-light rounded d-flex flex-column align-items-center border border-2 border-dark">
                                        <img class="w-75 h-75 justify-contents-center border border-2 border-secondary rounded" src={coffeecup} />
                                        <div class="d-flex w-100 align-items-center pt-1 justify-content-around my-2">
                                            <div id="cost" class=" text-align-center">
                                                100$
                                            </div>
                                            <div id="orderbtn">
                                                <button type="button" class="btn btn-info border border-2 border-dark rounded">Order</button>
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

export default Menu_page;