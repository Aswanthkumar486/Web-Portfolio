export default function Testminols({ data }) {
  return (
    <div className="bg-light py-5">
      <div className="container">
        <h2 className="text-center mb-4">Testimonials</h2>
        <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">

            {data.map((item, index) => (
              <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                <div className="d-flex flex-column align-items-center text-center p-4">
                  <img src={item.image} className="rounded-circle mb-3" width="100" height="100" alt={item.name} />
                  <p className="mb-1 fst-italic">"{item.feedback}"</p>
                  <h5 className="mb-0 mt-2">{item.name}</h5>
                  <small className="text-muted">{item.designation}</small>
                </div>
              </div>
            ))}

          </div>

          <button className="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon"></span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" style={{color:"black"}}></span>
          </button>
        </div>
      </div>
    </div> 
  );
}
