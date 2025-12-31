import { Link } from "react-router-dom";
import "../App.css";

export default function CarCard({ car }) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow-sm">

        <img src={`http://localhost/carSalesApp/backend/uploads/${car.image}`} className="card-img-top"
          style={{ height: 200, objectFit: "cover" }}/>
        <div className="card-body">
          <h5>{car.brand} {car.model}</h5>
          <p className="mb-1"><b>{car.price} €</b></p>
          <small className="text-muted">
            {car.year} • {car.km} km • {car.fuel}
          </small>
        </div>

        <div className="card-footer bg-white border-0">
          <Link to={`/cars/${car.id}`} className="btn btn-outline-primary w-100">
            Pogledaj oglas
          </Link>
        </div>

      </div>
    </div>
  );
}