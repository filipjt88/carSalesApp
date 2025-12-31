import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const API = "http://localhost/carSalaesApp/backend/api/car.php";
const IMG = "http://localhost/carSalesApp/backend/uploads/";

export default function CarDetails() {
    const { id } = useParams();
    const [car, setCar] = useState(null);
    const [mainImage, setMainImage] = useState("");

    useEffect(() => {
        axios.get(API, { params: { id } }).then(res => {
            setCar(res.data);
            setMainImage(res.data.images?.[0]);
        });
    }, [id]);


if (!car) return <p className="text-center mt-5">Ucitavanje ...</p>

return (
    <div className="container mt-4">
        {/* Galerija */}
        <div className="col-md-7">
            <img src={IMG + mainImage} className="img-fluid rounded mb-3" style={{maxHeight: 420, objectFit: "cover", width: "100%"}} />
            <div className="d-flex gap-2">
                {car.images.map((img, i) => (
                    <img key={i} src={IMG + img} onClick={() => setMainImage(img)} className={`rounded border ${mainImage === img ? "border-primary" : ""}`} style={{
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
            <h4 className="text-primary mb-3">{car.price}  €</h4>

            <ul className="list-group mb-3">
                
            </ul>
        </div>

    </div>
)
}