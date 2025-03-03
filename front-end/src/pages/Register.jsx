import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { registerUser, logoutUser } from '../store/authActions';

const Register = () => {

    const [formData, setFormData] = useState({ username: "", email: "", password: "" });
    const dispatch = useDispatch();
    const { loading, error } = useSelector( (state) => state.auth);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(registerUser(formData));
    };

    const handleLogout = () => {
        dispatch(logoutUser());
    };

  return (
    <div>
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" name="username" placeholder='Username' onChange={handleChange} />
            <input type="email" name="email" placeholder='Email' onChange={handleChange}/>
            <input type="password" name="password" placeholder='Password' onChange={handleChange} />
            <button type="submit" disabled={loading}>Register</button>
        </form>
        {error && <p style={{ color: "red"}}>{error}</p>}

        <button onClick={handleLogout}>Logout</button>
      
    </div>
  )
}

export default Register;
