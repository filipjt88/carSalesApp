import { Link } from "react-router-dom";

// Header
export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link to="/" className="navbar-brand fw-world">
                <h4 className="display-1 text-center">Prodaja automobila <i className="fa-solid fa-car car"></i></h4>
                </Link>
                {/* Form */}
                <form className="d-flex ms-auto" style={{maxWidth:"450px"}}>
                    <input className="form-control me-2" type="search" placeholder="Pretrazi..." />
                    <button className="btn btn-outline-light" type="submit">Pretrazi</button>
                </form>
            </div>
        </nav>
    )
}