import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import Header from "./components/Header";
import Home from "./components/pages/Home";
// import CarDetails from "./components/pages/CarDetails";

export default function App() {
  return (
     <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}