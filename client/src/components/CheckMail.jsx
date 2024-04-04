import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

function CheckMail() {
    const [validUrl, setValidUrl] = useState(false);
    const { id, token } = useParams();

    useEffect(() => {
        const verifyEmailUrl = async () => {
            try {
                const url = `http://localhost:4000/${id}/verify/${token}`;
                const { data } = await axios.get(url);
                console.log(data);
                setValidUrl(true);
            } catch (error) {
                console.log(error);
                setValidUrl(false);
            }
        };
        verifyEmailUrl();
    }, [id, token]);

    return (
        <div>
            {validUrl ? (
                <div className="">
                    <h1>Email verified successfully</h1>
                    <Link to="/clientdashboard">
                        <button className="btn btn-success">Dashboard</button>
                    </Link>
                </div>
            ) : (
                <h1>404 Not Found</h1>
            )}
        </div>
    );
}

export default CheckMail;
