import React, { useEffect, useState } from 'react';

const JobList = () => {
    const [jobList, SetJobList]=useState([])
    useEffect(()=>{
        fetch('fakeJobList.json')
        .then(res=>res.json())
        .then(data=>SetJobList(data))
    },[])
    return (
        <div>
            <div className='text-center mt-10 mb-3'>
            <h1 className='text-3xl font-bold'>Job Category List</h1>
            <p className='gray'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            
            <div className='grid md:grid-cols-4 gap-8 w-3/4 mx-auto'>
            {
                jobList.map(job=>{
                    return <div key={job.id} className='bg-violet-50 p-5 rounded-lg'>
                        <img className='bg-violet-200 p-3 rounded-lg h-20' src={job.icon} alt="" />
                        <h1 className='font-semibold mt-4'>{job.title}</h1>
                        <p className='gray'>{job.vacancy}+Jobs Available</p>
                    </div>
                })
            }
        </div>
        </div>
        
    );
};

export default JobList;