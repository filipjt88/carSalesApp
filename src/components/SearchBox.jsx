import { useState } from "react";
import { cars } from "../data/cars";


export default function SearchBox({ OnSearch }) {
    const brands = ["Sve marke", ...new Set(cars.map(c => c.brand))];
    const fuels   = ["Sva goriva", ... new Set(cars.map(c => c.fuel))];

    const [brand, setBrand]        = useState("Sve marke");
    const [model, setModel]        = useState("");
    const [priceTo, setPriceTo]    = useState("");
    const [yearsFrom, setYearFrom] = useState("");
    const [yearTo, setYearTo]      = useState("");
    const [fuel, setFuel]          = useState("Sva goriva");

    const models = brand === "Sve marke" ? [] : [...new Set(cars.filter(c => c.brand === brand).map(c => c.model))];

    const handleSubmit = (e) => {
        e.preventDefault();
        OnSearch({
            brand: brand !== "Sve marke" ? brand : "",
            model,
            fuel: fuel !== "Sva goriva" ? fuel : "",
            priceTo,
            yearsFrom,
            yearTo
        });
    };

    return (
        <div className="card shadow-sm mb-4">
            <div className="card-body">
                <form onSubmit={handleSubmit}>
                    <div className="row g-3">
                        <div className="col-md-3">
                            <label className="form-label">Marka</label>
                            <select className="form-select" value={brand} onChange={e => {
                                setBrand(e.target.value);
                                setModel("");
                            }}>
                                {brands.map(b => (
                                    <option key={b}>{b}</option>
                                ))}
                            </select>
                        </div>
                        <div className="col-md-3">
                            <label className="form-label">Model</label>
                            <select className="form-select" value={model} onChange={e => setModel(e.target.value)} disabled={brand === "Sve marke"}>
                                <option value="">Svi modeli</option>
                                {models.map(m => (
                                    <option key={m} value={m}>{m}</option>
                                ))}
                            </select>
                        </div>
                        <div className="col-md-2">
                            <label className="form-label">Godiste od</label>
                            <input type="number" className="form-control" value={yearsFrom} onChange={e => setYearFrom(e.target.value)} />   
                        </div>
                        <div className="col-md-3">
                            <label className="form-label">Gorivo</label>
                            <select className="form-select" value={fuel} onChange={e => setFuel(e.target.value)}>
                                {fuels.map(f => (
                                    <option key={f}>{f}</option>
                                ))}
                            </select>
                        </div>
                        <div className="col-md-2">
                            <label className="form-label">Godiste do</label>
                            <input type="number" className="form-control" value={yearTo} onChange={e => setYearTo(e.target.value)} />
                        </div>
                        <div className="col-md-3 d-flex align-items-end">
                            <button className="btn btn-primary w-100">
                                Pretrazi
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}   