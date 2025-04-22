import React from 'react';
import { Link } from 'react-router-dom';

const JobList = () => {
  const jobs = [
    {
      _id: '1',
      title: 'Frontend Developer (React)',
      description: 'Join our dynamic UI team to build responsive React interfaces for web apps.',
    },
    {
      _id: '2',
      title: 'Backend Developer (Node.js)',
      description: 'Looking for a Node.js expert to develop RESTful APIs and integrate with MongoDB.',
    },
    {
      _id: '3',
      title: 'Full Stack Developer',
      description: 'Work across the stack using React, Node.js, and PostgreSQL in a collaborative environment.',
    },
    {
      _id: '4',
      title: 'DevOps Engineer',
      description: 'Automate deployments and manage CI/CD pipelines using Docker, Kubernetes, and AWS.',
    },
    {
      _id: '5',
      title: 'QA Automation Tester',
      description: 'Write and run automated test cases using Selenium and Cypress for our SaaS platform.',
    }
  ];

  return (
    <div className="container mt-4">
      <h2>Job Listings</h2>
      {jobs.map(job => (
        <div className="card mb-3" key={job._id}>
          <div className="card-body">
            <h5>{job.title}</h5>
            <p>{job.description}</p>
            <Link to={`/jobs/${job._id}`} className="btn btn-secondary">View Details</Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default JobList;
