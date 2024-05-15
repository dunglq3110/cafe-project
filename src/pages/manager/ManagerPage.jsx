// React related imports
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';

// Testing library
import { render } from '@testing-library/react';

// React-pro-sidebar components
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import Cart from './product/Cart';
import NavBar from '../../components/NavBar';
import SearchBar from '../../components/SearchBar';

// Order related imports
import MenuPage from './order/MenuPage';
import Order from './order/Order';
import Menuitem from './order/MenuItem';

// Staff related imports
import EmployeePage from './staff/EmployeePage';
import EmployeeDetail from './staff/EmployeeDetail';
import AddStaff from './staff/AddStaff';

// Product related imports
import ProductDetail from './product/ProductDetail';
import Receipt from './product/Receipt';
import ProductList from './product/ProductList';
import AddProduct from './product/AddProduct';

// Condiment related imports
import CondimentDetail from './condiment/CondimentDetail';
import CondimentList from './condiment/CondimentList';
import AddCondiment from './condiment/AddCondiment';

// Customer related imports
import Customer from './customer/CustomerPage';
import CustomerDetail from './customer/CustomderDetail';
import AddCustomer from './customer/AddCustomer';

// Assets
import avata from '../../assets/images/user.png';
import bg from '../../assets/images/bg.jpg';
import Home from './Home';
import DashBoard from './DashBoard';


const ManagerPage = () => {
    const handleSearchButtonClick = () => {
        // Logic to open the desired component
        console.log('');
    };

    return (
        <div className="ManagerPage">
            <div className="d-flex">
                <NavBar></NavBar>
                <div className="main_display" style={{
                    backgroundImage: `url(${bg})`,
                    backgroundSize: 'cover', // This will make the image cover the full screen
                    backgroundPosition: 'center', // This centers the image in the container
                    backgroundRepeat: 'no-repeat', // This will prevent the image from repeating
                    height: '100vh' // This makes the div take the full height of the viewport
                }}>
                    <div className='search_bar'>
                        <SearchBar>
                        </SearchBar>
                    </div>
                    <div className="display">
                        <Routes>
                            <Route path="home" element={<Home />} />
                            <Route path="dashboard" element={<DashBoard />} />


                            <Route path="staffs" element={<EmployeePage />} />
                            <Route path="staffs/:id" element={<EmployeeDetail />} />
                            <Route path="add-staff" element={<AddStaff />} />

                            <Route path="customers" element={<Customer />} />
                            <Route path="customers/:id" element={<CustomerDetail />} />
                            <Route path="add-customer" element={<AddCustomer />} />


                            <Route path="products" element={<ProductList />} />
                            <Route path="products/:id" element={<ProductDetail />} />
                            <Route path="add-product" element={<AddProduct />} />

                            <Route path="condiments" element={<CondimentList />} />
                            <Route path="condiments/:id" element={<CondimentDetail />} />
                            <Route path="add-condiment" element={<AddCondiment />} />

                            <Route path="receipt" element={<Receipt />} />
                            
                            <Route path="cart" element={<Cart />}/>
                            <Route path="order" element={<Order />} />

                            {/* <MenuPage></MenuPage> */}
                            {/* <Menuitem></Menuitem>  */}
                            {/* <div className="w-100 h-100">
                            <Route path="cart" element={<Cart />} />
                            <Route path="receipt" element={<Receipt />} />
                            <Route path="addstaff" element={<AddStaff />} />
                            {/* <div class="w-100 h-100">
                            <Cart></Cart>
                        </div> */}
                            {/* <ProductDetail></ProductDetail> */}
                            {/* <ProductList></ProductList> */}
                            {/* <Customer></Customer> */}
                            {/* <EmployeePage></EmployeePage> */}
                            {/*<EmployeeDetail></EmployeeDetail>*/}
                        </Routes >
                    </div >
                </div >
            </div >
        </div >
    );
}

export default ManagerPage;
