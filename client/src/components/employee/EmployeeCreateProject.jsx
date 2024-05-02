import React from 'react';
import { Formik } from 'formik';
import { useSelector } from 'react-redux';
import axios from 'axios';

export default function EmployeeCreateProject() {
    let mode = useSelector(state => state.mode);

    const createProject = async (datas) => {
        console.log(datas);
        try {
            const res = await axios.post('http://localhost:4000/api/project', datas);
            if (res.status === 200) {
                console.log("project is created successfully");
            } else if (res.status === 404) {
                console.log("project is not created");
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };



    return (
        <>
            <Formik
                initialValues={{
                    projectname: '',
                    opentime: '',
                    closetime: '',
                    projectarea: '',
                    company: '',
                    description: ''
                }}
                validate={(values) => {
                    const errors = {};
                    if (!values.projectname) {
                        errors.projectname = 'Project Name is required';
                    }
                    if (!values.opentime) {
                        errors.opentime = 'Project on Time is required';
                    }
                    if (!values.closetime) {
                        errors.closetime = 'Project Close Time is required';
                    }
                    if (!values.projectarea) {
                        errors.projectarea = 'Project Area is required';
                    }
                    if (!values.company) {
                        errors.company = 'Project Company Name is required';
                    }
                    if (!values.description) {
                        errors.description = 'Project Description is required';
                    }
                    return errors;
                }}
                onSubmit={(values, { resetForm }) => {
                    console.log(values);
                    createProject(values)
                    resetForm();
                }}
            >
                {({ values, errors, touched, handleBlur, handleSubmit, handleChange }) => (
                    <form className={`px-5 py-5 my-3 rounded-3 myshadow ${mode ? "bg-dark" : "bg-white"}`} onSubmit={handleSubmit}>
                        <div className="col-12">
                            <p className='h4 mb-3'>Add New Project:</p>
                        </div>
                        <div className="row g-3 gx-5">
                            {/* Project Name */}
                            <div className="form-group col-md-6">
                                <label className="mb-2" htmlFor="projectname">Project Name:</label>
                                <input
                                    type="text"
                                    className="form-control shadow-none"
                                    id="projectname"
                                    name="projectname"
                                    required=""
                                    value={values.projectname}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {touched.projectname && errors.projectname && <div className="text-danger">{errors.projectname}</div>}
                            </div>

                            {/* Project on Time */}
                            <div className="form-group  col-md-6">
                                <label className="mb-2" htmlFor="opentime">Project on Time:</label>
                                <input
                                    type="datetime-local"
                                    className="form-control shadow-none"
                                    id="opentime"
                                    name="opentime"
                                    required=""
                                    value={values.opentime}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {touched.opentime && errors.opentime && <div className="text-danger">{errors.opentime}</div>}
                            </div>

                            {/* Project Close Time */}
                            <div className="form-group  col-md-6">
                                <label className="mb-2" htmlFor="closetime">Project Close Time:</label>
                                <input
                                    type="datetime-local"
                                    className="form-control shadow-none"
                                    id="closetime"
                                    name="closetime"
                                    required=""
                                    value={values.closetime}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {touched.closetime && errors.closetime && <div className="text-danger">{errors.closetime}</div>}
                            </div>

                            {/* Project Area */}
                            <div className="form-group col-md-6">
                                <label className="mb-2" htmlFor="projectarea">Project Area:</label>
                                <input
                                    type="text"
                                    className="form-control shadow-none"
                                    id="projectarea"
                                    name="projectarea"
                                    required=""
                                    value={values.projectarea}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {touched.projectarea && errors.projectarea && <div className="text-danger">{errors.projectarea}</div>}
                            </div>

                            {/* Project Company Name */}
                            <div className="form-group col-md-6">
                                <label className="mb-2" htmlFor="company">Project Company Name:</label>
                                <input
                                    type="text"
                                    className="form-control shadow-none"
                                    id="company"
                                    name="company"
                                    required=""
                                    value={values.company}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {touched.company && errors.company && <div className="text-danger">{errors.company}</div>}
                            </div>

                            {/* Project Description */}
                            <div className="form-group col">
                                <label className="mb-2" htmlFor="description">Project Description:</label>
                                <textarea
                                    className="form-control shadow-none"
                                    id="description"
                                    name="description"
                                    required=""
                                    defaultValue={""}
                                    value={values.description}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {touched.description && errors.description && <div className="text-danger">{errors.description}</div>}
                            </div>

                            {/* Submit Button */}
                            <div className="col-12 text-end">
                                <button type="submit" className="btn btn-success">
                                    Add Project
                                </button>
                            </div>
                        </div>
                    </form>
                )}
            </Formik>
        </>
    )
}
