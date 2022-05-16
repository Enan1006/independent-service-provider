import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { id, img, name, description } = service;
    const navigate = useNavigate();
    const handleServiceDetail = () => {
        navigate(`/service/${id}`);
    }
    return (
        <div className='card-container p-4'>
            <img className='w-60 h-32 mx-auto mb-5 rounded-xl' src={img} alt='' />
            <h1 className='text-2xl font-bold mb-4'>{name}</h1>
            <p>{`${description.slice(0, 200)}...`}</p>
            <button onClick={() => handleServiceDetail(id)} className=' service-button px-5 py-3 mt-5'>Appoint: {name}</button>
        </div>
    );
};

export default Service;