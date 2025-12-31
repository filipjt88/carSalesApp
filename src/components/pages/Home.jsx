import { useEffect, useState } from "react";
import axios from "axios";
import CarCard from "../../components/CarCard";
import SearchBox from "../SearchBox";

const API_URL = "http://localhost/carSalesApp/backend/api/cars.php";

export default function Home() {
        const [cars, setCars] = useState([]);
        const [page, setPage] = useState(1);

        const fetchCars       = async (filters = {}) => {
            const res         = await axios.get(API_URL, { params: filters });
            setCars(res.data);
            setPage(1);
        };

        useEffect(() => {
            fetchCars();
        }, []);

        const totalPage = Math.ceil(cars.length / PER_PAGE);
        const start = (page - 1) * PER_PAGE;
        const currentCars = cars.slice(start, start + PER_PAGE);

    return (
         <div className="container mt-5">
            <h2 className="mb-4 text-center">Automobili na prodaju</h2>
            <SearchBox cars ={cars} OnSearch={fetchCars} />
            <div className="row">
                {cars.length === 0 && (
                    <p className="text-muted text-center">Nema rezultata za izabrane kriterijume!</p>
                )}
               {Array.isArray(cars) && cars.map(car => (
                    <CarCard key={car.id} car={car} />
                ))}
            </div>
        </div>
    );
}



 