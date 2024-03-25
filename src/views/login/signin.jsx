import React from 'react';
import { Link } from 'react-router-dom';
function SignInPage() {
    return (
        <div className="SignInPage">
            <div class="container py-5 h-auto">
                <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col-xl-10">
                        <div class="card rounded-3 text-black">
                            <div class="row g-0">
                                <div class="col-lg-6">
                                    <div class="card-body p-md-5 mx-md-4">
                                        <div class="text-center">
                                            <img src="https://th.bing.com/th/id/OIP.GGKTC8EqZA81L_KBvEqNWgHaHa?rs=1&pid=ImgDetMainhttps://th.bing.com/th/id/OIP.GGKTC8EqZA81L_KBvEqNWgHaHa?rs=1&pid=ImgDetMain" alt="logo" class="w-50 rounded-circle"></img>
                                            <h4 class="mt-1 mb-5 pb-1">We are DUYAYVY coffee shop</h4>
                                        </div>
                                        <form>
                                            <p class="text-center">Please login to your account</p>
                                            <div class="form-outline mb-2">
                                                <label class="form-label" for="form2Example11">Username</label>
                                                <input type="email" id="form2Example11" class="form-control"
                                                    placeholder="Phone number or email address" />
                                            </div>

                                            <div class="form-outline mb-4">
                                                <label class="form-label" for="form2Example22">Password</label>
                                                <input type="password" id="form2Example22" class="form-control" />
                                            </div>

                                            <div class="text-center pt-1 mb-5 align-items-center">
                                                <button class="btn btn-primary btn-block fa-lg gradient-custom-2 px-3 ml-5"
                                                    type="button">Login</button>
                                                <a class="text-muted text-decoration-none align-items-center" href="#!">Forgot password?</a>
                                            </div>

                                            <div class="d-flex align-items-center justify-content-center pb-4">
                                                <p class="mb-0 me-2">Don't have an account?</p>
                                                <Link to="/create">
                                                    <button type="button" class="btn btn-outline-danger">Create new</button>
                                                </Link>

                                            </div>

                                        </form>

                                    </div>
                                </div>
                                <div class="col-lg-6 d-flex align-items-center gradient-custom-2">
                                    <div class="text-white px-3 py-4 p-md-5 mx-md-4 ">
                                        <h3 class="mb-4 d-flex align-items-center justify-content-center">Caffeine and Kindness</h3>
                                        <p class="small mb-0 text-center ">Feel free to use it or let me know if you’d like more options!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignInPage;
