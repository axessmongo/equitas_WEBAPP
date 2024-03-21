import React from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'

export default function ClientDashboard() {
    

    const location = useLocation();

    // Access properties of the location object
    const { pathname, search, hash } = location;
    const realPathName = pathname.slice(1)

    console.log(realPathName);


    return (
        <>
            <div className='dashboard'>
                <div className="container-fluid">
                    <div className="row gx-4">
                        <div className="col-md-2">
                            <nav className="navbar navbar-expand-lg min-vh-100 align-items-start">
                                <div className="container-fluid">
                                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                    </button>
                                    <div className="collapse navbar-collapse flex-column align-items-start" id="navbarTogglerDemo01">
                                        <NavLink to={''} className="navbar-brand py-3 border-bottom border-black-50 mb-3 w-100 text-center">
                                            <img src="https://www.equitasbank.com/sites/default/files/equitas-logo.png" alt="IMG" />
                                        </NavLink>
                                        <ul className="navbar-nav flex-column w-100">
                                            <li className="nav-item">
                                                <NavLink to={'/clientdashboard'} className="nav-link">
                                                    <i className="bi bi-graph-up-arrow"></i> Ongoing projects
                                                </NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink to={'clientselected'} className="nav-link">
                                                    <i className="bi bi-bookmark-check"></i>Selected Projects</NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink to={'clientbids'} className="nav-link">
                                                    <i className="bi bi-coin"></i> My Bids
                                                </NavLink>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                        </div>
                        <div className="col-md-10">
                            <div className='p-3'>
                                <div className='d-flex justify-content-between align-items-center'>
                                    {/* <p className='lead fs-6 fw-normal'>{window.location.pathname.slice(1)}</p> */}
                                    <p className='lead fs-6 fw-semibold m-0'>Sundar1007</p>
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
