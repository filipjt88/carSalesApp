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
            {/* Advertisement form */}
            <form onSubmit={submit} encType="multipart/form-data">
                <input name="brand" className="form-control mb-2" placeholder="Marka" onChange={change} />
                <input name="model" className="form-control mb-2" placeholder="Model" onChange={change} />
                <input name="year" className="form-control mb-2" placeholder="Year" onChange={change} />
                <input name="price" className="form-control mb-2" placeholder="Price" onChange={change} />
                <input name="km" className="form-control mb-2" placeholder="Km" onChange={change} />
                <select name="fuel" className="form-select mb-2" onChange={change}>
                    <option value="">Gorivo</option>
                    <option>Dizel</option>
                    <option>Benzin</option>
                    <option>Hibrid</option>
                    <option>Elektricni</option>
                </select>
                <input name="gearbox" className="form-control mb-2" placeholder="Menjac" onChange={change} />
                <input name="hp" className="form-control mb-2" placeholder="Snaga" onChange={change} />
                <input name="body" className="form-control mb-2" placeholder="Karoserija" onChange={change} />
                <input name="city" className="form-control mb-2" placeholder="Grad" onChange={change} />
                <textarea name="description" className="form-control mb-2" placeholder="Opis" onChange={change} />
                <input type="file" multiple className="form-control mb-3" placeholder="Grad" onChange={e => setImages([...e.target.files])} />
                <button className="btn btn btn-success w-100">Sacuvaj oglas</button>
            </form>
        </div>
    )
    }
}