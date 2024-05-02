import React from 'react';
import { Modal, Button } from 'react-bootstrap';

export default function UserValidationModal(props) {

    // console.log(props.userData);


    return (

        <>
            <Modal
                {...props}
                size="xl"
                aria-labelledby="contained-modal-title-vcenter bids_value"
                centered
                fullscreen
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Winxo Corp
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className=''>
                    <form className='row g-3'>
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="fullname" className="form-label">Full Name</label>
                                <input type="text" className="form-control" id="fullname" name="props.fullname" value={props.userData.fullname} disabled />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email Address</label>
                                <input type="email" className="form-control" id="email" name="props.email" value={props.userData.email} disabled />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="phone" className="form-label">Phone Number</label>
                                <input type="tel" className="form-control" id="phone" name="props.phone" value={props.userData.phone} disabled />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="company" className="form-label">Company Name (if applicable)</label>
                                <input type="text" className="form-control" id="company" name="props.company" value={props.userData.company} disabled />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="address" className="form-label">Address</label>
                                <input type="text" className="form-control" id="address" name="props.address" value={props.userData.address} disabled />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="city" className="form-label">City</label>
                                <input type="text" className="form-control" id="city" name="props.city" value={props.userData.city} disabled />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="state" className="form-label">State</label>
                                <input type="text" className="form-control" id="state" name="props.state" value={props.userData.state} disabled />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="pin" className="form-label">PIN Code</label>
                                <input type="text" className="form-control" id="pin" name="props.pin" value={props.userData.pin} disabled />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="pan" className="form-label">PAN Number</label>
                                <input type="text" className="form-control" id="pan" name="props.pan" value={props.userData.pan} disabled />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="ifsccode" className="form-label">IFSC Code</label>
                                <input type="text" className="form-control" id="ifsccode" name="props.ifsccode" value={props.userData.ifsccode} disabled />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="accountnum" className="form-label">Account Number</label>
                                <input type="text" className="form-control" id="accountnum" name="props.accountnum" value={props.userData.accountnum} disabled />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="gst" className="form-label">GSTIN</label>
                                <input type="text" className="form-control" id="gst" name="props.gst" value={props.userData.gst} disabled />
                            </div>
                        </div>
                    </form>
                </Modal.Body>
                {/* <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer> */}
            </Modal>
        </>
    )
}
