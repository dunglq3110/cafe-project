function searchbar() {
    return (
        <div className="searchbar">
            <div id="drink-menu" >
                <div id="search_bar">
                    <div class="input-group rounded">
                        <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                        <span class="material-symbols-outlined">
                            search
                        </span>
                    </div>
                </div>

            </div>
        </div>

    );
}

export default searchbar;