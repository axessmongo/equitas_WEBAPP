import React, { useState } from 'react';
import { Formik } from 'formik';

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
                            console.log(values);
                            setSubmitting(false)
                            values.email = ""
                            values.password = ""
                        }}>
                        {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <label className='form-label' for='email'>Email:</label>
                                    <input type="email" className="form-control" value={values.email} onChange={handleChange} name='email'
                                        onBlur={handleBlur} id='email' />
                                    <span className='d-block text-danger'>{touched.email && errors.email && errors.email}</span>
                                </div>
                                <div>
                                    <label className='form-label' for='pass'>Password:</label>
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
