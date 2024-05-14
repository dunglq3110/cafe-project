import React, { useState } from "react";
import { CSSTransition } from 'react-transition-group';
import { Link } from 'react-router-dom';


const NavBar = () => {
    const [isVisible, setIsVisible] = useState(true);

    // Function to toggle visibility
    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };
    return (
        <div className={`"navbar-inner nav_bar ${!isVisible ? 'nav_bar_change' : ''}`}>
            <div id="transition" class="user-select-none d-flex justify-content-end">
                <div id="open" className={`button-transition ${isVisible ? 'd-none' : ''}`} onClick={toggleVisibility}>
                    <span className="material-symbols-outlined">
                        double_arrow
                    </span>
                </div>
                <div id="close" className={`button-transition ${isVisible ? '' : 'd-none'}`} onClick={toggleVisibility}>
                    <span className="material-symbols-outlined">
                        keyboard_double_arrow_left
                    </span>
                </div>
            </div>
            <div className="w-100">
                <div className="h-100 w-100" id="user" style={{ display: isVisible ? '' : 'none' }}>
                    <div className='h-100 w-100 user' id="infor_user">
                        <img className="image_user text-center img-thumbnail rounded-circle"
                            src='https://www.logolynx.com/images/logolynx/4b/4beebce89d681837ba2f4105ce43afac.png'
                            alt='image user' />
                        <div className="w-100 user">
                            <div className="w-75 bg-secondary d-flex justify-content-center fw-bold" style={{
                                background: "#B1855E",
                                borderRadius: '5px',
                                border: '2px solid black'
                            }}>
                                User Name
                            </div>
                            <Link to="/signin" className="button-out w-50 mt-2">
                                Logout
                            </Link>
                        </div>
                    </div>
                    <div style={{ width: '100%', height: '1px', background: 'black', marginTop: '5px' }}>
                    </div>
                </div>

                <div id="side-button" style={{ marginTop: isVisible ? '' : '75%' }}>
                    <Link to="/manager/home" className="nav-link" >
                        <div className="side-button text-center" id="home" style={{ justifyContent: isVisible ? '' : 'center', alignItems: isVisible ? '' : 'center', display: isVisible ? '' : 'flex' }}>
                            <div className="material-symbols-outlined center-layout" >
                                home
                            </div>
                            <p className="m-0 px-2 center-layout" style={{ display: isVisible ? '' : 'none' }}>Home</p>
                        </div>
                    </Link>
                    <Link to="/manager/dashboard" className="nav-link" >

                        <div className="side-button text-center" id="dashboard" style={{ justifyContent: isVisible ? '' : 'center', alignItems: isVisible ? '' : 'center', display: isVisible ? '' : 'flex' }}>
                            <div className="material-symbols-outlined center-layout">
                                dashboard
                            </div>
                            <p className="m-0 px-2 center-layout" style={{ display: isVisible ? '' : 'none' }}>DaskBoard</p>
                        </div>
                    </Link>

                </div>

                <Link to="/manager/receipt" className="nav-link" >
                    <div className="side-button text-center active" id="receipt" role="button" aria-pressed="true" style={{ justifyContent: isVisible ? '' : 'center', alignItems: isVisible ? '' : 'center', display: isVisible ? '' : 'flex' }}>
                        <div class="material-symbols-outlined center-layout text-center">
                            receipt_long
                        </div>
                        <p className="m-0 px-2 center-layout" style={{ display: isVisible ? '' : 'none' }}>Receipt</p>
                    </div>
                </Link>

                <Link to="/manager/order" className="nav-link">
                    <div className="side-button text-center" id="order" style={{ justifyContent: isVisible ? '' : 'center', alignItems: isVisible ? '' : 'center', display: isVisible ? '' : 'flex' }}>
                        <div className="material-symbols-outlined center-layout text-center">
                            dvr
                        </div>
                        <p className="m-0 px-2 center-layout" style={{ display: isVisible ? '' : 'none' }}>Order</p>
                    </div>
                </Link>

                <Link to="/manager/products" className="nav-link">
                    <div className="side-button text-center" style={{ justifyContent: isVisible ? '' : 'center', alignItems: isVisible ? '' : 'center', display: isVisible ? '' : 'flex' }}>
                        <div className="material-symbols-outlined center-layout">
                            category
                        </div>
                        <p className="m-0 px-2 center-layout" style={{ display: isVisible ? '' : 'none' }}>Product</p>
                    </div>
                </Link>
                <Link to="/manager/condiments" className="nav-link">
                    <div className="side-button text-center">
                        <div className="material-symbols-outlined center-layout">
                            category
                        </div>
                        <p className="m-0 px-2 center-layout">Condiment</p>
                    </div>
                </Link>
                <Link to="/manager/staffs" className="nav-link">
                    <div className="side-button text-center" style={{ justifyContent: isVisible ? '' : 'center', alignItems: isVisible ? '' : 'center', display: isVisible ? '' : 'flex' }}>
                        <div className="material-symbols-outlined center-layout">
                            group
                        </div>
                        <p className="m-0 px-2 center-layout" style={{ display: isVisible ? '' : 'none' }}>Employee</p>
                    </div>
                </Link>

                <Link to="/manager/customers" className="nav-link">
                    <div className="side-button text-center" style={{ justifyContent: isVisible ? '' : 'center', alignItems: isVisible ? '' : 'center', display: isVisible ? '' : 'flex' }}>
                        <div className="material-symbols-outlined center-layout text-center">
                            account_circle
                        </div>
                        <p className="m-0 px-2 center-layout" style={{ display: isVisible ? '' : 'none' }}>Customer</p>
                    </div>
                </Link>

            </div>
        </div>

        </div >
    );
}
export default NavBar;