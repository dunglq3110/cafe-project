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
import ProductList from './product/ProductList';
import Menuitem from './product/MenuItem';
import bg from '../../assets/images/bg.jpg';
import { render } from '@testing-library/react';
import { Routes, Route } from 'react-router-dom';

const ManagerPage = () => {
    const handleSearchButtonClick = () => {
        // Logic to open the desired component
        console.log('');
    };

    return (
        <div className="ManagerPage">
            <div className="d-flex">
                <div className='nav_bar'>
                    <NavBar></NavBar>
                </div>
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
                            <Route path="staffs" element={<EmployeePage />} />
                            <Route path="staffs/:id" element={<EmployeeDetail />} />
                            <Route path="order" element={<Order />} />
                            <Route path="products" element={<ProductList />} />
                            {/* <MenuPage></MenuPage> */}
                            {/* <Menuitem></Menuitem>  */}
                            {/* <div class="w-100 h-100">
                            <Cart></Cart>
                        </div> */}
                        {/* <ProductDetail></ProductDetail> */}
                        {/* <ProductList></ProductList> */}
                        {/* <Customer></Customer> */}
                        {/* <EmployeePage></EmployeePage> */}
                        {/*<EmployeeDetail></EmployeeDetail>*/}
                        </Routes>

                    </div>
                </div>
            </div>
        </div >
    );
}

export default ManagerPage;
