import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    const navigate = useNavigate();
    const navigateCheckout = () => {
        navigate('/checkout');
    }
    return (
        <div className='h-screen'>
            <h1 className='text-3xl text-center'>Service detail of: {serviceId}</h1>
            <button onClick={navigateCheckout} className='bg-blue-100 text-blue-600 px-5 py-3 mt-7 rounded-lg'>Proceed to checkout</button>
        </div>
    );
};

export default ServiceDetail;