import React from 'react';

export default function Hero({ data }) {
  return (
    <div
      className="position-relative text-white"
      style={{
        backgroundImage: `url(${data.backgroundImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '90vh',
        backgroundAttachment: 'fixed',
      }}
      
    >
      {/* Dark overlay for contrast */}
      <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-75"></div>

      <div className="container position-relative h-100 d-flex align-items-center py-5">
        <div className="row w-100">
          <div className="col-md-7 col-lg-6 text-start d-flex flex-column justify-content-center">
            {/* Profile image */}
            <img
              src={data.profileImage}
              alt={data.name}
              className="img-fluid rounded-circle mb-4 shadow"
              style={{
                width: '160px',
                height: '160px',
                objectFit: 'cover',
                border: '4px solid #fff',
              }}
            />

            {/* Developer Info */}
            <h1 className="display-4 fw-bold text-gradient mb-2">
              {data.name}
            </h1>
            <h3 className="text-info fw-light mb-3">{data.title}</h3>
            <p className="lead fst-italic text-light">{data.tagline}</p>
            <p className="text-light opacity-75">{data.summary}</p>

            <a href="#contact" className="btn btn-outline-light btn-lg mt-3">
              Contact Me
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
     

      {/* Scoped CSS */}
      <style jsx>{`
        .text-gradient {
          background: linear-gradient(45deg, #fff, #a0d2ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        `}</style>
    </div>
  );
}
