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

                    <div className="display">
                        <MenuPage></MenuPage>
                    </div>

                </div>
            </div>
        </div >
    );
}

export default ManagerPage;
