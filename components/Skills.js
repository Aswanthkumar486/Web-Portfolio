import React from 'react';

export default function Skills({ data }) {
  return (
    <div className="container py-5" id='skills'>
      <h2 className="text-center mb-4 fw-bold">Skills</h2>
      <div className="row">
        {data.map((skill, index) => (
          <div key={index} className="col-12 col-sm-6 mb-4">
            <div className="bg-light p-3 rounded shadow-sm d-flex align-items-center">
              <img
                src={skill.icon}
                alt={skill.name}
                className="me-3"
                style={{ width: '40px', height: '40px', objectFit: 'contain' }}
              />
              <p className="mb-0 fw-semibold">{skill.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
