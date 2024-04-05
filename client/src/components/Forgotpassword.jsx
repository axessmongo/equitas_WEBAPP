import React, { useState } from 'react';
import axios from 'axios'; // Don't forget to import axios

function Forgotpassword() {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = `http://localhost:4000/api/emailpassword`;
      const { data } = await axios.post(url, { email });
      setMsg(data.message);
      setError("");
    } catch (error) {
      console.log(error);
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Forgot Password</h1>
        <input
          type="email"
          placeholder="Email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
          // Add your CSS class for styling here
        />
        {/* Display error message if exists */}
        {error && <div>{error}</div>}
        {/* Display success message if exists */}
        {msg && <div>{msg}</div>}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Forgotpassword;
