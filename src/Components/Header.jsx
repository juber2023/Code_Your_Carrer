import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Header = () => {
    const ActiveLink=({to,children})=>{
        return(
            <NavLink to={to} className={({isActive})=>isActive? 'text-violet-500':''}>{children}</NavLink>
        )
    }

    return (
        <div className='w-3/4 mx-auto'>
            <nav className='flex justify-between my-5 items-center'>
                <h1 className='text-xl font-semibold'>Code Your Career</h1>
                <div className='space-x-5'>
                    <ActiveLink to='/'>Home</ActiveLink>
                    <ActiveLink to='statistics'>Statistics</ActiveLink>
                    <ActiveLink to='appliedJobs'>Applied Jobs</ActiveLink>
                    <ActiveLink to='blog'>Blog</ActiveLink>
                </div>
                <div>
                    <button className='bg-violet-500 p-2 rounded-xl text-white font-semibold'>Start Applying</button>
                </div>
                
            </nav>
            <Outlet></Outlet>
        </div>
    );
};

export default Header;