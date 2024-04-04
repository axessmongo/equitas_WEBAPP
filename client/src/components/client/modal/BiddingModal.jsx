import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function BiddingModal(props) {
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
                            {/* <label htmlFor="bidvalue" className="form-label">Project Name</label> */}
                            <input type="number" className="form-control shadow-none mb-2" id="bidvalue" name="bidvalue" placeholder='give bid value' />
                            <div className='text-center'>
                                
                            <input type="submit" className="btn btn-success" onClick={props.onClose}/>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}
