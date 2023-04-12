import React, { useEffect, useState } from 'react';
import JobList from './JobList';
import FeaturedJobs from './FeaturedJobs';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const jobs=useLoaderData()
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
                <img className='h-[calc(100vh-100px)] rounded-lg object-cover w-full' src="https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?w=826&t=st=1681123049~exp=1681123649~hmac=81b39e14104d3abaf45ee1dd4f83203160e403868c2525d369d3197fd7473373" alt="" srcSet="" />
            </div>
        </div>
        </div>
            <JobList></JobList>
            <FeaturedJobs jobs={jobs}></FeaturedJobs>
            
        </div>
        
        
    );
};

export default Home;