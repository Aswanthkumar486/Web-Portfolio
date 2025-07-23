import React from 'react';

export default function Projects({ data }) {
  return (
    <section className="container py-5" id='projects' aria-labelledby="projects-heading">
      <h2 id="projects-heading" className="text-center mb-4 fw-bold">
        Projects
      </h2>
      <div className="row">
        {data.map((project, index) => (
          <div
            key={index}
            className="col-12 col-sm-6 col-md-4 mb-4"
            style={{
              animation: 'fadeInUp 0.6s ease-out',
              animationDelay: `${index * 100}ms`,
              animationFillMode: 'both',
            }}
          >
            <div
              className="card h-100 shadow-sm project-card"
              role="group"
              aria-label={project.title}
            >
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  className="card-img-top project-image"
                  alt={`${project.title} preview`}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
              </div>
              <div className="card-body">
                <h5 className="card-title fw-semibold">{project.title}</h5>
                <p className="card-text small">{project.description}</p>
                <a
  href="#"
  target="_blank"
  rel="noopener noreferrer"
  className="btn btn-outline-primary d-flex align-items-center gap-2"
  style={{ fontWeight: '600', textDecoration: 'none' }}
>
  Visit Site
  <i className="fas fa-arrow-up-right-from-square"></i>
</a>

              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .project-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .project-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
        }

        .project-image {
          transition: transform 0.4s ease;
        }

        .project-card:hover .project-image {
          transform: scale(1.05);
        }
      `}</style>
    </section>
  );
}
