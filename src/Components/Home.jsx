import React from 'react';
import JobList from './JobList';

const Home = () => {
    return (
        <div>
            <div className='bg-violet-50'>
            <div className='grid md:grid-cols-2 items-center gap-5 w-3/4 mx-auto'>
            <div>
                <h1 className='font-semibold text-5xl flex flex-col'>
                    <span>One Step</span>
                    <span>Closer To Your</span>
                    <span className='violet'>Dream Job</span>
                </h1>
                <p className='my-8'>
                Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.
                </p>
                <button className='btn'>Get Started</button>
            </div>
            <div>
                <img className='h-[calc(100vh-100px)] rounded-lg object-cover w-full' src="src\assets\All Images\juber.jpg" alt="" srcset="" />
            </div>
        </div>
        </div>
            <JobList></JobList>
        </div>
        
        
    );
};

export default Home;