import { Link } from "react-router-dom";
import "../App.css";

export default function CarCard({ car }) {
    return (
        <div className="col-md-4 mb-4">
            <div className="card shadow-sm">
                <img src={car.image} className="car-img-top" alt={car.model} />
                <div className="card-body">
                    <h5 className="card-title">
                        {car.brand} {car.model}
                    </h5>
                    <p className="card-text">
                        Godiste: {car.year} <br/>
                        Kilometraza: {car.km.toLocaleString()} km <br/>
                        Cena: {car.price} eura
                    </p>
                    <Link to={`/car/${car.id}`} className="btn btn-primary w-100">
                    Detaljnije</Link>
                </div>
            </div>
        </div>
    )
}