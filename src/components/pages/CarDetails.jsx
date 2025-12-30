import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const API = "http://localhost/carSalaesApp/backend/api/car.php";

export default function CarDetails() {
    const { id } = useParams();
    const [car, setCar] = useState(null);

    useEffect(() => {
        axios.get(API, { params: { id } }).then(res => {
            setCar(res.data);
        });
    }, [id]);
}