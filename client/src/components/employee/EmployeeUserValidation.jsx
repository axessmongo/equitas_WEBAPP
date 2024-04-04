import axios from 'axios';
import React, { useEffect, useState } from 'react';
import UserValidationModal from './modal/UserValidationModal';

export default function EmployeeUserValidation() {

    const [userData, setUserData] = useState([]);
    const [userModalShow, setUserModalShow] = useState(false);
    const [userModalData, setUserModalData] = useState([])

    const userValidateData = async () => {
        try {
            const res = 'http://localhost:4000/api/userdetails';
            const response = await axios.get(res);
            setUserData(response.data.data);
            console.log(response.data.data);
        } catch (error) {
            console.error('Error fetching data:', error.message);
        }
    }

    useEffect(() => {
        userValidateData();
    }, []);


    const approveUser = async (email) => {
        try {
            const res = `http://localhost:4000/api/sendapprovalmail`;
            const response = await axios.post(res, { email }); // Passing mail parameter
            if (response.status === 200) {
                console.log('Approval email sent successfully');
                // Handle success as needed
            } else {
                console.error('Approval email sending failed:', response.data.message);
                // Handle failure as needed
            }
        } catch (error) {
            console.error('Error sending approval email:', error.message);
            // Handle error
        }
    }

    const vsd3131 = () => {
        axios.post("http://localhost:4000/api/sendapprovalmail",)
    }






    const rejectUser = async (id, mail) => {
        console.log(id);
        // try {
        //     const res = 'http://localhost:4000/api/userdetails';
        //     const response = await axios.get(res);
        //     setUserData(response.data.data);
        //     console.log(response.data.data);
        // } catch (error) {
        //     console.error('Error fetching data:', error.message);
        // }
    }


    return (
        <>
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
                        {userData.map((val, index) => (
                            !val.verified && <tr key={index}>
                                <td className='py-3'>{index + 1}</td>
                                <td className='py-3'>{val.email}</td>
                                <td className='py-3'>{val.phone}</td>
                                <td className='py-3'>{val.company}</td>
                                <td className='py-3'>
                                    <a href="#" className="link-underline-dark text-decoration-none cursor" onClick={() => setUserModalShow(true) + setUserModalData(val)}>More Info</a>
                                </td>
                                <td className='py-3'>
                                    <i className="bi bi-x-circle-fill text-danger fs-4 me-3 cursor" onClick={() => rejectUser()}></i>
                                    <i className="bi bi-check-circle-fill text-success fs-4 cursor" onClick={() => approveUser(val.email)}></i>
                                </td>
                            </tr>

                        ))}
                    </tbody>
                </table>
            </div>
            <UserValidationModal userData={userModalData} show={userModalShow}
                onHide={() => setUserModalShow(false)} />
        </>
    )
}
