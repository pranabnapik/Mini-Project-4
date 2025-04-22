import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="container text-center mt-5">
      <h1 className="mb-4">Welcome to JobConnect</h1>
      <p className="lead mb-4">
        Find your next opportunity or hire top talent with ease.
      </p>

      <div className="d-flex justify-content-center gap-3">
        <Link to="/login" className="btn btn-outline-primary">
          Login
        </Link>
        <Link to="/register" className="btn btn-outline-success">
          Register
        </Link>
        <Link to="/jobs" className="btn btn-outline-secondary">
          Browse Jobs
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
