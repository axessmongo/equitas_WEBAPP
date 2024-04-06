import React from 'react'
import { Modal } from 'react-bootstrap'

export default function EmplouyeeOngoingModalTable(props) {


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
                        {props.selectedData && props.selectedData.company ? props.selectedData.company : ''}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className='p-0 container'>
                    {props.selectedData &&
                        <form className='row g-3'>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="projectname" className="form-label">Project Name</label>
                                    <input type="text" className="form-control" id="projectname" name="ProjectName" value={props.selectedData.projectname} disabled />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="opentime" className="form-label">Open Time</label>
                                    <input type="text" className="form-control" id="opentime" name="OpenTime" value={props.selectedData.opentime} disabled />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="closetime" className="form-label">Close Time</label>
                                    <input type="text" className="form-control" id="closetime" name="CloseTime" value={props.selectedData.closetime} disabled />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="company" className="form-label">Company</label>
                                    <input type="text" className="form-control" id="company" name="Company" value={props.selectedData.company} disabled />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="projectarea" className="form-label">Project Area</label>
                                    <input type="text" className="form-control" id="projectarea" name="ProjectArea" value={props.selectedData.projectarea} disabled />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label">Description</label>
                                    <input type="text" className="form-control" id="description" name="Description" value={props.selectedData.description} disabled />
                                </div>
                            </div>
                        </form>
                    }
                </Modal.Body>
            </Modal>

        </>
    )
}
