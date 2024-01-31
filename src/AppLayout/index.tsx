import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'

export const AppLayout = () => {
    const location = useLocation()
    function isActive(value: string) {
        return value === location.pathname
    }
    return (
        <>
            <nav className="bg-gray-800" >
                <div className='flex flex-1 h-14 items-center justify-between px-6' >
                    <div className='flex space-x-4'>
                        <Link to={'/'} className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Microfrontends</Link>
                    </div>
                    <div className='flex justify-around space-x-4' >
                        <Link to={'/home'} className={`${isActive('/home') ? 'bg-gray-700 text-white' : 'text-gray-400 hover:bg-gray-700 hover:text-white'} text-sm rounded-md px-3 py-2`}>Home</Link>
                        <Link to={'/repositories'} className={`${isActive('/repositories') ? 'bg-gray-700 text-white' : 'text-gray-400 hover:bg-gray-700 hover:text-white'} text-sm rounded-md px-3 py-2`}>Repositories</Link>
                        <Link to={'/about'} className={`${isActive('/about') ? 'bg-gray-700 text-white' : 'text-gray-400 hover:bg-gray-700 hover:text-white'} text-sm rounded-md px-3 py-2`}>About</Link>
                    </div>
                </div>
            </nav >
            <Outlet />
        </>

    )
}