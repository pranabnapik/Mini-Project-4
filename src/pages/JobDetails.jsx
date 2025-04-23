import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/jobs/${id}`).then(res => setJob(res.data));
  }, [id]);

  const handleApply = () => {
    
    alert('Application submitted!');
  };

  return job ? (
    <div className="container mt-4">
      <h3>{job.title}</h3>
      <p>{job.description}</p>
      <p><strong>Company:</strong> {job.company}</p>
      <button className="btn btn-success" onClick={handleApply}>Apply</button>
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default JobDetails;
