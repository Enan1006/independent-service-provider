import React, { useEffect, useState } from 'react';
import Quote from '../Quote/Quote';

const Quotes = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('quotes.json')
            .then(Response => Response.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className='services pb-16'>
            <h1 className='text-4xl text-blue-600 text-center mb-8'>Services: {reviews.length}</h1>
            <div className='grid grid-cols-1 md:grid-cols-3'>
                {
                    reviews.map(review => <Quote
                        review={review}
                        key={review.id}
                    >

                    </Quote>)
                }
            </div>
        </div>

    );
};

export default Quotes;