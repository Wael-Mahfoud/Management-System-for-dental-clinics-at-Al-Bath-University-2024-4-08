// src/app/login/page.jsx
'use client';
import { useUser } from '@/logic/UserContext';
import React, { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/navigation';
import BackMethods from '@/logic/BackMethods';
const Login = () => {
    const { backEnd_request } = BackMethods();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const router = useRouter();
    const { login } = useUser();





    const handleLogin = async (e) => {
        e.preventDefault();
        setErrorMessage("");
        // التحقق من المدخلات
        if (!email || !password) {
            setErrorMessage('Please fill in all fields');
            return;
        }

        try {
            backEnd_request.post('/login', { email: email, password: password }).then((res) => {
                if (res.data.success == true) {
                    console.log(res.data.data);
                    login(res.data.data);
                    router.push('/home');

                }
                else {
                    setErrorMessage(res.data.data)
                }
            }
            ).catch(function (error) {
                console.log(error);
            })


        } catch (error) {
            setErrorMessage(error.message);
        }
    };

    return (
        <>
            <div className="container d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
                <div className="row w-100">
                    <div className="col-md-6 col-lg-4 mx-auto">
                        <div className="card">
                            <div className='card-header  py-4'>
                                <div className="text-center">
                                    <h3 className="text-light text-capitalize">login page</h3>
                                </div>
                            </div>
                            <div className="card-body">
                                <form onSubmit={handleLogin}>
                                    <div className="form-group my-2">
                                        <label htmlFor="email" className='my-1'>Email</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            placeholder="Enter email or phone number"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group my-3">
                                        <label htmlFor="password" className='my-1'> Password</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="password"
                                            placeholder="Enter your password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </div>
                                    {errorMessage && (
                                        <div className="alert alert-danger" role="alert">
                                            {errorMessage}
                                        </div>
                                    )}
                                    <button type="submit" className="btn btn-info w-100 mt-4">Login</button>
                                </form>
                                <p className="mt-3 text-center">
                                    If you don't have an account, <a href="/user/register">click here to register</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
