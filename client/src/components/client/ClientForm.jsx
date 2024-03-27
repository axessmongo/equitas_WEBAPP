import React, { useState } from 'react';
import { Formik } from 'formik';
import axios from 'axios'; // Import Axios

export const ClientForm = () => {

    const initialValues = {
        email: "",
        password: ""
    }

    return (
        <>
            <div className='min-vh-100 d-flex justify-content-center align-items-center flex-column'>
                <h1 className='lead'>Client Form</h1>
                <div className="card p-5">
                    <Formik
                        initialValues={initialValues}
                        validate={(values) => {
                            const errors = {};
                            if (!values.email) {
                                errors.email = 'Required';
                            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                                errors.email = 'Invalid email address';
                            }

                            if (!values.password) {
                                errors.password = 'Required';
                            }
                            return errors;
                        }}

                        onSubmit={(values, { setSubmitting }) => {
                            axios.post('', values) // Replace 'YOUR_API_ENDPOINT' with your actual endpoint
                                .then(response => {
                                    console.log(response.data); // Log the response data
                                    // Do something with the response if needed
                                })
                                .catch(error => {
                                    console.error('There was an error!', error); // Log any errors
                                    // Handle errors as needed
                                })
                                .finally(() => {
                                    setSubmitting(false);
                                });
                        }}>
                        {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <label className='form-label' htmlFor='email'>Email:</label>
                                    <input type="email" className="form-control" value={values.email} onChange={handleChange} name='email'
                                        onBlur={handleBlur} id='email' />
                                    <span className='d-block text-danger'>{touched.email && errors.email && errors.email}</span>
                                </div>
                                <div>
                                    <label className='form-label' htmlFor='pass'>Password:</label>
                                    <input type="password" className="form-control" value={values.password} onChange={handleChange} name='password' onBlur={handleBlur} id='pass' />
                                    <span className='d-block text-danger'>{touched.password && errors.password && errors.password}</span>
                                </div>
                                <div className='my-2'>
                                    <button className='btn btn-success' type="submit">Login</button>
                                </div>
                            </form>
                        )}
                    </Formik>
                </div>
            </div>
        </>
    );
}

export default ClientForm;
