import React from 'react'

export default function EmployeeUserValidation() {
    return (
        <>
            {/* Number of approval section */}
            {/* <div className="d-flex justify-content-end my-3">
                <div className='myshadow bg-white rounded-3 px-3 py-3'>
                    <div className="d-flex flex-column align-items-center">
                        <p className='lead mb-0'>No of Pending</p>
                        <p className='text-dark fs-4 fw-semibold mb-0'>2</p>
                    </div>
                </div>
            </div> */}


            <div className='ourtable'>
                <table className="table my-3">
                    <thead>
                        <tr>
                            <th className='py-3'>S.No</th>
                            <th className='py-3'>Mail</th>
                            <th className='py-3'>Phone Number</th>
                            <th className='py-3'>Company Name</th>
                            <th className='py-3'>More Info</th>
                            <th className='py-3'>Approval</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='py-3'>1</td>
                            <td className='py-3'>win@corp.com</td>
                            <td className='py-3'>91 29129 219XX</td>
                            <td className='py-3'>Winxo corp</td>
                            <td className='py-3'>
                                <a className="link-underline-dark text-decoration-none cursor">More Info</a>
                            </td>
                            <td className='py-3'>
                                <i class="bi bi-x-circle-fill text-danger fs-4 me-3 cursor"></i>
                                <i class="bi bi-check-circle-fill text-success fs-4 cursor"></i>
                            </td>
                        </tr>

                        <tr>
                            <td className='py-3'>2</td>
                            <td className='py-3'>ABC@corp.com</td>
                            <td className='py-3'>91 42342 4242XX</td>
                            <td className='py-3'>ABC Corp</td>
                            <td className='py-3'>
                                <a className="link-underline-dark text-decoration-none cursor">More Info</a>
                            </td>
                            <td className='py-3'>
                                {/* <button className='btn btn-danger bi bi-x me-3'></button>
                                <button className='btn btn-success bi bi-check'></button> */}

                                <i class="bi bi-x-circle-fill text-danger fs-4 me-3 cursor"></i>
                                <i class="bi bi-check-circle-fill text-success fs-4 cursor"></i>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}
