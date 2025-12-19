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

    
}   