import shopping from '../assets/images/shopping-cart.png'
import React from 'react';
const SearchBar = ({ onSearchButtonClick }) => {
    // const handleButtonClick = () => {
    //     // Access the cartDetail element using the ref
    //     if (cartDetailRef.current) {
    //         // Now you can manipulate cartDetailRef.current as needed
    //         // For example, toggle its visibility or update its content
    //     }
    // };
    return (
        <div id="search" className="d-flex flex-direction-row py-1 navbar navbar-expand-lg navbar-light bg-body-tertiary" style={{ userSelect: 'none'}}>
            <div id="search_bar" className='w-25' style={{ marginLeft: "37%",marginRight:'auto' }}>
                <div className="d-flex bg-secondary rounded border border-1 border-dark">
                    <input type="search" className="form-control rounded  border border-1 border-dark" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                    <div className="material-symbols-outlined d-flex align-items-center justify-content-center" style={{ width: '50px' }}>
                        search
                    </div>
                </div>
            </div>
            <div style={{ marginLeft: 'auto', marginRight: '1%', userSelect: 'none' }}>
                <button type="button" className="btn btn-outline-success d-flex justify-content-center align-items-center h-100 mr-0 ml-auto" style={{ userSelect: 'none' ,width:'15%'}}>
                    <img src={shopping} style={{width:'50%'}}/>
                </button>
            </div>

        </div>

    );
}

export default SearchBar;