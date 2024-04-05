import React, { useState } from 'react';
import { Formik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'; // Assuming axios is installed and properly configured
import ForgotModal from './modal/ForgatModal';

const initialValues = {
  email: '',
  password: '',
};

export default function ClientLogin() {
  const [forgotModalShow, setForgotModalShow] = useState(false);
  const navigate = useNavigate();

  function validateUser(values, resetForm) {
    axios.post('http://localhost:4000/api/login', values)
      .then(response => {
        console.log(response.data.data);
        alert('welcome to you');
        resetForm();
        navigate('/clientdashboard/ongoing');
      })
      .catch(error => {
        console.error('Login failed:', error);
        // Handle login error, such as displaying an error message
      });
  }

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
                const errors = {};
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
              onSubmit={(values, { resetForm }) => {
                validateUser(values, resetForm)
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
                      id="email"
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
                  <span className="d-block text-danger">{touched.email && errors.email && errors.email}</span>
                  <div
                    className="wrap-input100 validate-input"
                    data-validate="Password is required"
                  >
                    <input
                      className="input100"
                      type="password"
                      name="password"
                      placeholder="Password"
                      id="password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <span className="focus-input100" />
                    <span className="symbol-input100">
                      <i className="fa fa-lock" aria-hidden="true" />
                    </span>
                  </div>
                  <span className="d-block text-danger">{touched.password && errors.password && errors.password}</span>
                  <div className="container-login100-form-btn">
                    <input type="submit" value="Login" className="login100-form-btn" />
                  </div>
                  <div className="text-center p-t-12 pt-3">
                    <Link className="txt2 cursor" to={'/clientregister'}>
                      New User / Signup?
                    </Link>
                  </div>  
                  <div className="text-center p-t-12 pt-3">
                    <span className="txt1">Forgot </span>
                    <Link className="txt2 cursor" onClick={() => setForgotModalShow(true)}>
                      Username / Password?
                    </Link>
                  </div>
                </form>
              )}
            </Formik>
          </div>
          <ForgotModal show={forgotModalShow} onHide={() => setForgotModalShow(false)} />
        </div>
      </div>
    </>
  );
}
