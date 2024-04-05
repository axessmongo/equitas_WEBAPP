import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import axios from 'axios';

export default function ForgotModal(props) {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = () => {
        setLoading(true);
        axios.post('/api/emailpassword', { email })
            .then(response => {
                
                alert('Password reset request sent successfully')
                console.log('Password reset request sent successfully:', response.data);
                setLoading(false);
                props.onHide();
            })
            .catch(error => {
                // Handle error, maybe show an error message
                console.error('Error while resetting password:', error);
                setLoading(false);
            });
    };

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className='clientLogin'
        >
            <Modal.Header closeButton className='border-0'>
                <Modal.Title id="contained-modal-title-vcenter">
                    Reset Password
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div
                    className="validate-input col-lg-8 mx-auto"
                    data-validate="Valid email is required: ex@abc.xyz"
                >
                    <input
                        className="input100"
                        type="text"
                        name="email"
                        id='email'
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <span className="focus-input100" />
                    <span className="symbol-input100">
                        <i className="fa fa-envelope" aria-hidden="true" />
                    </span>
                </div>
            </Modal.Body>
            <Modal.Footer className='border-0 justify-content-center'>
                <Button className='btn btn-success' onClick={handleSubmit} disabled={loading}>
                    {loading ? 'Loading...' : 'Submit'}
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
