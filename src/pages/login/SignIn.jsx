import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const SignIn = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        const response = await fetch('http://localhost:8080/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });

        const data = await response.json();

        if (data.code === 0 && data.result.authenticated) {
            const token = data.result.token;
            const decodedToken = JSON.parse(atob(token.split('.')[1]));

            if (decodedToken.scope === 'MANAGER') {
                navigate('/manager');
            } else if (decodedToken.scope === 'STAFF') {
                navigate('/staff');
            }
        }
    };

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
                                        <form onSubmit={handleSubmit}>
                                            <p className="text-center">Please login to your account</p>
                                            <div className="form-outline mb-2">
                                                <label className="form-label" htmlFor="form2Example11">Username</label>
                                                <input type="text" id="form2Example11" className="form-control"
                                                       placeholder="Your staff username" value={username} onChange={(e) => setUsername(e.target.value)} />
                                            </div>

                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="form2Example22">Password</label>
                                                <input type="password" id="form2Example22" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
                                            </div>

                                            <div className="text-center pt-1 mb-2 align-items-center">
                                                <button className="btn btn-primary btn-block fa-lg gradient-custom-2 px-3 ml-5"
                                                        type="submit">Login</button>
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

export default SignIn;
