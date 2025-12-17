import { cars } from "../../data/cars";
import CarCard from "../../components/CarCard";

export default function Home() {
    return (
        <div className="container mt-4">
            <h2 className="mb-4 text-center">Automobili na prodaju</h2>
            <div className="row">
                {cars.map(car => (
                    <CarCard key={car.id} car={car}/>
                ))}
            </div>
        </div>
    );
}