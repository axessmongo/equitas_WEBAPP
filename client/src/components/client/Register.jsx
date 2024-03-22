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

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:6000/api/register", values);
            console.log(response.data);
            // Handle success (redirect user, show success message, etc.)
        } catch (error) {
            console.error("Registration error:", error);
            // Handle error (show error message to the user, etc.)
        }
    };

    return (
        <div>
            {/* Your registration form JSX */}
            <form onSubmit={handleSubmit}>
                {/* Form fields */}
                <input type="text" name="fname" value={values.fname} onChange={handleChange} placeholder="First Name" />
                <input type="text" name="lname" value={values.lname} onChange={handleChange} placeholder="Last Name" />
                <input type="email" name="email" value={values.email} onChange={handleChange} placeholder="Email" />
                <input type="password" name="password" value={values.password} onChange={handleChange} placeholder="Password" />
                {/* Submit button */}
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default Register;
