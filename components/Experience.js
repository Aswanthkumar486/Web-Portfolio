import React from 'react';

export default function Experience({ data }) {
  return (
    <div className="container py-5" id='experience'>
      <h2 className="text-center text-dark mb-4">Experience</h2>
      <div className="row gy-4">
        {data.map((exp, index) => (
          <div key={index} className="col-md-6">
            <div className="card border-primary shadow-sm h-100">
              <div className="card-header bg-primary-subtle text-primary fw-bold">
                {exp.company}
              </div>
              <div className="card-body">
                <h5 className="card-title text-dark">{exp.role}</h5>
                <p className="card-subtitle mb-2 text-muted">
                  {exp.duration} | {exp.location}
                </p>

                <p className="fw-semibold text-dark mt-3 mb-1">Responsibilities:</p>
                <ul className="list-unstyled ps-3">
                  {exp.responsibilities.map((item, i) => (
                    <li key={i} className="mb-1">🔹 {item}</li>
                  ))}
                </ul>

                <p className="fw-semibold text-dark mt-3 mb-1">Technologies:</p>
                <ul className="list-inline">
                  {exp.technologies.map((tech, j) => (
                    <li key={j} className="list-inline-item badge bg-primary-subtle text-primary me-1">
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
