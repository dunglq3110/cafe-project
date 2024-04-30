import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import MenuPage from './product/MenuPage';
import EmployeePage from './staff/EmployeePage';
import NavBar from '../../components/NavBar';
import SearchBar from '../../components/SearchBar';
import EmployeeDetail from './staff/EmployeeDetail';
import Order from './product/Order';
import ProductDetail from './product/ProductDetail';
import avata from '../../assets/images/user.png';
import Customer from './staff/Customer';
import ProductList from './product/ProductList';
import bg from '../../assets/images/bg.jpg';
const ManagerPage = () => {
    return (
        <div className="ManagerPage" class="admin_page">
            <div class="d-flex">
                <div className='nav_bar'>
                    <NavBar></NavBar>
                </div>
                <div className="main_display">
                    <div className='search_bar'>
                        <SearchBar>

                        </SearchBar>
                    </div>

                    <div className="display" style={{
                        backgroundImage: `url(${bg})`,
                        backgroundSize: 'cover', // This will make the image cover the full screen
                        backgroundPosition: 'center', // This centers the image in the container
                        backgroundRepeat: 'no-repeat', // This will prevent the image from repeating
                        height: '100vh' // This makes the div take the full height of the viewport
                    }}>
                        {/* <MenuPage></MenuPage> */}
                        <Order></Order>
                        {/* <ProductDetail></ProductDetail> */}
                        {/* <ProductList></ProductList> */}
                        {/* <Customer></Customer> */}
                        {/* <EmployeePage></EmployeePage> */}
                        {/* <EmployeeDetail></EmployeeDetail> */}

                    </div>

                </div>
            </div>
        </div >
    );
}

export default ManagerPage;
