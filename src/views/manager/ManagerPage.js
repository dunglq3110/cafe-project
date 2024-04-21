import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import Menu_page from './Menu_page';
import Employee_page from './Employee_page';
import NavBar from './NavBar';
import Searchbar from './searchbar';
import Employee_detail from './Employee_detail';
import Order from './Order';
import Product_detail from './Product_detail';
import Product_list from './Product_list';
function ManagerPage() {
    // const navbarhide = document.querySelector('#close');
    // navbarhide.addEventListener("click", close);

    // function close() {
    //     const navbarInner = document.querySelector('.navbar-inner');
    //     if (navbarInner) {
    //         // Decrease the width of the navbar-inner
    //         navbarInner.style.width = "5%"; // You can adjust the width as needed
    //     }
    // }
    return (
        <div className="ManagerPage" class="admin_page">
            <div class="full">
                <nav class="navbar-inner col-3">
                    <div class="h-25" id="infor" >
                        <div class="h-100">
                            <div class="h-100 user" id="user">
                                <div id="transition">
                                    <div id="open" class="button-transition">
                                        <span class="material-symbols-outlined">
                                            double_arrow
                                        </span>
                                    </div>
                                    <div id="close" class="button-transition">
                                        <span class="material-symbols-outlined">
                                            keyboard_double_arrow_left
                                        </span>

                                    </div>
                                </div>
                                <img class="image_user text-center" src='https://www.logolynx.com/images/logolynx/4b/4beebce89d681837ba2f4105ce43afac.png' alt='image user' />
                                <div class="">
                                    <div>
                                        User name
                                    </div>
                                    <div class="button-out">
                                        Logout
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="option">
                        <div class="side-button text-center" id="dashboard">
                            <div class="material-symbols-outlined center-layout">
                                dashboard
                            </div>
                            <p class="m-0 px-2 center-layout">DaskBoard</p>
                        </div>
                        <div class="side-button text-center" id="order">
                            <div class="material-symbols-outlined center-layout text-center">
                                dvr
                            </div>
                            <p class="m-0 px-2 center-layout">Order</p>
                        </div>
                        <div class="side-button text-center">
                            <div class="material-symbols-outlined center-layout">
                                category
                            </div>
                            <p class="m-0 px-2 center-layout">Product</p>
                        </div>
                        <div class="side-button text-center">
                            <div class="material-symbols-outlined center-layout">
                                group
                            </div>
                            <p class="m-0 px-2 center-layout">Employee</p>
                        </div>
                        <div class="side-button text-center">
                            <div class="material-symbols-outlined center-layout text-center">
                                account_circle
                            </div>
                            <p class="m-0 px-2 center-layout">Customer</p>
                        </div>
                        <div class="side-button text-center">
                            <div class="material-symbols-outlined">
                                category
                            </div>
                            <p class="m-0 px-2 center-layout">Product</p>
                        </div>

                    </div>

                </nav>

                <div class="col-7 overflow-auto" data-bs-spy="scroll">
                    <Searchbar>
                    </Searchbar>
                        <div class="">
                            <Menu_page>

                            </Menu_page>
                        </div>
{/* 
                    <div class="">
                        <Employee_page>

                        </Employee_page>
                    </div>
                    <div class="text-align-center">
                        <Employee_detail>

                        </Employee_detail>
                    </div>
                    <div>
                        <Order>

                        </Order>
                    </div>
                    <div>
                        <Product_detail>

                        </Product_detail>
                    </div>

                    <Product_list>

                    </Product_list> */}
                </div>

            </div>
        </div >
    );
}

export default ManagerPage;
