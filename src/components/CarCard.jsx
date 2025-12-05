import { Link } from "react-router-dom";

export default function CarCard({ car }) {
    return (
        <div className="col-md-4 mb-4">
            <div className="card shadow-sm">
                <img src="{car.img}" className="car-img-top" alt="car-model" />
                <div className="card-body">
                    <h5 className="card-title">
                        {car.brand} {car.model}
                    </h5>
                    <p className="card-text">
                        Godiste: {car.year} <br/>
                        Kilometraza: {car.km.toLocaleString()} km <br/>
                        Cena: {car.price.toLocaleString()} eur
                    </p>
                    <Link to={`/car/${car.id}`} className="btn btn-primary w-100">
                    Detalji</Link>
                </div>
            </div>
        </div>
    )
}