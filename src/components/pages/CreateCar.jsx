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
    
}