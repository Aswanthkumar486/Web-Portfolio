import React from 'react';

export default function Contact({ data }) {
  return (
    <div className="container py-5 bg-light" id='contact'>
      <h2 className="text-center text-dark mb-4">Contact</h2>
      <div className="row">
        {/* Left Side - Contact Info */}
        <div className="col-md-6 mb-4">
          <div className="card shadow-sm p-4 h-100">
            <div className="text-center mb-3">
              <img
                src={data.profileImage}
                alt="Profile"
                className="rounded-circle border border-primary"
                style={{ width: '120px', height: '120px', objectFit: 'cover' }}
              />
              <h4 className="mt-3 text-primary">{data.name}</h4>
              <p className="text-muted">{data.location}</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                📧 <strong>Email:</strong>{' '}
                <a href={`mailto:${data.email}`} className="text-decoration-none text-primary">
                  {data.email}
                </a>
              </li>
              <li className="list-group-item">
                📞 <strong>Phone:</strong>{' '}
                <a href={`tel:${data.phone}`} className="text-decoration-none text-primary">
                  {data.phone}
                </a>
              </li>
              <li className="list-group-item">
                🔗 <strong>LinkedIn:</strong>{' '}
                <a href={data.linkedin} target="_blank" rel="noopener noreferrer" className="text-decoration-none text-primary">
                  {data.linkedin}
                </a>
              </li>
              <li className="list-group-item">
                💻 <strong>GitHub:</strong>{' '}
                <a href={data.github} target="_blank" rel="noopener noreferrer" className="text-decoration-none text-primary">
                  {data.github}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Side - Google Form */}
        <div className="col-md-6 mb-4">
          <div className="card shadow-sm p-3 h-100">
            <h5 className="text-center text-primary mb-3">Get in Touch</h5>
            <iframe
              src={data.googleForm}
              width="100%"
              height="500"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              title="Google Form"
            >
              Loading…
            </iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
