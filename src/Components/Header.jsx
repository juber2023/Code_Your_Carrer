import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Header = () => {
    const ActiveLink=({to,children})=>{
        return(
            <NavLink to={to} className={({isActive})=>isActive? 'text-violet-500':''}>{children}</NavLink>
        )
    }

    return (
        <div className=''>
            <div className='bg-violet-50'>
                <nav className='md:flex justify-between py-5 items-center w-3/4 mx-auto'>
                    <h1 className='text-xl font-semibold'>Code Your Career</h1>
                    <div className='space-x-5'>
                        <ActiveLink to='/'>Home</ActiveLink>
                        <ActiveLink to='statistics'>Statistics</ActiveLink>
                        <ActiveLink to='appliedJobs'>Applied_Jobs</ActiveLink>
                        <ActiveLink to='blog'>Blog</ActiveLink>
                    </div>
                    <div>
                        <button className='btn'>Start Applying</button>
                    </div>
                    
                </nav>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Header;