import axios from "axios";
import { useState } from "react";

const API_URL = "http://localhost/carSalesApp/backend/api/car_create.php";

export default function CreateCar() {
    const [form, setForm] = useState({
        brand: "",
        model: "",
        year: "",
        price: "",
        km: "",
        fuel: "",
        gearbox: "",
        body: "",
        city: "",
        description: ""
    });

    const [image, setImage] = useState(null);
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    };
}