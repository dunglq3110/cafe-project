import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import Menu_page from './Menu_page';
import Employee_page from './Employee_page';
import NavBar from './NavBar';
import Searchbar from './searchbar';
function ManagerPage() {
    // const navbarhide = document.querySelector('#close');
    // navbarhide.addEventListener("click", close);
    
    // function close() {
    //     const navbarInner = document.querySelector('.navbar-inner');
    //     if (navbarInner) {
    //         // Decrease the width of the navbar-inner
    //         navbarInner.style.width = "50%"; // You can adjust the width as needed
    //     }
    // }
    return (
        <div className="ManagerPage" class="admin_page">
            <div class="full">
                <div class="col-3">
                    <NavBar>

                    </NavBar>
                </div>
                <div class="col-7">
                    {/* <Menu_page>

                    </Menu_page> */}
                    <Searchbar>

                    </Searchbar>
                    <Employee_page>

                    </Employee_page>
                </div>

            </div>
        </div >
    );
}

export default ManagerPage;
