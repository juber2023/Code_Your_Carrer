import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { getShoppingCart } from '../fakedb';
import {CurrencyDollarIcon, MapPinIcon } from '@heroicons/react/24/solid'

const AppliedJobs = () => {
    const jobsData=useLoaderData()
    const appliedJobs=getShoppingCart()
    let jobArray=[]
    for(const id in appliedJobs){
        const foundJobs=jobsData.find(job=>job.id==id)
        if(foundJobs){
            jobArray.push(foundJobs)
        }
    }
    console.log(jobArray)
    
    return (
        <div className=''>
            <h1 className='font-semibold text-2xl text-center p-16 bg-violet-50'>Applied Jobs</h1>
            <div className='w-3/4 mx-auto space-y-6 my-5'>
                {
                    jobArray.map(job=>{
                        return <div className='flex justify-between items-center p-8 border border-gray-400 shadow-lg rounded-lg' key={job.id}>
                            <div className='flex space-x-5'>
                            <img className='w-[270px] h-[200px] rounded-lg' src={job.image} alt="" />
                            <div>
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
                            </div>
                            </div>
                            
                            <Link to={`/jobDetails/${job.id}`}><button className='btn h-10'>View details</button></Link>
                            
                        </div>
                    })
                }
            </div>
        </div>
    );
};

export default AppliedJobs;