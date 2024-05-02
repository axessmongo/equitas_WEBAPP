import React, { useEffect, useState } from 'react';
import { Formik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import ForgotModal from './modal/ForgatModal';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserData, setUserId } from '../../globalstate/slices/userDataSlice';
import Loader from '../../loader/Loader';
import { setLoader } from '../../globalstate/slices/loaderSlice';
import ToastModal from '../../toast/ToastModal';
import { setToast } from '../../globalstate/slices/ToastSlice';

const initialValues = {
  email: '',
  password: '',
};

export default function ClientLogin() {
  const [forgotModalShow, setForgotModalShow] = useState(false);
  const [adminDetails, setAdminDetails] = useState();
  const navigate = useNavigate();
  const passData = useDispatch();
  const loaderDispatch = useDispatch();
  const dispatch = useDispatch();
  const selector = useSelector(state => state.userdata)

<<<<<<< HEAD
  function validateUser(values, resetForm) {
    axios.post('http://localhost:5000/api/login', values)
      .then(response => {
        console.log(response.data.data);
        alert('welcome to you');
        resetForm();
=======
  async function validateUser(values, resetForm) {
    try {
      loaderDispatch(setLoader(true))
      const response = await axios.post('http://localhost:4000/api/login', values);
      // console.log(response.data);
      resetForm();
      await passData(setUserId(response.data.data));
      await passData(fetchUserData(response.data.data.user_id));
      // await getAdminvalues(); // Fetch admin details again after user login
      if (adminDetails.includes(values.email)) {
        // alert('Welcome admin');
        await dispatch(setToast({ status: "user-success", message: `welocome ${response.data.data.user_name}` }))
        navigate('/EmployeeDashboard/employeeuservalidation');
      } else {
        // alert('Welcome Client');
        await dispatch(setToast({ status: "user-success", message: `welocome ${response.data.data.user_name}`}))
>>>>>>> 56134be005ddf81f35b1c584b79963c0a4ba6126
        navigate('/clientdashboard/ongoing');
      }
    } catch (error) {
      if (error.response.status === 301) {
        dispatch(setToast({ status: "user-not-verified", message: "Still User is not verified ourside" }))
      } else {
        dispatch(setToast({ status: "user-not-found", message: "Creditinals not valid" }))
      }
    }
    finally {
      loaderDispatch(setLoader(false))
    }
  }

  async function getAdminvalues() {
    try {
      const response = await axios.get('http://localhost:4000/api/getadmin');
      await setAdminDetails(response.data.data.email);
      // await console.log(adminDetails); // Corrected typo here
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAdminvalues();
  }, []);



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
