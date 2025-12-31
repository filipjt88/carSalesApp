import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const API = "http://localhost/carSalaesApp/backend/api/car.php";
const IMG = "http://localhost/carSalesApp/backend/uploads/";

export default function CarDetails() {
    const { id } = useParams();
    const [car, setCar] = useState(null);
    const [mainImage, setMainImage] = useState("");

    useEffect(() => {
        axios.get(API, { params: { id } }).then(res => {
            setCar(res.data);
            setMainImage(res.data.images?.[0]);
        });
    }, [id]);


if (!car) return <p className="text-center mt-5">Ucitavanje ...</p>

return (
    <div className="container mt-4">
        
    </div>
)
}