import { cars } from "../../data/cars";
import CarCard from "../CarCard";

export default function Home() {
    return (
        <div className="container mt-4">
            <h2 className="mb-4">
                Automobili na prodaju
            </h2>
            <div className="row">
                {cars.map(car => (
                    <CarCard key={car.id} car={car}/>
                ))}
            </div>
        </div>
    );
}