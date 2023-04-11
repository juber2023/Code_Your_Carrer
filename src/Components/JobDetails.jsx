import { CalculatorIcon, CalendarIcon, CurrencyDollarIcon, EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid';
import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToDb } from '../fakedb';
import Swal from 'sweetalert2';

const JobDetails = () => {
    const [job,setJob]=useState({})
    const dynamic=useParams()
    const details=useLoaderData() 
    useEffect(()=>{
        setJob(details.find(data=>data.id==dynamic.id))   
    },[dynamic.id,details])

    function applyJob(id){
        addToDb(id)
        Swal.fire({
            icon: 'success',
            title: 'Done',
            text:'Job Applied',
            showConfirmButton: false,
            timer: 1500
          })
    }
    

    
    return (
        <div>
                <h1 className='font-semibold text-2xl text-center p-16 bg-violet-50'>Job Details</h1>
                <div className='md:flex w-3/4 mx-auto my-10 gap-10 '>
                <div className='p-4'>
                    <p><span className='font-semibold text-lg'>Job Description:</span>  {job.jobDescription}</p>
                    <p className='my-4'><span className='font-semibold text-lg'>Job Responsibility:</span>  {job.jobResponsibility}</p>
                    <p className='font-semibold text-lg'>Educational Requirements: </p>
                    <p>{job.educationalRequirement}</p>
                    <p className='font-semibold text-lg mt-4'>Experiences: </p>
                    <p>{job.experience}</p>
                </div>
                <div className='p-8 bg-violet-100 relative md:w-[1300px] rounded-lg'>
                    <h1 className='font-semibold'>Job Details</h1>
                    <hr className='mb-2' />
                    <p><CurrencyDollarIcon className="icon" /><span className='font-semibold'>Salary:</span>  {job.salary}(per month)</p>
                    <p><CalendarIcon className="icon" /><span className='font-semibold'>Job Title:</span>  {job.title}</p>
                    <h1 className='font-semibold mt-5'>Contact Information</h1>
                    <hr className='mb-2' />
                    <p><PhoneIcon className="icon" /><span className='font-semibold'>Phone: </span> {job.phone}</p>
                    <p><EnvelopeIcon className="icon" /><span className='font-semibold'>Email:</span>  {job.email}</p>
                    <p><MapPinIcon className="icon" /><span className='font-semibold'>Address:</span>  {job.location}</p>
                    <button onClick={()=>applyJob(job.id)}  className='btn w-full absolute -bottom-14 -translate-x-8'>Apply now</button>
                </div>
                
                </div>
                
                
        </div>
    );
};

export default JobDetails;