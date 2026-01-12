import { useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

// Login api
const API = "http://localhost/carSalesApp/backend/api/login.php";

export default function Login() {
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const [email, setEmail]       = useState("");
    const [password, setPassword] = useState("");
    const [error, setError]       = useState("");

    const submit = async (e) => {
        e.preventDefault();
        setError("");

      try {
        const res = await axios.post(
            API,
            {
                email: email.trim(),
                password: password
            },
            {
                headers: {
                    "Content-Type": "application/json"
                }
            }
        );
        login(res.data);
        // Redirekcija na home pocetnu stranicu
        navigate("/");
      } catch (err) {
        setError(err.response?.data?.error || "Greska pri logovanju!");
      }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-4">
                    <h3 className="mb-4 text-center">Login</h3>
                    {error && (
                        <div className="alert alert-danger">
                            {error}
                        </div>
                    )}

                    <form onSubmit={submit}>
                        <div className="mb-3">
                            {/* Email */}
                            <label className="form-label">Email</label>
                            <input type="email" className="form-control" placeholder="emaildemo@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </div>
                        <div className="mb-3">
                            {/* Password */}
                            <label className="form-label">Password</label>
                            <input type="password" className="form-control" placeholder="**%4^&^%^&" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                        </div>
                        <button className="btn btn-success w-100">Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}