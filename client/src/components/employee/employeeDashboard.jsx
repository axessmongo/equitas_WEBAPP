import React from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'

export default function employeeDashboard() {


    const location = useLocation();

    // Access properties of the location object
    const { pathname, search, hash } = location;
    const realPathName = pathname.slice(1)

    console.log(realPathName);
    

    return (
        <>
            <div className='dashboard'>
                <div className="container-fluid">
                    <div className="row gx-4 position-relative">
                        <div className="col-lg-4 col-xl-3 col-xxl-2 dash-sticky">
                            <nav className="navbar navbar-expand-xl min-vh-100 align-items-start d-flex flex-column justify-content-between">
                                <div className="container-fluid">
                                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                    </button>
                                    <div className="collapse navbar-collapse flex-column align-items-start" id="navbarTogglerDemo01">
                                        <NavLink to={'ongoing'} className="navbar-brand py-3 border-bottom border-black-50 mb-3 w-100 text-center">
                                            <img src="https://www.equitasbank.com/sites/default/files/equitas-logo.png" alt="IMG" />
                                        </NavLink>
                                        <ul className="navbar-nav flex-column w-100">
                                            <li className="nav-item">
                                                <NavLink to={'ongoing'} className="nav-link">
                                                    <i className="bi bi-graph-up-arrow"></i> Ongoing projects
                                                </NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink to={'clientselected'} className="nav-link">
                                                    <i className="bi bi-bookmark-check"></i> Intrested Projects</NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink to={'clientbids'} className="nav-link">
                                                    <i className="bi bi-coin"></i> My Bids
                                                </NavLink>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="container-fluid mb-3">
                                    <div className='profile myshadow bg-white w-100 rounded-4 py-3 d-flex justify-content-center flex-column align-items-center'>
                                        <div className='profile-img'>
                                            <i className="bi bi-person-circle display-4"></i>
                                        </div>

                                        <div className='profile-info'>
                                            <p className='lead fs-6 fw-semibold m-0 color2'>Sundar1007</p>
                                        </div>
                                        <div className='mt-3'>
                                            <button className="btn btn-outline-primary fs-6">
                                                Update Profile
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </nav>
                        </div>
                        <div className="col-lg-8 col-xl-9 col-xxl-10">
                            <div className='p-3'>
                                <div className='d-flex justify-content-between align-items-center'>
                                    {/* <p className='lead fs-6 fw-normal'>{window.location.pathname.slice(1)}</p> */}
                                    <div>
                                        <input type="checkbox" className="checkbox" id="checkbox" />
                                        <label htmlFor="checkbox" className="checkbox-label">
                                            <i className="fas fa-moon bi bi-moon-fill"></i>
                                            <i className="fas fa-sun bi bi-sun-fill"></i>
                                            <span className="ball"></span>
                                        </label>
                                    </div>
                                    <div>
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
