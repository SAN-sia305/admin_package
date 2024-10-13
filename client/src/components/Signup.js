import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
    const [formData, setFormData] = useState({
        name: '',
        secretStage: '',
        age: '',
        nationality: '',
        gender: '',
        userId: '',
        password: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/auth/signup', formData);
            // Redirect to login
        } catch (error) {
            console.error('Signup failed', error.response.data);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {Object.keys(formData).map((key) => (
                <input key={key} name={key} value={formData[key]} onChange={handleChange} placeholder={key} required />
            ))}
            <button type="submit">Signup</button>
        </form>
    );
};

export default Signup;
