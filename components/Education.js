import React from 'react';

export default function Education({ data }) {
  return (
    <div className="container py-5" id='education'>
      <h2 className="text-center mb-4 fw-bold">Education</h2>
      <div className="row">
        {data.map((edu, index) => (
          <div key={index} className="col-12 mb-4">
            <div className="bg-light p-3 rounded shadow-sm d-flex align-items-start">
              <img
                src={edu.icon}
                alt={edu.institution}
                className="me-3"
                style={{ width: '50px', height: '50px', objectFit: 'contain' }}
              />
              <div>
                <h5 className="mb-1 fw-semibold">{edu.institution}</h5>
                <p className="mb-1">{edu.degree}</p>
                <p className="mb-1 text-muted">{edu.year}</p>
                <p className="mb-0 fw-medium">Score: {edu.score}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
