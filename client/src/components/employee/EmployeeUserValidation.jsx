import axios from 'axios';
import React, { useEffect, useState } from 'react';
import UserValidationModal from './modal/UserValidationModal';
import { useDispatch, useSelector} from 'react-redux';
import { setLoader } from '../../globalstate/slices/loaderSlice';

export default function 




EmployeeUserValidation() {
    const [userData, setUserId] = useState([]);
    const [userModalShow, setUserModalShow] = useState(false);
    const [userModalData, setUserModalData] = useState({});
    const [updateUserValidation, setUpdateUserValidation] = useState(null); // Initialize with null
    let loaderDispatch = useDispatch();

    // Fetch user data from the server
    const fetchUserData = async () => {
        try {
            loaderDispatch(setLoader(true))
            const res = await axios.get('http://localhost:4000/api/userdetails');
            setUserId(res.data.data);
            // console.log(userData);
        } catch (error) {
            console.error('Error fetching data:', error.message);
        }finally{
            
            loaderDispatch(setLoader(false))
        }
    };

    // Fetch user data when the component mounts
    useEffect(() => {
        fetchUserData();
    }, []);


    // Update user validation status and send approval email
    useEffect(() => {
        if (updateUserValidation) {
            const approveUserAPI = async () => {
                try {
                    loaderDispatch(setLoader(true))
                    const res = await axios.put(`http://localhost:4000/api/mailapproval/${updateUserValidation.id}`, updateUserValidation);
                    if (res.status === 200) {
                        console.log('Approval email sent successfully');
                        fetchUserData(); // Fetch updated user data
                    } else {
                        console.error('Approval email sending failed:', res.data.message);
                    }
                } catch (error) {
                    console.error('Error sending approval email:', error.message);
                } finally {
                    loaderDispatch(setLoader(false))
                }
            };
            approveUserAPI();
        }
    }, [updateUserValidation]);

    // Approve user and set updated user validation
    const approveUser = (id, updatedUser) => {
        setUpdateUserValidation({ id, ...updatedUser, verified: true });
    };

    // Reject user - logic can be implemented here if needed
    const rejectUser = () => {
        // Implement rejection logic if needed
    };

    return (
        <>
            <div className='ourtable table-responsive'>
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
                        {userData.map((user, index) => (
                            !user.verified && (
                                <tr key={user._id}>
                                    <td className='py-3'>{index + 1}</td>
                                    <td className='py-3'>{user.email}</td>
                                    <td className='py-3'>{user.phone}</td>
                                    <td className='py-3'>{user.company}</td>
                                    <td className='py-3'>
                                        <a href="#" className="link-underline-dark text-decoration-none cursor" onClick={() => { setUserModalShow(true); setUserModalData(user); }}>More Info</a>
                                    </td>
                                    {user.verified ?

                                        <td>
                                            User Approved
                                        </td>

                                        :
                                        <td className='py-3'>
                                            <i className="bi bi-x-circle-fill text-danger fs-4 me-3 cursor" onClick={() => rejectUser()}></i>
                                            <i className="bi bi-check-circle-fill text-success fs-4 cursor" onClick={() => approveUser(user._id, user)}></i>
                                        </td>
                                    }
                                </tr>
                            )
                        ))}
                    </tbody>
                </table>
            </div>
            <UserValidationModal userData={userModalData} show={userModalShow} onHide={() => setUserModalShow(false)} />
        </>
    );
}
