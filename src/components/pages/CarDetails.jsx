import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const API = "http://localhost/carSalaesApp/backend/api/car.php";
const IMG = "http://localhost/carSalesApp/backend/uploads/";

export default function CarDetails() {
    const { id } = useParams();
    const [car, setCar] = useState(null);

    useEffect(() => {
        axios.get(API, { params: { id } }).then(res => {
            setCar(res.data);
        });
    }, [id]);


if (!car) return <p className="text-center mt-5">Ucitavanje ...</p>

return (
    <div className="container mt-4">
        <h2>{car.brand} {car.model}</h2>

        <img src={`http://localhost/carSalesApp/backend/uploads/${car.images[0]}`} className="img-fluid mb-3" />
        
        <h4>{car.price} €</h4>

        <ul className="list-group">
            <li className="list-group-item">Godiste: {car.year}</li>
            <li className="list-group-item">Kilometraza: {car.km}</li>
            <li className="list-group-item">Gorivo: {car.fuel}</li>
            <li className="list-group-item">Menjac: {car.gearbox}</li>
            <li className="list-group-item">Grad: {car.city}</li>
        </ul>
        <p className="mt-3">{car.decription}</p>
    </div>
)
}