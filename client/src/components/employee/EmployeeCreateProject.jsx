import React from 'react'
import { useSelector } from 'react-redux'

export default function EmployeeCreateProject() {

    let mode = useSelector(state => state.mode)

    return (
        <>
            <form className={`px-5 py-5 my-3 rounded-3 myshadow ${mode ? "bg-dark":"bg-white"}`}>
                <div className="col-12">
                    <p className='h4 mb-3'>Add New Project:</p>
                </div>
                <div className="row g-3 gx-5">
                    {/* Project Name */}
                    <div className="form-group col-md-6">
                        <label className="mb-2" htmlFor="projectName">Project Name:</label>
                        <input
                            type="text"
                            className="form-control shadow-none"
                            id="projectName"
                            name="projectName"
                            required=""
                        />
                    </div>



                    {/* Project Close Time */}
                    <div className="form-group  col-md-6">
                        <label className="mb-2" htmlFor="projectCloseTime">Project Close Time:</label>
                        <input
                            type="datetime-local"
                            className="form-control shadow-none"
                            id="projectCloseTime"
                            name="projectCloseTime"
                            required=""
                        />
                    </div>

                    {/* Project Area */}
                    <div className="form-group col-md-6">
                        <label className="mb-2" htmlFor="projectArea">Project Area:</label>
                        <input
                            type="text"
                            className="form-control shadow-none"
                            id="projectArea"
                            name="projectArea"
                            required=""
                        />
                    </div>

                    {/* Project Company Name */}
                    <div className="form-group col-md-6">
                        <label className="mb-2" htmlFor="projectCompanyName">Project Company Name:</label>
                        <input
                            type="text"
                            className="form-control shadow-none"
                            id="projectCompanyName"
                            name="projectCompanyName"
                            required=""
                        />
                    </div>
                    {/* Project Description */}
                    <div className="form-group col">
                        <label className="mb-2" htmlFor="projectDescription">Project Description:</label>
                        <textarea
                            className="form-control shadow-none"
                            id="projectDescription"
                            name="projectDescription"
                            required=""
                            defaultValue={""}
                        />
                    </div>
                    {/* Submit Button */}
                    <div className="col-12 text-end">
                        <button type="submit" className="btn btn-success">
                            Add Project
                        </button>
                    </div>
                </div>
            </form>
        </>
    )
}
