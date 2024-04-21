import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import MenuPage from './product/MenuPage';
import EmployeePage from './staff/EmployeePage';
import NavBar from '../../components/NavBar';
import SearchBar from '../../components/SearchBar';
import EmployeeDetail from './staff/EmployeeDetail';
import Order from './product/Order';
import ProductDetail from './product/ProductDetail';
const ManagerPage = () => {
    // const navbarhide = document.querySelector('#close');
    // navbarhide.addEventListener("click", close);
    //
    // function close() {
    //     const navbarInner = document.querySelector('.navbar-inner');
    //     if (navbarInner) {
    //         // Decrease the width of the navbar-inner
    //         navbarInner.style.width = "5%"; // You can adjust the width as needed
    //     }
    // }
    return (
        <div className="ManagerPage" className="admin_page">
            <div className="full">
                <nav className="navbar-inner col-3">
                    <div className="h-25" id="infor" >
                        <div className="h-100">
                            <div className="h-100 user" id="user">
                                <div id="transition">
                                    <div id="open" className="button-transition">
                                        <span className="material-symbols-outlined">
                                            double_arrow
                                        </span>
                                    </div>
                                    <div id="close" className="button-transition">
                                        <span className="material-symbols-outlined">
                                            keyboard_double_arrow_left
                                        </span>

                                    </div>
                                </div>
                                <img className="image_user text-center" src='https://www.logolynx.com/images/logolynx/4b/4beebce89d681837ba2f4105ce43afac.png' alt='image user' />
                                <div className="">
                                    <div>
                                        User name
                                    </div>
                                    <div className="button-out">
                                        Logout
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="option">
                        <div className="side-button text-center" id="home">
                            <div className="material-symbols-outlined center-layout">
                                home
                            </div>
                            <p className="m-0 px-2 center-layout">Home</p>
                        </div>
                        <div className="side-button text-center" id="dashboard">
                            <div className="material-symbols-outlined center-layout">
                                dashboard
                            </div>
                            <p className="m-0 px-2 center-layout">DaskBoard</p>
                        </div>
                        <div className="side-button text-center" id="order">
                            <div className="material-symbols-outlined center-layout text-center">
                                dvr
                            </div>
                            <p className="m-0 px-2 center-layout">Order</p>
                        </div>
                        <div className="side-button text-center">
                            <div className="material-symbols-outlined center-layout">
                                category
                            </div>
                            <p className="m-0 px-2 center-layout">Product</p>
                        </div>
                        <div className="side-button text-center">
                            <div className="material-symbols-outlined center-layout">
                                group
                            </div>
                            <p className="m-0 px-2 center-layout">Employee</p>
                        </div>
                        <div className="side-button text-center">
                            <div className="material-symbols-outlined center-layout text-center">
                                account_circle
                            </div>
                            <p className="m-0 px-2 center-layout">Customer</p>
                        </div>

                    </div>

                </nav>

                <div className="col-7 overflow-auto" data-bs-spy="scroll">
                    <SearchBar>
                    </SearchBar>
                    {/* <div className="">
                        <EmployeePage>

                        </EmployeePage>
                    </div> */}
                    {/*    <MenuPage>*/}

                    {/*    </MenuPage>*/}
                    {/*</div>*/}
                    {/*<div className="text-align-center">*/}
                    <EmployeeDetail>

                    </EmployeeDetail>
                    {/*</div>*/}
                    {/*<div>*/}
                    {/*    <Order>*/}

                    {/*    </Order>*/}
                    {/*</div>*/}
                    {/*<div>*/}
                    {/*    <ProductDetail>*/}

                    {/*    </ProductDetail>*/}
                    {/*</div>*/}
                </div>

            </div>
        </div >
    );
}

export default ManagerPage;
