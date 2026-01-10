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
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");

        const formData = new formData();
        Object.keys(form).forEach(key => {
            formData.append(key, form[key]);
        });
        formData.append("image", image);

        try {
            const res = await axios.post(API_URL, formData);
            if (res.data.success) {
                setSuccess("Oglas je uspesno dodat!");
                setForm({
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
                setImage(null);
            }
        } catch (err) {
            setError("Greska, nije dodat oglas!");
        }
    };

    return (
        <div className="container mt-5" style={{ maxWidth: 700 }}>
            <h3 className="text-center mb-4">Dodaj novi oglas</h3>

            {success && <div className="alert alert-success"> {success} </div>}
            {error && <div className="alert alert-danger"> {error} </div>}

            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <div className="row g-3">
                    <div className="col-md-6">
                        <input className="form-control" name="brand" placeholder="Marka" value={form.brand} onChange={handleChange} />
                    </div>
                    <div className="col-md-6">
                        <input className="form-control" name="model" placeholder="Model" value={form.model} onChange={handleChange} />
                    </div>
                    <div className="col-md-4">
                        <input type="number" name="year" placeholder="Godiste" value={form.year} onChange={handleChange} />
                    </div>
                </div>
            </form>
        </div>
    )
}