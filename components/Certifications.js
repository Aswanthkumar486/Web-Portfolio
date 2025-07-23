import React from 'react'

export default function Certifications({ data }) {
  return (
    <div className="container py-4" id='certifications'>
      <h2 className="mb-4 text-center">Certifications</h2>
      <div className="row">
        {data.map((item, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card h-100 text-center">
              <img src={item.image} className="card-img-top p-4" alt={item.title} style={{ height: '200px', objectFit: 'contain' }} />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
