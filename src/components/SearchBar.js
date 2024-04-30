import add from '../assets/images/add.png'
const SearchBar = () => {
    return (
        <div id="search" className="d-flex flex-direction-row bg-white py-1 search z-10" style={{ userSelect: 'none' }}>
            <div id="search_bar" className='w-25' style={{ marginLeft: "25%" }}>
                <div className="d-flex bg-secondary rounded border border-1 border-dark">
                    <input type="search" className="form-control rounded  border border-1 border-dark" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                    <div className="material-symbols-outlined d-flex align-items-center justify-content-center" style={{ width: '50px' }}>
                        search
                    </div>
                </div>
            </div>
            <div style={{ marginLeft: 'auto', marginRight: '0px', userSelect: 'none' }}>
                <button type="button" className="btn btn-success d-flex justify-content-center align-items-center h-100 mr-0 ml-auto border border-1 border-dark" style={{ userSelect: 'none' }}>
                    <img src={add} className="w-25" />
                </button>
            </div>

        </div>

    );
}

export default SearchBar;