import axios from "axios";
import { useState } from "react";

// Api url car create
const API_URL = "http://localhost/carSalesApp/backend/api/car_create.php";

export default function CreateCar() {
    const [form, setForm] = useState({
        brand: "",
        model: "",
        year:  "",
        price: "",
        km:    "",
        fuel:  "",
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
            setError("Greska, nije kreiran oglas!");
        }
    };

    return (
        <div className="container mt-5" style={{ maxWidth: 700 }}>
            <h3 className="text-center mb-4">Dodaj novi oglas</h3>

            {success && <div className="alert alert-success"> {success} </div>}
            {error && <div className="alert alert-danger"> {error} </div>}

            {/* Form */}
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
                    <div className="col-md-4">
                        <input type="number" name="price" placeholder="Cena" value={form.price} onChange={handleChange} />
                    </div>
                     <div className="col-md-4">
                        <input type="number" name="km" placeholder="Kilometraza" value={form.km} onChange={handleChange} />
                    </div>
                    <div className="col-md-6">
                        <select name="fuel" className="form-select" value={form.fuel} onChange={handleChange}>
                            <option value="">Gorivo</option>
                            <option>Dizel</option>
                            <option>Benzin</option>
                            <option>Plin</option>
                            <option>Hibrid</option>
                            <option>Elektricni</option>
                        </select>
                    </div>
                    <div className="col-md-6">
                        <select className="form-select" name="body" value={form.body} onChange={handleChange}>
                            <option value="">Karoserija</option>
                            <option>Limuzina</option>
                            <option>Karavan</option>
                            <option>SUV</option>
                            <option>Hecbek</option>
                        </select>
                    </div>
                    <div className="col-md-6">
                        <input className="form-control" name="city" placeholder="Grad" value={form.city} onChange={handleChange} />
                    </div>
                    <div className="col-12">
                        <textarea className="form-control" rows="4" name="description" placeholder="Opis vozila" value={form.description} onChange={handleChange}/>
                    </div>
                    <div className="col-12">
                        <input type="file" className="form-control" onChange={e => setImage(e.target.files[0])} required />
                    </div>
                    <div className="col-12">
                        <button className="btn btn-success w-100">Sacuvaj oglas</button>
                    </div>
                </div>
            </form>
        </div>
    )
}   