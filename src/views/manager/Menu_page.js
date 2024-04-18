import coffeecup from './image/coffee-cup.png';
import "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js";
function Menu_page() {
    return (
        <div className="Menu_page">
            <div class="menu_container h-100">

                <div id="drink-show" class="h-100">
                    <div id="drink-item" class="row">
                        <div id="food-option" class="col-3 h-100">
                            <div class="side-button">Drink 1</div>
                            <div class="side-button">Drink 1</div>
                            <div class="side-button">Drink 1</div>
                        </div>

                        <div id="item" class="flex col-7">
                            <div id="food-show" >
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
                                <div id="list-food" class="flex flex-row">
                                    <div class="w-25 flex pt-1 m-1 bg-light rounded align-items-center">
                                        <img class="w-50" src={coffeecup} />
                                        <div>
                                            <div class="d-flex align-items-center pt-1">
                                                <div id="cost" class="align-items-center">
                                                    100$
                                                </div>
                                                <div id="orderbtn">
                                                    <button type="button" class="btn btn-info">Order</button>
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

        </div>
    );
}

export default Menu_page;