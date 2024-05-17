import shopping from '../assets/images/shopping-cart.png'
import React from 'react';
import { Link } from 'react-router-dom';
import add from '../assets/images/add.png'

const SearchBar = ({ receipt, newOrder }) => {

    return (
        <div id="search" className="d-flex flex-direction-row py-1 navbar navbar-expand-lg navbar-light bg-body-tertiary" style={{ userSelect: 'none' }}>
            <div id="search_bar" className='w-25' style={{ marginLeft: "37%", marginRight: 'auto' }}>
                <div className="d-flex bg-secondary rounded border border-1 border-dark">
                    <input type="search" className="form-control rounded  border border-1 border-dark" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                    <div className="material-symbols-outlined d-flex align-items-center justify-content-center" style={{ width: '50px' }}>
                        search
                    </div>
                </div>
            </div>
            <div style={{ marginLeft: 'auto', marginRight: '1%', userSelect: 'none' }}>
                {receipt ? (
                    <button type="button" className="btn btn-outline-success d-flex justify-content-center align-items-center h-100 mr-0 ml-auto" style={{ userSelect: 'none', width: '15%' }}>
                        <Link to="/manager/cart">
                            <img src={shopping} style={{ width: '50%' }} />
                        </Link>
                    </button>
                ) : (
                    <div class="" style={{ marginRight: '0px', marginLeft: 'auto', width: '10%' }}>
                        <a class="btn btn-success w-100" onClick={newOrder}>
                            <img src={add} alt="add" className="button-transition" />
                        </a>
                    </div>
                )}
            </div>
        </div>

    );
}

export default SearchBar;