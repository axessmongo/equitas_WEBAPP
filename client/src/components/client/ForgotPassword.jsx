import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ForgotPassword = ({ match }) => {
  const { id, token } = useParams();
  const [verificationStatus, setVerificationStatus] = useState('pending');

  useEffect(() => {
    const verifyForgetPassword = async () => {
      try {
<<<<<<< HEAD
        const response = await axios.get(`http://localhost:5000/${id}/${token}`);
=======
        const response = await axios.get(`/${id}/${token}`);
>>>>>>> 56134be005ddf81f35b1c584b79963c0a4ba6126
        if (response.data.message === 'invalid link') {
          setVerificationStatus('invalid');
        } else {
          setVerificationStatus('verified');
        }
      } catch (error) {
        console.error('Error verifying forget password link:', error);
        setVerificationStatus('invalid');
      }
    };

    verifyForgetPassword();
  }, [id, token]); // useEffect dependencies

  return (
    <div>
      {verificationStatus === 'verified' && (
        <div>
          <h1>Password Reset Link Verified</h1>
          <img src="" alt="Verified" />
        </div>
      )}
      {verificationStatus === 'invalid' && (
        <div>
          <h1>Invalid Password Reset Link</h1>
          <img src="/invalid.png" alt="Invalid" />
        </div>
      )}
      {verificationStatus === 'pending' && (
        <div>
          <h1>Verifying Password Reset Link...</h1>
          {/* You can optionally add a loading spinner here */}
        </div>
      )}
    </div>
  );
};

export default ForgotPassword;
