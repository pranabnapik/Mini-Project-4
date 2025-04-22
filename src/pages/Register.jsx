import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      console.log('Registering:', form);
      const res = await axios.post('http://localhost:5000/api/auth/register', form);
      alert('Registered successfully');
    } catch (err) {
      console.error(err);
      alert('Error registering user');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          type="text"
          className="form-control mb-2"
          placeholder="Name"
          onChange={handleChange}
          required
        />
        <input
          name="email"
          type="email"
          className="form-control mb-2"
          placeholder="Email"
          onChange={handleChange}
          required
        />
        <input
          name="password"
          type="password"
          className="form-control mb-2"
          placeholder="Password"
          onChange={handleChange}
          required
        />
        <button className="btn btn-primary">Register</button>
      </form>
    </div>
  );
};

export default Register;
