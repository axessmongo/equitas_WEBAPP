import React, { useState } from 'react';
import axios from 'axios';

function Register() {
    const [values, setValues] = useState({
        fname: "",
        lname: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
<<<<<<< HEAD
        axios.post("http://localhost:5000/register", values)
=======
        axios.post("http://localhost:4000/api/register", values)
>>>>>>> 56134be005ddf81f35b1c584b79963c0a4ba6126
            .then((res) => {
                console.log(res.data.data);
                alert('Registration successful');
            })
            .catch((err) => {
                console.error("Registration error:", err);
                alert('Registration failed');
            });
    };

    return (
        <div>
            <section className="p-3 p-md-4 p-xl-5">
                <div className="container">
                    <div className="card border-light-subtle shadow-sm">
                        <div className="row g-0">
                            <div className="col-12 col-md-6 text-bg-primary">
                                <div className="d-flex align-items-center justify-content-center h-100">
                                    <div className="col-10 col-xl-8 py-3">
                                        <img className="img-fluid rounded mb-4" loading="lazy" src="./assets/img/bsb-logo-light.svg" width="245" height="80" alt="BootstrapBrain Logo" />
                                        <hr className="border-primary-subtle mb-4" />
                                        <h2 className="h1 mb-4">We make digital products that drive you to stand out.</h2>
                                        <p className="lead m-0">We write words, take photos, make videos, and interact with artificial intelligence.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="card-body p-3 p-md-4 p-xl-5">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="mb-5">
                                                <h2 className="h3">Registration</h2>
                                                <h3 className="fs-6 fw-normal text-secondary m-0">Enter your details to register</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <form onSubmit={handleSubmit}>
                                        <div className="row gy-3 gy-md-4 overflow-hidden">
                                            <div className="col-12">
                                                <label htmlFor="fname" className="form-label">First Name <span className="text-danger">*</span></label>
                                                <input type="text" className="form-control" name="fname" id="fname" onChange={handleChange} value={values.fname} placeholder="First Name" required />
                                            </div>
                                            <div className="col-12">
                                                <label htmlFor="lname" className="form-label">Last Name <span className="text-danger">*</span></label>
                                                <input type="text" className="form-control" name="lname" id="lname" onChange={handleChange} value={values.lname} placeholder="Last Name" required />
                                            </div>
                                            <div className="col-12">
                                                <label htmlFor="email" className="form-label">Email <span className="text-danger">*</span></label>
                                                <input type="email" className="form-control" name="email" id="email" onChange={handleChange} value={values.email} placeholder="name@example.com" required />
                                            </div>
                                            <div className="col-12">
                                                <label htmlFor="password" className="form-label">Password <span className="text-danger">*</span></label>
                                                <input type="password" className="form-control" name="password" id="password" value={values.password} onChange={handleChange} required />
                                            </div>
                                            <div className="col-12">
                                                <div className="d-grid">
                                                    <button className="btn bsb-btn-xl btn-primary" type="submit">Sign up</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                    <div className="row">
                                        <div className="col-12">
                                            <hr className="mt-5 mb-4 border-secondary-subtle" />
                                            <p className="m-0 text-secondary text-center">Already have an account? <a href="#!" className="link-primary text-decoration-none">Sign in</a></p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <p className="mt-5 mb-4">Or sign in with</p>
                                            <div className="d-flex gap-3 flex-column flex-xl-row mx-5">
                                                <button className="btn bsb-btn-xl btn-outline-primary">
                                                    Google
                                                </button>
                                                <button className="btn bsb-btn-xl btn-outline-primary">
                                                    Facebook
                                                </button>
                                                <button className="btn bsb-btn-xl btn-outline-primary">
                                                    Twitter
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Register;
