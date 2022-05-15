import React from 'react';
import aboutImg from '../../Images/about/about-me.jpg';

const About = () => {
    return (
        <div className='h-screen'>
            <div className='flex flex-col md:flex-row  m-12'>
                <img className='w-80 h-auto mx-auto' src={aboutImg} alt="" />
                <p className='my-auto text-center px-3 md:px-20'>I have been practicing employment law exclusively for  entire legal career.  I have handled hundreds of employment disputes involving sexual harassment, discrimination, equal pay, trade secrets, whistleblowers, retaliation and restrictive covenants, among others.  I'm deeply committed to every case that I selects and optimizes the litigation strategy for my client’s goals, whether that is an early resolution or taking a case to trial.  </p>
            </div>
        </div>
    );
};

export default About;