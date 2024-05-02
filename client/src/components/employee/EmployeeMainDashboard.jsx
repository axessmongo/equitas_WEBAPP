import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { setMode } from '../../globalstate/slices/modeSlice';
import Profile from '../../profile/Profile';

export default function EmployeeDashboard() {


    const location = useLocation();

    // Access properties of the location object
    const { pathname, search, hash } = location;
    const realPathName = pathname.slice(1)

    // console.log(realPathName);

    let mode = useSelector((state) => state.mode)

    useEffect(() => {
        let html = document.documentElement;
        if (mode) {
            html.setAttribute('data-bs-theme', 'dark')
        } else {
            html.setAttribute('data-bs-theme', '')
        }
    }, [mode])

    let dispatchMode = useDispatch()

    function modeChange() {
        dispatchMode(setMode(!mode))
    }


    return (
        <>
            <div className='dashboard'>
                <div className="container-fluid">
                    <div className="row gx-4 position-relative">
                        <div className="col-lg-4 col-xl-3 col-xxl-2 dash-sticky px-0">
                            <nav className="navbar navbar-expand-xl min-vh-100 align-items-start d-flex flex-lg-column justify-content-between">
                                <div className="container-lg-fluid px-3">
                                    <div className='d-flex justify-content-between align-items-center w-100'>
                                        <NavLink to={'employeeuservalidation'} className="navbar-brand d-lg-none">
                                            <img src="https://www.equitasbank.com/sites/default/files/equitas-logo.png" alt="IMG" />
                                        </NavLink>
                                        <button className="navbar-toggler shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                                            <span className="navbar-toggler-icon"></span>
                                        </button>
                                    </div>
                                    <div className="collapse navbar-collapse flex-column align-items-start" id="navbarTogglerDemo01">
                                        <NavLink to={'employeeuservalidation'} className="navbar-brand py-3 border-bottom border-black-50 mb-3 w-100 text-center d-none d-lg-block">
                                            <img src="https://www.equitasbank.com/sites/default/files/equitas-logo.png" alt="IMG" />
                                        </NavLink>
                                        <ul className="navbar-nav flex-column w-100">
                                            <li className="nav-item">
                                                <NavLink to={'employeeuservalidation'} className="nav-link">
                                                    <i className="bi bi-person-add"></i> User Validation
                                                </NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink to={'employeecreateproject'} className="nav-link">
                                                    <i className="bi bi-folder-plus"></i> Create Project
                                                </NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink to={'employeeSara'} className="nav-link">
                                                    <i className="bi bi-folder-plus"></i> Create Sara
                                                </NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink to={'employeeongoing'} className="nav-link">
                                                    <i className="bi bi-graph-up-arrow"></i> Ongoing projects
                                                </NavLink>
                                            </li>
                                            {/* <li className="nav-item">
                                                <NavLink to={'clientselected'} className="nav-link">
                                                    <i className="bi bi-bookmark-check"></i> Intrested Projects</NavLink>
                                            </li> */}
                                            <li className="nav-item">
                                                <NavLink to={'listofbids'} className="nav-link">
                                                    <i className="bi bi-coin"></i> List of Bids
                                                </NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink to={'employeeawards'} className="nav-link">
                                                    <i className="bi bi-award"></i> Awarded Projects
                                                </NavLink>
                                            </li>
                                        </ul>
                                        <div className="d-lg-none">
                                            <Profile />
                                        </div>
                                    </div>
                                </div>
                                <div className="container-lg-fluid mb-lg-3 d-none d-lg-block">
                                    <Profile />
                                </div>
                            </nav>
                        </div>
                        <div className="col-lg-8 col-xl-9 col-xxl-10 position-relative">
                            <div className='p-3'>
                                <div className='d-flex justify-content-end justify-content-lg-between align-items-center'>
                                    {/* <p className='lead fs-6 fw-normal'>{window.location.pathname.slice(1)}</p> */}
                                    <div>
                                        <input type="checkbox" className="checkbox" id="checkbox" onClick={modeChange} />
                                        <label htmlFor="checkbox" className="checkbox-label">
                                            <i className="fas fa-moon bi bi-moon-fill"></i>
                                            <i className="fas fa-sun bi bi-sun-fill"></i>
                                            <span className="ball"></span>
                                        </label>
                                    </div>
                                    <div className='d-none d-lg-block'>
                                        <Link to={'/'} className='btn btn-danger'>Logout</Link>
                                    </div>
                                </div>
                                <Outlet />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
