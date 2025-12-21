import { useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const API = "http://localhost/carSalesApp/backend/api/login.php";

export default function Login() {
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const [email, setEmail]       = useState("");
    const [password, setPassword] = useState("");
    const [error, setError]       = useState("");

    const submit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(API, {email, password});
            login(res.data);
            navigate("/");
        } catch (err) {
            setError(err.response?.data?.error || "Greska");
        }
    };

    return (
        <div className="container mt-5" style={{ maxWidth: 400}}>
            <h3 className="mb-3">Login</h3>
            {error && <div className="alert alert-danger">{error}</div>}
            <form onSubmit={submit}>
                <input className="form-control mb-3" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                <input className="form-control mb-3" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                <button className="btn btn-primary w-100">Login</button>
            </form>
        </div>
    )
}