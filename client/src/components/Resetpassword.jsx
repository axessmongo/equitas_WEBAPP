import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Resetpassword() {
  const [validUrl, setValidUrl] = useState(false);
  const [password, setPassword] = useState("");
  const { id, token } = useParams(); // Destructure id and token from useParams
  const url = `http://localhost:4000/api/password-reset/${id}/${token}`;

  useEffect(() => {
    const verifyUrl = async () => {
      try {
        await axios.get(url);
        setValidUrl(true);
      } catch (error) {
        setValidUrl(false);
      }
    };
    verifyUrl();
  }, [id, token, url]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(url, { password });
    
      setMsg(data.message);
      setError("");
      window.location = "/login";
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
        setMsg("");
      }
    }
  };

  return (
    <div>
      {validUrl ? (
        <div>
          <form onSubmit={handleSubmit}>
            <h1>Add New Password</h1>
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="form-control" // Corrected class name
            />
            <button type="submit" className={styles.green_btn}>
              Submit
            </button>
          </form>
        </div>
      ) : (
        <h1>404 Not Found</h1>
      )}
    </div>
  );
}

export default Resetpassword;
