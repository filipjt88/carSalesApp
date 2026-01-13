import { useState } from "react";

export default function SearchBox({ cars = [], OnSearch }) {

    const brands  = ["Sve marke", ...new Set(cars.map(c => c.brand))];
    const fuels   = ["Gorivo", ...new Set(cars.map(c => c.fuel))];

    const [brand, setBrand]        = useState("Sve marke");
    const [model, setModel]        = useState("");
    const [priceTo, setPriceTo]    = useState("");
    const [yearsFrom, setYearFrom] = useState("");
    const [yearTo, setYearTo]      = useState("");
    const [fuel, setFuel]          = useState("Gorivo");

    const models = brand === "Sve marke" ? [] : [...new Set(cars.filter(c => c.brand === brand).map(c => c.model))];

    const submit = (e) => {
        e.preventDefault();
        OnSearch({
            brand: brand !== "Sve marke" ? brand : "",
            model,
            fuel: fuel !== "Gorivo" ? fuel : "",
            priceTo,
            yearsFrom,
            yearTo
        });
    };

    return (
        <div className="card shadow-sm mb-4">
            <div className="card-body">
                {/* Submit form */}
                <form onSubmit={submit}>
                    <div className="row g-3">
                        <div className="col-md-3">
                            <label className="form-label">Marka</label>
                            <select className="form-select" value={brand} onChange={e => {
                                setBrand(e.target.value);
                                setModel("");
                            }}>
                                {brands.map(b => (
                                    <option key={b} value={b}>{b}</option>
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
                        <div className="col-md-2">
                            <label className="form-label">Godiste do</label>
                            <input type="number" className="form-control" value={yearTo} onChange={e => setYearTo(e.target.value)} />
                        </div>
                        <div className="col-md-2">
                            <label className="form-label">Cena do</label>
                            <input type="number" className="form-control" value={priceTo} onChange={e => setPriceTo(e.target.value)} />
                        </div>
                        <div className="col-md-3">
                            <label className="form-label">Gorivo</label>
                            <select className="form-select" value={fuel} onChange={e => setFuel(e.target.value)}>
                                {fuels.map(f => (
                                    <option key={f} value={f}>{f}</option>
                                ))}
                            </select>
                        </div>
                        <div className="col-md-3 d-flex align-items-end">
                            <button className="btn btn-primary w-100">Pretrazi</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}   