import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import Header from "./components/Header";
import Home from "./components/pages/Home";
import CreateCar from "./components/pages/CreateCar";
import CarDetails from "./components/pages/CarDetails";

export default function App() {
  return (
     <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars/:id" element={<CarDetails/>} />
        <Route path="/create-car" element={<CreateCar/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      </BrowserRouter>
  );
}