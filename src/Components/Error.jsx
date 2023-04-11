import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='flex flex-col justify-center items-center h-screen'>
            <p className='font-extrabold text-7xl'>404</p>
            <h1 className='font-bold text-red-800 text-2xl mt-6'>Oops! Page not found.</h1>
      <p>We're sorry, but the page you requested could not be found.</p>
      <Link to='/'><button className='btn mt-3'>Back To Home Page</button></Link>
      
        </div>
    );
};

export default Error;