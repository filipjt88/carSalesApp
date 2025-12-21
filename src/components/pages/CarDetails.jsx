import { useParams } from "react-router-dom";
import { useState } from "react";

export default function CarDetails() {
    const { id } = useParams();
    const cardId = Number(id);
    const car    = cars.find(c => c.id === cardId);
    const [activeIndex, setActiveIndex] = useState(0);

    if (!car) {
        return (
            <div className="container mt-4">
                <h3 className="text-center">Auto nije pronadjen</h3>
                <p>Proveri da li je URL tacan ili se vrati na <Link to="/">pocetnu stranu</Link></p>
            </div>
        )
    }

    const onPrev = () => setActiveIndex((i) => (i - 1 + car.images.length));
    const onNext = () => setActiveIndex((i) => (i + 1) % car.images.length);
    const goTo   = (idx) => setActiveIndex(idx);

    return (
         <div className="container mt-5">
      <div className="row">
        {/* LEVAA: carousel */}
        <div className="col-lg-8">
          <div className="card mb-3">
            <div className="card-body p-3">
              <div className="position-relative">
                <img
                  src={car.images[activeIndex]}
                  alt={`${car.brand} ${car.model}`}
                  className="img-fluid w-100 rounded"
                  style={{ maxHeight: "400px", minWidth:"100%", objectFit: "cover" }}
                />
                <button className="btn btn-light position-absolute top-50 start-0 translate-middle-y" style={{ zIndex: 5 }} onClick={onPrev}>
                  ‹
                </button>
                <button className="btn btn-light position-absolute top-50 end-0 translate-middle-y" style={{ zIndex: 5 }} onClick={onNext}>
                  ›
                </button>
              </div>
            </div>
          </div>

          {/* thumbnails */}
          <div className="card">
            <div className="card-body">
              <div className="d-flex flex-wrap gap-2">
                {car.images.map((img, idx) => (
                  <div
                    key={idx}
                    style={{
                      width: 100,
                      height: 70,
                      cursor: "pointer",
                      border: idx === activeIndex ? "2px solid #0d6efd" : "1px solid #ddd",
                      borderRadius: 4,
                      overflow: "hidden"
                    }}
                    onClick={() => goTo(idx)}
                  >
                    <img src={img} alt={`thumb-${idx}`} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Osnovne informacije */}
        <div className="col-lg-4">
          <div className="card mb-3">
            <div className="card-body">
              <h3 className="card-title">{car.brand} {car.model}</h3>
              <h5 className="text-success">{car.price.toLocaleString()} €</h5>
              <p className="mb-1"><strong>Godište:</strong> {car.year}</p>
              <p className="mb-1"><strong>Kilometraža:</strong> {car.km ? car.km.toLocaleString() + ' km' : 'N/A'}</p>
              <p className="mb-1"><strong>Lokacija:</strong> {car.city}</p>
              <hr />
              <p>{car.description}</p>
              <div className="d-grid">
                <button className="btn btn-primary">Pozovi prodavca</button>
                <button className="btn btn-outline-secondary mt-2">Pošalji poruku</button>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <h6>Slični oglasi</h6>
              <ul className="list-unstyled">
                {cars.filter(c => c.brand === car.brand && c.id !== car.id).slice(0,3).map(s => (
                  <li key={s.id} className="mb-2">
                    <Link to={`/car/${s.id}`} className="text-decoration-none">
                      <div className="d-flex gap-2 align-items-center">
                        <img src={s.images[0]} alt={s.model} style={{ width: 60, height: 40, objectFit: "cover", borderRadius:4 }} />
                        <div>
                          <div className="small fw-bold">{s.brand} {s.model}</div>
                          <div className="small text-muted">{s.year} • {s.price.toLocaleString()} €</div>
                        </div>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
}