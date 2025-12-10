import { useParams } from "react-router-dom";
import { cars } from "../../data/cars";
import { useState } from "react";


export default function CarDetails() {
    const { id } = useParams();
    const cardId = Number(id);
    const car =  cars.find(c => c.id === cardId);

    const [activeIndex, setActiveIndex] = useState(0);

    if(!car) {
        return(
            <div className="container mt-4">
                <h3 className="text-center">Auto nije pronadjen</h3>
                <p>Proveri da li je URL tacan ili se vrati na <Link to="/">pocetnu stranu</Link></p>
            </div>
        )
    }

    const onPrev = () => setActiveIndex((i) => (i - 1 + car.images.length));
    const onNext = () => setActiveIndex((i) => (i + 1) % car.images.length);
    const goTo = (idx) => setActiveIndex(idx);

    return (
        <div className="container mt-4">
            <div className="row">
                {/* {/*  LEVAA: carousel * /} */}
            </div>
        </div>
    )

}