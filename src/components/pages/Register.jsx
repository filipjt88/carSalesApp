import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// Register API
const API = "http://localhost/carSalesApp/backend/api/register.php";

export default function Register() {
    const navigate          = useNavigate();
    const [form, setForm]   = useState({ name: "", email: "", password: "" });
    const [error, setError] = useState("");

    const submit = async (e) => {
      e.preventDefault();
      try {
        await axios.post(API, form);
        navigate("/login");
      } catch (err) {
        setError(err.response?.data?.error || "Greska");
      }
    };

    return (
        <div className="container mt-5" style={{ maxWidth: 400}}>
            <h3 className="mb-3">Register</h3>
            {error && <div className="alert alert-danger">{error}</div>}
            <form onSubmit={submit}>
                <input className="form-control mb-3" placeholder="Name" onChange={e => setForm({ ...form, email: e.target.value })} />
                <input className="form-control mb-3" placeholder="Email" onChange={e => setForm({ ...form, email: e.target.value })} />
                <input className="form-control mb-3" placeholder="Password" onChange={e => setForm({ ...form, password: e.target.value })} />
                <button className="btn btn-success w-100">Register</button>
            </form>
        </div>
    )

}