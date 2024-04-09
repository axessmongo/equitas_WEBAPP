import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserData } from '../../../globalstate/slices/userDataSlice';

export default function BiddingModal(props) {
    const [bidValue, setBidValue] = useState('');
    const [selectedData, setSelectedData] = useState({});
    const getUserId = useSelector(state => state.userdata.id);
    let dispatch = useDispatch(null)

    const postBidValue = async (id, projectid, biddedvalue, event) => {
        event.preventDefault();
        try {
            const res = await axios.post(`http://localhost:4000/api/biddedvalues/${id}`, {projectid: projectid, biddedvalue: biddedvalue});
            if (res.status === 200) {

                console.log('Successfully posted value');
                dispatch(fetchUserData(getUserId))

            }
        } catch (err) {
            console.log(err)
        } finally {
            props.onClose()
        }
    }

    useEffect(() => {
        setSelectedData(props.selectedData);
    }, [bidValue])

    return (
        <>
            <Modal
                {...props}
                aria-labelledby="contained-modal-title-vcenter"
                centered
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {props.selectedData && props.selectedData.company ? props.selectedData.company : ''}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className='p-0 container'>
                    <div className="d-flex justify-content-center align-items-center flex-column">
                        <div className="my-5">
                            <form onSubmit={(event) => postBidValue(getUserId, selectedData._id, bidValue, event)}>
                                {/* <label htmlFor="bidvalue" className="form-label">Project Name</label> */}
                                <input
                                    type="number"
                                    className="form-control shadow-none mb-2"
                                    id="bidvalue"
                                    name="bidvalue"
                                    placeholder='give bid value'
                                    value={bidValue}
                                    onChange={(e) => setBidValue(e.target.value)}
                                // Handle input change
                                />
                                <div className='text-center'>
                                    <input type="submit" className="btn btn-success" value="Submit" />
                                </div>
                            </form>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}
