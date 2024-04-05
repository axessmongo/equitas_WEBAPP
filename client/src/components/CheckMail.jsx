import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom'; // Import Link along with useParams hook
import axios from 'axios';

function CheckMail() {
    const { id, token } = useParams(); 
    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState('');

    useEffect(() => {
        const verify = async () => {
            try {
                const response = await axios.get(`http://localhost:4000/${id}/verify/${token}`);
                setMessage(response.data.message);
            } catch (error) {
                setMessage('Error verifying email');
            } finally {
                setLoading(false);
            }
        };

        verify();
    }, [id, token]); // Include id and token in the dependency array

    return (
        <div>
            <div>
                {loading ? (
                    <p>Verifying...</p>
                ) : (
                    <div>
                        <p>{message}</p>
                        <Link to="/Login">Login</Link>
                    </div>
                )}
            </div>
        </div>
    );
}

export default CheckMail;
