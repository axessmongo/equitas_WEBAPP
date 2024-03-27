import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const ClientRegister = () => {
  const [stage, setStage] = useState(1);

  const handleSubmit = (values, { setSubmitting }) => {
    // Perform form submission logic here, e.g., API call to save data
    console.log(values);
    // Simulate submission success and move to the next stage
    setSubmitting(false);
    if (stage < 3) {
      setStage(stage + 1);
    }
  };

  return (
    <div className="container">
      {stage === 1 && (
        <>
          <h2>Stage 1: Personal Information</h2>
          <Formik
            initialValues={{
              fullName: '',
              email: '',
              phoneNumber: '',
              companyName: '',
              address: '',
              city: '',
              state: '',
              pinCode: ''
            }}
            validate={(values) => {
              const errors = {};
              if (!values.fullName.trim()) {
                errors.fullName = 'Required';
              }
              if (!values.email.trim()) {
                errors.email = 'Required';
              } else if (!/^\S+@\S+\.\S+$/.test(values.email.trim())) {
                errors.email = 'Invalid email address';
              }
              if (!values.phoneNumber.trim()) {
                errors.phoneNumber = 'Required';
              }
              if (!values.address.trim()) {
                errors.address = 'Required';
              }
              if (!values.city.trim()) {
                errors.city = 'Required';
              }
              if (!values.state.trim()) {
                errors.state = 'Required';
              }
              if (!values.pinCode.trim()) {
                errors.pinCode = 'Required';
              }
              return errors;
            }}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
                <div className="mb-3">
                  <label htmlFor="fullName" className="form-label">Full Name</label>
                  <Field type="text" className="form-control" id="fullName" name="fullName" />
                  <ErrorMessage name="fullName" component="div" className="text-danger" />
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email Address</label>
                  <Field type="email" className="form-control" id="email" name="email" />
                  <ErrorMessage name="email" component="div" className="text-danger" />
                </div>

                <div className="mb-3">
                  <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                  <Field type="tel" className="form-control" id="phoneNumber" name="phoneNumber" />
                  <ErrorMessage name="phoneNumber" component="div" className="text-danger" />
                </div>

                <div className="mb-3">
                  <label htmlFor="companyName" className="form-label">Company Name (if applicable)</label>
                  <Field type="text" className="form-control" id="companyName" name="companyName" />
                </div>

                <div className="mb-3">
                  <label htmlFor="address" className="form-label">Address</label>
                  <Field type="text" className="form-control" id="address" name="address" />
                  <ErrorMessage name="address" component="div" className="text-danger" />
                </div>

                <div className="mb-3">
                  <label htmlFor="city" className="form-label">City</label>
                  <Field type="text" className="form-control" id="city" name="city" />
                  <ErrorMessage name="city" component="div" className="text-danger" />
                </div>

                <div className="mb-3">
                  <label htmlFor="state" className="form-label">State</label>
                  <Field type="text" className="form-control" id="state" name="state" />
                  <ErrorMessage name="state" component="div" className="text-danger" />
                </div>

                <div className="mb-3">
                  <label htmlFor="pinCode" className="form-label">PIN Code</label>
                  <Field type="text" className="form-control" id="pinCode" name="pinCode" />
                  <ErrorMessage name="pinCode" component="div" className="text-danger" />
                </div>

                <button type="submit" className="btn btn-primary" disabled={isSubmitting}>Next</button>
              </Form>
            )}
          </Formik>
        </>
      )}
      {stage === 2 && (
        <>
          <h2>Stage 2: Additional Information</h2>
          <Formik
            initialValues={{
              panNumber: '',
              ifscCode: '',
              accountNumber: '',
              gstin: ''
            }}
            validate={(values) => {
              const errors = {};
              if (!values.panNumber.trim()) {
                errors.panNumber = 'Required';
              }
              if (!values.ifscCode.trim()) {
                errors.ifscCode = 'Required';
              }
              if (!values.accountNumber.trim()) {
                errors.accountNumber = 'Required';
              }
              if (!values.gstin.trim()) {
                errors.gstin = 'Required';
              }
              return errors;
            }}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
                <div className="mb-3">
                  <label htmlFor="panNumber" className="form-label">PAN Number</label>
                  <Field type="text" className="form-control" id="panNumber" name="panNumber" />
                  <ErrorMessage name="panNumber" component="div" className="text-danger" />
                </div>

                <div className="mb-3">
                  <label htmlFor="ifscCode" className="form-label">IFSC Code</label>
                  <Field type="text" className="form-control" id="ifscCode" name="ifscCode" />
                  <ErrorMessage name="ifscCode" component="div" className="text-danger" />
                </div>

                <div className="mb-3">
                  <label htmlFor="accountNumber" className="form-label">Account Number</label>
                  <Field type="text" className="form-control" id="accountNumber" name="accountNumber" />
                  <ErrorMessage name="accountNumber" component="div" className="text-danger" />
                </div>

                <div className="mb-3">
                  <label htmlFor="gstin" className="form-label">GSTIN</label>
                  <Field type="text" className="form-control" id="gstin" name="gstin" />
                  <ErrorMessage name="gstin" component="div" className="text-danger" />
                </div>

                <button type="submit" className="btn btn-primary" disabled={isSubmitting}>Next</button>
              </Form>
            )}
          </Formik>
        </>
      )}
      {stage === 3 && (
        <>
          <h2>Stage 3: Verification</h2>
            <Formik
            initialValues={{
              otp: '',
              privacyPolicy: false
            }}
            validate={(values) => {
              const errors = {};
              if (!values.otp.trim()) {
                errors.otp = 'Required';
              }
              if (!values.privacyPolicy) {
                errors.privacyPolicy = 'You must accept the privacy policy';
              }
              return errors;
            }}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
                <div className="mb-3">
                  <label htmlFor="otp" className="form-label">OTP Verification</label>
                  <Field type="text" className="form-control" id="otp" name="otp" />
                  <ErrorMessage name="otp" component="div" className="text-danger" />
                </div>

                <div className="mb-3 form-check">
                  <Field type="checkbox" className="form-check-input" id="privacyPolicy" name="privacyPolicy" />
                  <label className="form-check-label" htmlFor="privacyPolicy">I accept the privacy policy</label>
                  <ErrorMessage name="privacyPolicy" component="div" className="text-danger" />
                </div>

                <button type="submit" className="btn btn-primary" disabled={isSubmitting}>Submit</button>
              </Form>
            )}
          </Formik>
        </>
      )}
    </div>
  );
};

export default ClientRegister;
