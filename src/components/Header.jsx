import { Link } from "react-router-dom";

export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link to="/" className="navbar-brand fw-world">
                Prodaja automobila
                </Link>
                <form className="d-flex ms-auto" style={{maxWidth:"400px"}}>
                    <input className="form-control me-2" type="search" placeholder="Pretraga..." />
                    <button className="btn btn-outline-light" type="submit">Trazi</button>
                </form>
            </div>
        </nav>
    )
}