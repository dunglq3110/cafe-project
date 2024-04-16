import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import Menu_page from './Menu_page';
import NavBar from './NavBar';
function ManagerPage() {
    return (
        <div className="ManagerPage" class="admin_page">
            <div class="full">
                <div class="col-3">
                    <NavBar>

                    </NavBar>
                </div>
                <div class="col-7">
                    <Menu_page>

                    </Menu_page>
                </div>

            </div>
        </div >
    );
}

export default ManagerPage;
