import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);

    return (
        <>
            <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-blue-600 mb-3">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <Link to='/'
                            className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"

                        >
                            <i class="fa-solid fa-scale-balanced"></i>
                            <span className='ml-3'>Justice Forum</span>
                        </Link>
                        <button
                            className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <i className="fas fa-bars"></i>
                        </button>
                    </div>
                    <div
                        className={
                            "lg:flex flex-grow items-center" +
                            (navbarOpen ? " flex" : " hidden")
                        }
                        id="example-navbar-danger"
                    >
                        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                            <li className="nav-item">
                                <Link to='/about'
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                                    href="#pablo"
                                >
                                    <i className="fa-solid fa-user text-lg leading-lg text-white opacity-75"></i><span className="ml-2">About</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/blogs'
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                                    href="#pablo"
                                >
                                    <i className="fa-solid fa-blog text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Blogs</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                                    href="#pablo"
                                >
                                    <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Pin</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;