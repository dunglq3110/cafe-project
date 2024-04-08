import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
function ManagerPage() {
    return (
        <div className="ManagerPage" class="admin_page">
            <div class="full">
                <div class="col-3 position-relative">
                    <div class="h-25" id="user">
                        <div class="bg-secondary h-100 user">
                            <img class="image_user text-center" src='https://www.logolynx.com/images/logolynx/4b/4beebce89d681837ba2f4105ce43afac.png' alt='image user'>
                            </img>
                            <div>
                                some information about user
                            </div>
                        </div>

                    </div>
                    <div>
                        <div class="material-symbols-outlined">
                            close
                        </div>
                    </div>
                    <div class="side-button text-center">
                        <div class="material-symbols-outlined">
                            home
                        </div>
                        <p class="m-0 px-2">Home</p>
                    </div>
                    <div class="side-button text-center">
                        <div class="material-symbols-outlined">
                            dashboard
                        </div>
                        <p class="m-0 px-2">DaskBoard</p>
                    </div>
                    <div class="side-button text-center">
                        <div class="material-symbols-outlined">
                            dvr
                        </div>
                        <p class="m-0 px-2">Order</p>
                    </div>
                    <div class="side-button text-center">
                        <div class="material-symbols-outlined">
                            category
                        </div>
                        <p class="m-0 px-2">Product</p>
                    </div>
                    <div class="side-button text-center">
                        <div class="material-symbols-outlined">
                            group
                        </div>
                        <p class="m-0 px-2">Employee</p>
                    </div>
                    <div class="side-button text-center">
                        <div class="material-symbols-outlined">
                            account_circle
                        </div>
                        <p class="m-0 px-2">Customer</p>
                    </div>
                    <div class="side-button text-center position-absolute bottom-0 px-2">
                        <div class="material-symbols-outlined">
                            logout
                        </div>
                        <p class="m-0 px-2">Logout</p>
                    </div>
                </div>
                <div class="col-7">
                    <div class="" id="mainpage">

                    </div>
                </div>
            </div>
        </div >
    );
}

export default ManagerPage;
