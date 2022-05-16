import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const CheckOut = () => {
    const [user, loading] = useAuthState(auth);
    if (loading) {
        return (
            <div>
                <p>Initialising User...</p>
            </div>
        );
    }

    return (
        <div className='h-screen'>
            <h1 className='text-5xl text-blue-600 text-center'>CheckOut Page</h1>
        </div>
    );
};

export default CheckOut;