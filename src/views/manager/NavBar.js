function NavBar() {
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
        <div className="NavBar">
            <div class="navbar-inner">
                <div class="h-25" id="infor" >
                    <div class="h-100">
                        <div class="h-100 user" id="user">
                            <div id="transition">
                                <div id="open" class="button-transition">
                                    <span class="material-symbols-outlined">
                                        double_arrow
                                    </span>
                                </div>
                                <button id="close" class="button-transition">
                                    <span class="material-symbols-outlined">
                                        keyboard_double_arrow_left
                                    </span>

                                </button>
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
                    <div class="side-button text-center" id="home">
                        <div class="material-symbols-outlined center-layout">
                            home
                        </div>
                        <p class="m-0 px-2 center-layout">Home</p>
                    </div>
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

                </div>

            </div>

        </div >
    );
}
export default NavBar;