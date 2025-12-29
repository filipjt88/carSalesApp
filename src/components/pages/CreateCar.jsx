import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API = "http://localhost/carSalesApp/backend/api/car_create.php";

export default function CreateCar() {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        brand: "",
        model: "",
        year: "",
        price: "",
        km: "",
        fuel: "",
        hp:"",
        gearbox: "",
        body: "",
        description: "",
        city:""
    });

    const [images, setImages] = useState([]);

    const change = (e) => {
        setForm({...form, [e.target.name]: e.target.value});

    const submit = async (e) => {
        e.preventDefault();

        const data = new FormData();
        Object.keys(form).forEach(k => data.append(k, form[k]));
        images.forEach(img => data.append("images[]", img));

        await axios.post(API, data, {
            headers: {"Content-Type" : "multipart/form-data"}
        });

        navigate("/");
    };

    return (
        <div className="container mt-4" style={{ maxWidth: 700}}>
            <h3 className="mb-3">Dodaj oglas</h3>
            
        </div>
    )
    }
}