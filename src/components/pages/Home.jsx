import { useEffect, useState } from "react";
import axios from "axios";
import CarCard from "../../components/CarCard";
import SearchBox from "../SearchBox";

// Api url
const API_URL = "http://localhost/carSalesApp/backend/api/cars.php";
// page 
const PER_PAGE = 6;

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

        const totalPages = Math.ceil(cars.length / PER_PAGE);
        const start = (page - 1) * PER_PAGE;
        const currentCars = cars.slice(start, start + PER_PAGE);

    return (
         <div className="container mt-5">
            <h2 className="mb-4 text-center">Automobili na prodaju</h2>
            <SearchBox cars ={cars} OnSearch={fetchCars} />
            <div className="row">
                {currentCars.length === 0 && (
                    <p className="text-muted text-center">Nema rezultata za izabrane kriterijume!</p>
                )}
               {currentCars.map(car => (
                    <CarCard key={car.id} car={car} />
                ))}
            </div>
            
            {/* Paginacija */}
                {totalPages > 1 && (
                    <nav className="d-flex justify-content-center mt-4">
                        <ul className="pagination">
                            <li className={`page-item ${page === 1 && "disabled"}`}>
                                <button className="page-link" onClick={() => setPage(p => p -1)}>Prethodna strana</button>
                            </li>
                            {[...Array(totalPages)].map((_, i) => (
                                <li key={i} className={`page-item ${page === i + 1 ? "active" : ""}`}>
                                    <button className="page-link" onClick={() => setPage( i + 1)}> {i + 1}</button>
                                </li>
                            ))}
                            <li className={`page-item ${page === totalPages && "disabled"}`}>
                                <button className="page-link" onClick={() => setPage(p => p + 1)}>Sledeca stranica</button>
                            </li>
                        </ul>
                    </nav>
                )}
        </div>
    );
}



 