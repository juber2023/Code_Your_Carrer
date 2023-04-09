import React from 'react';

const Home = () => {
    return (
        <div className='bg-violet-100'>
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
                <img className='h-[740px] rounded-lg object-cover w-full' src="src\assets\juber office.jpg" alt="" srcset="" />
            </div>
        </div>
        </div>
        
    );
};

export default Home;