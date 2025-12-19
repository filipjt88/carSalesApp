import { cars as allCars } from "../../data/cars";
import CarCard from "../../components/CarCard";
import { useState } from "react";
import SearchBox from "../SearchBox";

export default function Home() {
        const [cars, setCars] = useState(allCars);
        
        const handleSearch = (filters) => {
            let result = allCars;

            if(filters.brand !== "Sve marke") {
                result = result.filter(c => c.brand === filters.brand);
            }

            if(filters.model) {
                result = result.filter(c => c.model === filter.model);
            }

            if(filters.fuel !== "Sva goriva") {
                result = result.filter(c => c.fuel === filters.fuel);
            }

            if(filters.priceTo) {
                result = result.filter(c => c.price <= Number(filters.priceTo));
            }

            if(filters.yearsFrom) {
                result = result.filter(c => c.year >= Number(filters.yearsFrom));
            }

            if(filters.yearsTo) {
                result = result.filter(c => c.year <= Number(filters.yearsTo));
            }

            setCars(result);
        };

    return (
         <div className="container mt-4">

            <SearchBox OnSearch={handleSearch} />
            <h2 className="mb-4 text-center">Automobili na prodaju</h2>
            <div className="row">
                {cars.length === 0 && (
                    <p className="text-muted">Nema rezultata za izabrane kriterijume!</p>
                )}
                {cars.map(car => (
                    <CarCard key={car.id} car={car}/>
                ))}
            </div>
        </div>
    );
}



 