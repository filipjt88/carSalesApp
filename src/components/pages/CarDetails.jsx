import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

// Api and img url
const API = "http://localhost/carSalaesApp/backend/api/car.php";
const IMG = "http://localhost/carSalesApp/backend/uploads/";


export default function CarDetails() {
    // Setup
    const { id } = useParams();
    const [car, setCar] = useState(null);
    const [mainImage, setMainImage] = useState("");
    const [lightBoxOpen, setLightBoxOpen] = useState(false);

    useEffect(() => {
        axios.get(API, { params: { id } }).then(res => {
            setCar(res.data);
            setMainImage(res.data.images?.[0]);
        });
    }, [id]);



if (!car || !mainImage) return <p className="text-center mt-5">Ucitavanje ...</p>

return (
    <>
    <div className="container mt-4">
        {/* Galerija */}
        <div className="col-md-7">
            <img src={IMG + mainImage.path} className="img-fluid rounded mb-3" style={{maxHeight: 420, objectFit: "cover", width: "100%", cursor:"zoom-in"}}
            onClick={() => setLightBoxOpen(true)}
            />
            <div className="d-flex gap-2">
                {car.images.map((img, i) => (
                    <img key={i} src={IMG + img} onClick={() => setMainImage(img)} className={`rounded border ${mainImage === img ? "border-primary border-2" : ""}`} style={{
                        width: 90,
                        height: 70,
                        objectFit: "cover",
                        cursor: "pointer"
                    }}/>
                ))}
            </div>
        </div>

        {/* Podaci */}

        <div className="col-md-5">
            <h3>{car.brand} {car.model}</h3>
            <h4 className="text-primary mb-3">{car.price} €</h4>

            <ul className="list-group mb-3">
                <li className="list-group-item">Godiste: {car.year}</li>
                <li className="list-group-item">Kilometraza: {car.km}</li>
                <li className="list-group-item">Gorivo: {car.fuel}</li>
                <li className="list-group-item">Menjac: {car.gearbox}</li>
                <li className="list-group-item">Grad: {car.city}</li>
            </ul>
            <p>{car.description}</p>
        </div>
    </div>

        {/* Lightbox  */}
        {lightBoxOpen && (
            <div className="position-fixed top-0 start-0 w-100 d-flex justify-content-center align-items-center" style={{background:"rgba(0,0,0,0.80)", zIndex:9999}} onClick={() => setLightBoxOpen(false)}>
                <img src={IMG + mainImage.path} style={{maxWidth:"90%",maxHeight:"90%", objectFit:"contain"}} onClick={e => e.stopPropagation()} />
                <button className="btn btn-light position-absolute top-0 end-0 m-3" onClick={() => setLightBoxOpen(false)}>
                    X
                </button>
            </div>
        )}
    </>
);
}