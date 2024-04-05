import { useSelector } from 'react-redux'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import EmplouyeeOngoingModalTable from '../employee/modal/EmplouyeeOngoingModalTable';
import BiddingModal from './modal/BiddingModal';


export default function ClientOngoingTable() {

    let mode = useSelector(state => state.mode)
    const [ongoingShow, setOngoingShow] = useState(false);
    const [biddingShow, setBiddingShow] = useState(false);
    const [onGoingData, setOnGoingData] = useState([]);
    const [ongoingSelectData, setOngoingSelectData] = useState();

    const getOngoingData = async () => {
        try {
            const res = await axios.get('http://localhost:4000/api/showproject');
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
                            <th className='py-3'>Interested</th>
                            <th className='py-3'>More Info</th>
                            <th className='py-3'>Bid Later</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            onGoingData.map((data, index) => (
                                <tr key={index}>
                                    <td className='py-3'>{index + 1}</td>
                                    <td className='py-3'>{data.opentime}</td>
                                    <td className='py-3'>{data.closetime}</td>
                                    <td className='py-3'>{data.projectname}</td>
                                    <td className='py-3'><button className='btn btn-success' onClick={()=> setBiddingShow(true) + setOngoingSelectData(data)}>Interested</button></td>
                                    <td className='py-3'>
                                        <a className="link-underline-dark text-decoration-none cursor" onClick={() => setOngoingShow(true) + setOngoingSelectData(data)}>More Info</a>
                                    </td>
                                    <td className='py-3'><a className={`bi bi-bookmark cursor ${mode ? 'text-light' : 'text-dark'}`}></a></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            <EmplouyeeOngoingModalTable selectedData={ongoingSelectData} show={ongoingShow}
                onHide={() => setOngoingShow(false)} />
            <BiddingModal selectedData={ongoingSelectData} show={biddingShow}
                onHide={() => setBiddingShow(false)}   onClose={() => setBiddingShow(false)}/>
        </>
    )
}
