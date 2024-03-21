import React, { useEffect, useState } from 'react';
import { Formik } from 'formik';
import { Link, useNavigate } from "react-router-dom";
import ForgotModal from './modal/ForgatModal';

export default function ClientLogin() {

    const [forgatModalShow, setforgotModalShow] = useState(false);

    const initialValues = {
        email: "",
        password: ""
    }

    const resetForm = () => {
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";
    }

    let navigate = useNavigate();


    return (
        <>
            <div className="limiter clientLogin">
                <div className="container-login100">
                    <div className="wrap-login100">
                        <div className="login100-pic js-tilt" data-tilt="">
                            <img src="https://www.equitasbank.com/sites/default/files/equitas-logo.png" alt="IMG" />
                        </div>
                        <Formik
                            initialValues={initialValues}
                            validate={(values) => {
                                const errors = {}
                                if (!values.email) {
                                    errors.email = 'Give Valid Email';
                                } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                                    errors.email = 'Invalid email address';
                                }
                                if (!values.password) {
                                    errors.password = 'Give Valid Password';
                                }
                                return errors;
                            }}
                            onSubmit={(values) => {
                                console.log(values);
                                values.email = ""
                                resetForm();
                                navigate('/clientdashboard')
                            }}
                        >
                            {({ values, errors, touched, handleBlur, handleSubmit, handleChange }) => (
                                <form className="login100-form validate-form" onSubmit={handleSubmit}>
                                    <span className="login100-form-title">Equitas Login</span>
                                    <div
                                        className="wrap-input100 validate-input"
                                        data-validate="Valid email is required: ex@abc.xyz"
                                    >
                                        <input
                                            className="input100"
                                            type="text"
                                            name="email"
                                            id='email'
                                            placeholder="Email"
                                            value={values.email}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        <span className="focus-input100" />
                                        <span className="symbol-input100">
                                            <i className="fa fa-envelope" aria-hidden="true" />
                                        </span>
                                    </div>
                                    <span className='d-block text-danger'>{touched.email && errors.email && errors.email}</span>
                                    <div
                                        className="wrap-input100 validate-input"
                                        data-validate="Password is required"
                                    >
                                        <input
                                            className="input100"
                                            type="password"
                                            name="password"
                                            placeholder="Password"
                                            id='password'
                                            value={values.password}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        <span className="focus-input100" />
                                        <span className="symbol-input100">
                                            <i className="fa fa-lock" aria-hidden="true" />
                                        </span>
                                    </div>
                                    <span className='d-block text-danger'>{touched.password && errors.password && errors.password}</span>
                                    <div className="container-login100-form-btn">
                                        <input type='submit' value='Login' className="login100-form-btn" />
                                    </div>
                                    <div className="text-center p-t-12 pt-3">
                                        <span className="txt1">Forgot </span>
                                        <Link className="txt2 cursor" onClick={() => setforgotModalShow(true)}>
                                            Username / Password?
                                        </Link>
                                    </div>
                                </form>
                            )}
                        </Formik>
                    </div>
                <ForgotModal show={forgatModalShow}
                    onHide={() => setforgotModalShow(false)} />
                </div>
            </div>
        </>
    )
}
