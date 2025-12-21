import { useEffect, useState } from "react";
import axios from "axios";
import CarCard from "../../components/CarCard";
import SearchBox from "../SearchBox";

const API_URL = "https://localhost/backend/api/cars.php";

export default function Home() {
        const [cars, setCars] = useState([]);
        const fetchCars = async (filters = {}) => {
            const res = await axios.get(API_URL, {params: filters});
            setCars(res.data);
        };

        useEffect(() => {
            fetchCars();
        }, []);
    
    return (
         <div className="container mt-4">
            <h2 className="mb-4 text-center text-light">Automobili na prodaju</h2>
            <SearchBox OnSearch={fetchCars} />
            <div className="row">
                {cars.length === 0 && (
                    <p className="text-muted">Nema rezultata za izabrane kriterijume!</p>
                )}
               {Array.isArray(cars) && cars.map(car => (
                    <CarCard key={car.id} car={car} />
                ))}
            </div>
        </div>
    );
}



 