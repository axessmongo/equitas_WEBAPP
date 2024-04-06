import React, { useEffect, useState } from 'react'
import EmplouyeeOngoingModalTable from './modal/EmplouyeeOngoingModalTable'
import axios from 'axios';

export default function EmployeeOngoingTable() {

    const [ongoingShow, setOngoingShow] = useState(false);
    const [onGoingData, setOnGoingData] = useState([]);
    const [ongoingSelectData, setOngoingSelectData] = useState();

    const getOngoingData = async () => {
        try {
            const res = await axios.get('http://localhost:4000/api/showprojects');
            setOnGoingData(res.data.data);
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getOngoingData();
    }, [])

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
                            <th className='py-3'>More Info</th>
                        </tr>
                    </thead>
                    <tbody>

                        {onGoingData.map((value, index) => (
                            <tr>
                                <td className='py-3'>{index + 1}</td>
                                <td className='py-3'>{value.opentime}</td>
                                <td className='py-3'>{value.closetime}</td>
                                <td className='py-3'>{value.projectname}</td>

                                <td className='py-3'>
                                    <a className="link-underline-dark text-decoration-none cursor" onClick={() => setOngoingShow(true) + setOngoingSelectData(value)}>More Info</a>
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <EmplouyeeOngoingModalTable selectedData = {ongoingSelectData} show={ongoingShow}
                onHide={() => setOngoingShow(false)} />
        </>
    )
}
