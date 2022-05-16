import React from 'react';
import aboutImg from '../../Images/about/about-me.jpg';

const About = () => {
    return (
        <div className='md:h-screen'>
            <div className='flex flex-col md:flex-row  m-12'>
                <img className='w-80 h-auto mx-auto' src={aboutImg} alt="" />
                <p className='my-auto text-center px-3 md:px-20'>Hi I'm Imdadul Haque Enan. I have passion for programming. So I've been learning programming language linke JS, React js, Node js, PHP, Java since I was 17. I am dreamimg to become a successful programmmer and Web Developer. During the practice time, I super focused and thrilled. Maybe, one day, I will become a successful programmer, till then, I'm gonna  practicing programming and develop my skills.</p>
            </div>
        </div>
    );
};

export default About;