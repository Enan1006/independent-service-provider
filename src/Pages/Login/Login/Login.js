import React, { useRef, useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import loginImg from '../../../Images/login/login.jpg';
import SocialLogin from '../SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { async } from '@firebase/util';


const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);



    const navigate = useNavigate();
    let location = useLocation();

    const [sendPasswordResetEmail, sending, reseterror] = useSendPasswordResetEmail(
        auth
    );

    const emailRef = useRef('');
    const passwordRef = useRef('');
    let from = location.state?.from?.pathname || "/";
    const handleSignIn = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email, password);
        signInWithEmailAndPassword(email, password);

    }
    let errormessage;
    if (error) {
        toast(`${error?.message}`);
        // toast('Login Unsuccessful');
    }

    const SendPasswordReset = async (event) => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Reset link has been sent');
        }
        else {
            toast('Please enter email address');
        }
    }



    if (user) {
        navigate(from, { replace: true });
    }

    const navigatetoRegister = () => {
        navigate('/register');
    }

    return (
        <div>
            <div className="flex items-center min-h-screen bg-gray-50">
                <div className="flex-1 h-full max-w-4xl mx-auto bg-white rounded-lg shadow-xl">
                    <div className="flex flex-col md:flex-row">
                        <div className="h-32 md:h-auto md:w-1/2">
                            <img className="object-cover w-full h-full" src={loginImg}
                                alt="img" />
                        </div>
                        <div className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
                            <div className="w-full">
                                <div className="flex justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-20 h-20 text-blue-600" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                        <path
                                            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                                    </svg>
                                </div>
                                <h1 className="mb-4 text-2xl font-bold text-center text-gray-700">
                                    Login to Your Account
                                </h1>
                                <form onSubmit={handleSignIn}>
                                    <div>
                                        <label className="block text-sm">
                                            Email
                                        </label>
                                        <input ref={emailRef} type="email"
                                            className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                                            placeholder="" />
                                    </div>
                                    <div>
                                        <label className="block mt-4 text-sm">
                                            Password
                                        </label>
                                        <input ref={passwordRef}
                                            className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                                            placeholder="" type="password" />
                                    </div>
                                    <p className="mt-4">
                                        <button onClick={SendPasswordReset} className="text-sm text-blue-600 hover:underline" href="./forgot-password.html">
                                            Forgot your password?
                                        </button>
                                    </p>

                                    <p className="mt-4">
                                        <button onClick={navigatetoRegister} className="text-sm text-blue-600 hover:underline" href="./forgot-password.html">
                                            Haven't created any account yet? <span className='text-red-600'> Register</span>
                                        </button>
                                    </p>


                                    <button
                                        className="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg active:bg-blue-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
                                        href="#">
                                        Log in
                                    </button>
                                </form>


                                <hr className="my-8" />


                                <SocialLogin></SocialLogin>
                            </div>
                        </div>
                    </div>
                </div>
                <ToastContainer />

            </div>


        </div >
    );
};

export default Login;