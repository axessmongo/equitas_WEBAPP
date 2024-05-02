import React from 'react'
import { useSelector } from 'react-redux';

export default function Profile() {
    let mode = useSelector((state) => state.mode);
    let userName = useSelector((state) => state.userdata.data?.fullname);

    // console.log(userName);
    return (
        <>
            <div className={`profile myshadow w-100 rounded-4 py-3 d-flex justify-content-center flex-column align-items-center ${mode ? 'bg-dark ' : 'bg-white'}`}>
                <div className='profile-img'>
                    <i className="bi bi-person-circle display-6"></i>
                </div>

                <div className='profile-info'>
                    <p className='lead fs-6 fw-semibold m-0'>{userName}</p>
                </div>
                <div className='mt-3 d-none'>
                    <button className="btn btn-outline-primary fs-6">
                        Update Profile
                    </button>
                </div>
            </div>
        </>
    )
}
