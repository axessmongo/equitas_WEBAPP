import React, { useEffect, useState } from 'react'
import Modal from 'react-bootstrap/Modal';

export default function UpdateProjectModal(props) {

    const handleSubmit = (event) =>{
        event.preventDefault();
        props.onHide()
    }

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
                        Project Update
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className='p-5 container'>
                    <form onSubmit={handleSubmit}>
                        <div className="row g-5">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="projectDescription">Project Description</label>
                                    <textarea className="form-control" id="projectDescription" rows="3"></textarea>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="projectReview">Project Review</label>
                                    <textarea className="form-control" id="projectReview" rows="3"></textarea>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="projectStartDate">Project Start Date</label>
                                    <input type="date" className="form-control" id="projectStartDate" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="projectEndDate">Project End Date</label>
                                    <input type="date" className="form-control" id="projectEndDate" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="projectDetailsFile">Project Details File</label>
                                    <input type="file" className="form-control-file" id="projectDetailsFile" />
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </>
    )
}
