import React, { useState } from 'react'
import UpdateProjectModal from './modal/UpdateProjectModal';

export default function ClientAward() {

    const [updateModalShow, setUpdateModalShow] = useState(false);
    return (
        <>
            <div className='ourtable table-responsive'>
                <table className="table my-3">
                    <thead>
                        <tr>
                            <th className='py-3'>Auction No</th>
                            <th className='py-3'>Open Time</th>
                            <th className='py-3'>Close Time</th>
                            <th className='py-3'>Project Name</th>
                            {/* <th className='py-3'>Update Bid Value</th> */}
                            <th className='py-3'>Update Projects Details</th>
                            <th className='py-3'>My Bid</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='py-3'>6613c24fcd...</td>
                            <td className='py-3'>1994-10-22T19:48</td>
                            <td className='py-3'>1983-01-26T22:44</td>
                            <td className='py-3'>Hamish Herman</td>
                            <td className='py-3'>
                            <a className="link-underline-dark text-decoration-none cursor" onClick={() => { setUpdateModalShow(true)}}>Update</a>
                            </td>
                            <td className='py-3'>₹ 231321</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <UpdateProjectModal  show={updateModalShow} onHide={() => setUpdateModalShow(false)} />
        </>
    )
}
