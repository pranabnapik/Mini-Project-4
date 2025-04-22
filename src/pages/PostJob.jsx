import React, { useState } from 'react';
import axios from 'axios';

const PostJob = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    company: '',
    location: '',
    industry: '',
    skills: '',
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/jobs', formData);
      alert('Job posted successfully!');
      setFormData({ title: '', description: '', company: '', location: '', industry: '', skills: '' });
    } catch (err) {
      alert('Error posting job');
    }
  };

  return (
    <div className="container mt-4">
      <h2>Post a Job</h2>
      <form onSubmit={handleSubmit}>
        {['title', 'company', 'location', 'industry', 'skills'].map(field => (
          <div className="mb-3" key={field}>
            <label className="form-label">{field.charAt(0).toUpperCase() + field.slice(1)}</label>
            <input
              type="text"
              name={field}
              value={formData[field]}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
        ))}
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Post Job</button>
      </form>
    </div>
  );
};

export default PostJob;
