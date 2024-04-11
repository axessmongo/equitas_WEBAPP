import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setLoader } from '../../globalstate/slices/loaderSlice';

const ClientRegister = () => {
    const [regStatus, setRegStatus] = useState(false)
    let loaderDispatch = useDispatch()


    const handleSubmit = async (values, { setSubmitting }) => {
        // Perform form submission logic here, e.g., API call to save data

        try {
            loaderDispatch(setLoader(true))
            const response = await axios.post('http://localhost:4000/api/register', values);
            console.log('Response:', response.data.data);
            setRegStatus(true);
        } catch (error) {
            // Handle error
            console.error('Error:', error);
            loaderDispatch(setLoader(false))
        } finally {
            loaderDispatch(setLoader(false))
        }


        console.log(values);
        // Simulate submission success
        setSubmitting(false);
    };


    return (
        <>
            {regStatus
                ?
                <div className='min-vh-100 d-flex justify-content-center align-items-center'>
                    <div className="card text-center">
                        <div className="card-header bg-success text-white">
                            Registration Successful
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Thank you for registering!</h5>
                            <p className="card-text">
                                You have successfully registered for our service.
                            </p>
                            <p className="card-text">
                                Equitas Team will contact you soon
                            </p>
                        </div>
                    </div>
                </div>
                :
                <div className="container min-vh-100 d-flex justify-content-center align-items-center flex-column">
                    <div className="myshadow p-4 rounded-3">
                        <h2>Client Registration</h2>
                        <Formik
                            initialValues={{
                                fullname: '',
                                phone: '',
                                company: '',
                                address: '',
                                city: '',
                                state: '',
                                pin: '',
                                pan: '',
                                ifsccode: '',
                                accountnum: '',
                                gst: '',
                                email: '',
                                password: ''
                            }}
                            validate={(values) => {
                                const errors = {};
                                if (!values.fullname.trim()) {
                                    errors.fullname = 'Required';
                                }
                                if (!values.email.trim()) {
                                    errors.email = 'Required';
                                } else if (!/^\S+@\S+\.\S+$/.test(values.email.trim())) {
                                    errors.email = 'Invalid email address';
                                }
                                if (!values.password.trim()) {
                                    errors.password = 'Required';
                                }
                                return errors;
                            }}
                            onSubmit={handleSubmit}
                        >
                            {({ isSubmitting }) => (
                                <Form className='row g-3'>
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label htmlFor="fullname" className="form-label">Full Name</label>
                                            <Field type="text" className="form-control" id="fullname" name="fullname" />
                                            <ErrorMessage name="fullname" component="div" className="text-danger" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label htmlFor="email" className="form-label">Email Address</label>
                                            <Field type="email" className="form-control" id="email" name="email" />
                                            <ErrorMessage name="email" component="div" className="text-danger" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label htmlFor="phone" className="form-label">Phone Number</label>
                                            <Field type="tel" className="form-control" id="phone" name="phone" />
                                            <ErrorMessage name="phone" component="div" className="text-danger" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label htmlFor="company" className="form-label">Company Name (if applicable)</label>
                                            <Field type="text" className="form-control" id="company" name="company" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label htmlFor="address" className="form-label">Address</label>
                                            <Field type="text" className="form-control" id="address" name="address" />
                                            <ErrorMessage name="address" component="div" className="text-danger" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label htmlFor="city" className="form-label">City</label>
                                            <Field type="text" className="form-control" id="city" name="city" />
                                            <ErrorMessage name="city" component="div" className="text-danger" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label htmlFor="state" className="form-label">State</label>
                                            <Field type="text" className="form-control" id="state" name="state" />
                                            <ErrorMessage name="state" component="div" className="text-danger" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label htmlFor="pin" className="form-label">PIN Code</label>
                                            <Field type="text" className="form-control" id="pin" name="pin" />
                                            <ErrorMessage name="pin" component="div" className="text-danger" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label htmlFor="pan" className="form-label">PAN Number</label>
                                            <Field type="text" className="form-control" id="pan" name="pan" />
                                            <ErrorMessage name="pan" component="div" className="text-danger" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label htmlFor="ifsccode" className="form-label">IFSC Code</label>
                                            <Field type="text" className="form-control" id="ifsccode" name="ifsccode" />
                                            <ErrorMessage name="ifsccode" component="div" className="text-danger" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label htmlFor="accountnum" className="form-label">Account Number</label>
                                            <Field type="text" className="form-control" id="accountnum" name="accountnum" />
                                            <ErrorMessage name="accountnum" component="div" className="text-danger" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label htmlFor="gst" className="form-label">GSTIN</label>
                                            <Field type="text" className="form-control" id="gst" name="gst" />
                                            <ErrorMessage name="gst" component="div" className="text-danger" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label htmlFor="password" className="form-label">Password</label>
                                            <Field type="password" className="form-control" id="password" name="password" />
                                            <ErrorMessage name="password" component="div" className="text-danger" />
                                        </div>
                                    </div>
                                    <div className='col-12 mb-3 form-check'>
                                        <Field type="checkbox" className="form-check-input" id="privacyPolicy" name="privacyPolicy" />
                                        <label className="form-check-label" htmlFor="privacyPolicy">I accept the privacy policy</label>
                                        <ErrorMessage name="privacyPolicy" component="div" className="text-danger" />
                                    </div>
                                    <div className='col-12'>
                                        <button type="submit" className="btn btn-primary" disabled={isSubmitting}>Submit</button>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            }
        </>
    );
};

export default ClientRegister;
