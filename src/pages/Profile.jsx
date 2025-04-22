import React from 'react';

const Profiles = () => {
  const users = [
    { id: 1, name: 'Alice Johnson', email: 'alice@example.com' },
    { id: 2, name: 'Bob Smith', email: 'bob@example.com' },
    { id: 3, name: 'Charlie Lee', email: 'charlie@example.com' }
  ];

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">User Profiles</h2>
      <div className="row justify-content-center">
        {users.map((user) => (
          <div className="col-md-4 mb-4" key={user.id}>
            <div className="card shadow-lg p-3" style={{ borderRadius: '1rem' }}>
              <div className="card-body text-center">
                <img
                  src={`https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(user.name)}`}
                  alt="avatar"
                  className="mb-3"
                  width="100"
                  height="100"
                />
                <h5 className="card-title">{user.name}</h5>
                <p className="card-text text-muted">{user.email}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profiles;
