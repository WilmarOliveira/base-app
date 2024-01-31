import React, { Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { AppLayout } from './AppLayout'
import { About } from './About';
import { Repositories } from 'repositories/Repositories'
import ErrorBoundary from './utils/BoundaryError';


const AppRoutes = () => {

    return (
        <BrowserRouter>
            <Routes>

                <Route element={<AppLayout />} >
                    <Route path='/' element={<Navigate to={'/home'} />} />
                    <Route path='/home' element={<div>Home</div>} />
                    <Route path='/repositories' element={
                        <Suspense fallback={
                            <div>Loading</div>
                        }>
                            <ErrorBoundary>
                                <Repositories />
                            </ErrorBoundary>
                        </Suspense>} />
                    <Route path='/about' element={<About />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;