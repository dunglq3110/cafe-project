
function NavBar() {
    return (
        <div className="NavBar">
            <div class="navbar-inner">
                <div class="h-25" id="user">
                    <div class="h-100 user">
                        <div>
                            <span class="material-symbols-outlined">
                                double_arrow
                            </span>
                        </div>
                        <div>
                            <span class="material-symbols-outlined">
                                keyboard_double_arrow_left
                            </span>
                        </div>
                        <img class="image_user text-center" src='https://www.logolynx.com/images/logolynx/4b/4beebce89d681837ba2f4105ce43afac.png' alt='image user'>
                        </img>
                        <div class="">
                            <div>
                                User name
                            </div>
                            <button>
                                Logout
                            </button>
                        </div>
                    </div>

                </div>
                <div class="side-button text-center">
                    <div class="material-symbols-outlined center-layout">
                        home
                    </div>
                    <p class="m-0 px-2 center-layout">Home</p>
                </div>
                <div class="side-button text-center">
                    <div class="material-symbols-outlined center-layout">
                        dashboard
                    </div>
                    <p class="m-0 px-2 center-layout">DaskBoard</p>
                </div>
                <div class="side-button text-center">
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

            </div>

        </div>
    );
}
export default NavBar;