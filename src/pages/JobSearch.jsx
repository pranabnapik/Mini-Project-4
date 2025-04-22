import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const JobSearch = () => {
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState('');
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/jobs').then(res => {
      setJobs(res.data);
      setFiltered(res.data);
    });
  }, []);

  const handleSearch = e => {
    setSearch(e.target.value);
    const query = e.target.value.toLowerCase();
    const results = jobs.filter(job =>
      job.title.toLowerCase().includes(query) ||
      job.company.toLowerCase().includes(query) ||
      job.location?.toLowerCase().includes(query) ||
      job.industry?.toLowerCase().includes(query) ||
      job.skills?.toLowerCase().includes(query)
    );
    setFiltered(results);
  };

  return (
    <div className="container mt-4">
      <h2>Search Jobs</h2>
      <input
        type="text"
        className="form-control mb-4"
        placeholder="Search by title, company, location, etc."
        value={search}
        onChange={handleSearch}
      />
      {filtered.map(job => (
        <div className="card mb-3" key={job._id}>
          <div className="card-body">
            <h5>{job.title}</h5>
            <p>{job.description}</p>
            <p><strong>Company:</strong> {job.company}</p>
            <Link to={`/jobs/${job._id}`} className="btn btn-secondary">View Details</Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default JobSearch;
