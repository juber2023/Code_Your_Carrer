import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {CurrencyDollarIcon, MapPinIcon } from '@heroicons/react/24/solid'

const FeaturedJobs = ({jobs}) => {
    const [showCount, setShowCount] = useState(4)
    function view(){
        setShowCount(jobs.length)
    }
    // jobs.splice(4)
    return (
        <div className='w-3/4 mx-auto'>
            <div className='text-center mt-10 mb-3'>
            <h1 className='text-3xl font-bold'>Featured Jobs</h1>
            <p className='gray'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='grid md:grid-cols-2 gap-7 mb-8'> 
                { 
                    jobs.slice(0, showCount).map(job=>{
                        return <div className='p-8 border border-gray-400 shadow-lg rounded-lg' key={job.id}>
                            <img className='w-[270px] h-[200px] rounded-lg' src={job.image} alt="" />
                            <h1 className='font-semibold text-2xl'>{job.title}</h1>
                            <p>{job.name}</p>
                            <div className='flex space-x-4 violet my-3'>
                                <p className='border border-violet-400 p-1 rounded-md'>{job.method}</p>
                                <p className='border border-violet-400 p-1 rounded-md'>Full Time</p>
                            </div>
                            <div className='flex space-x-4'>
                                <p><MapPinIcon className="h-5 w-5 inline text-white bg-gray-600 rounded-full" /> {job.location}</p>
                                <p><CurrencyDollarIcon className="h-5 w-5 inline text-white bg-gray-600 rounded-full" /> Salary: {job.salary}</p>
                            </div>
                            <Link to={`/jobDetails/${job.id}`}><button className='btn mt-3'>View Details</button></Link>
                            
                        </div>
                    })
                }
            </div>
            <button onClick={view} className={`btn flex mx-auto mb-8 ${showCount==4||'hidden'}`} >See all jobs</button>
            
            
        </div>
    );
};

export default FeaturedJobs;