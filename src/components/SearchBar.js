import add from '../assets/images/add.png'
const SearchBar = () => {
    return (
        <div className="searchbar">
            <div id="drink-menu" className="d-flex justify-content-between bg-white">
                <div className="w-15 border border-1 border-dark bg-secondary">
                </div>
                <div id="search_bar">
                    <div className="d-flex bg-secondary rounded border border-1 border-dark">
                        <input type="search" className="form-control rounded  border border-1 border-dark" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                        <div className="material-symbols-outlined d-flex align-items-center">
                            search
                        </div>
                    </div>
                </div>
                <div className=" mr-2 ">
                    <button type="button" className="btn btn-success d-flex justify-content-center align-items-center h-100 mr-0 ml-auto border border-1 border-dark">
                        <img src={add} className="w-25"/>
                    </button>
                </div>

            </div>
        </div>

    );
}

export default SearchBar;