import add from './image/add.png'
function searchbar() {
    return (
        <div className="searchbar">
            <div id="drink-menu" class="d-flex justify-content-between bg-white">
                <div class="w-15 border border-1 border-dark bg-secondary">
                </div>
                <div id="search_bar">
                    <div class="d-flex bg-secondary rounded border border-1 border-dark">
                        <input type="search" class="form-control rounded  border border-1 border-dark" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                        <div class="material-symbols-outlined d-flex align-items-center">
                            search
                        </div>
                    </div>
                </div>
                <div class=" mr-2 ">
                    <button type="button" class="btn btn-success d-flex justify-content-center align-items-center h-100 mr-0 ml-auto border border-1 border-dark">
                        <img src={add} class="w-25"/>
                    </button>
                </div>

            </div>
        </div>

    );
}

export default searchbar;