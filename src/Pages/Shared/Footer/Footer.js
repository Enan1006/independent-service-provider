import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <div className='bg-blue-500 footer'>
            <div>
                <Link to='/'
                    className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"

                >
                    <i className="fa-solid fa-scale-balanced"></i>
                    <span className='ml-3'>Justice Forum</span>
                </Link>
                <br></br>
                <p className='text-white'>A lawyer website where tou can get all kind of suggestion and help</p>
                <p className='text-white'>&copy;All right reserved {new Date().getFullYear()} </p>
            </div>
        </div>
    );
};

export default Footer;