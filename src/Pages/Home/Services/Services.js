import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(Response => Response.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='services bg-white py-24'>
            <h1 className='text-4xl text-blue-600 text-center'>Services: {services.length}</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 p-7'>
                {
                    services.map(service => <Service service={service} key={service.id}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;