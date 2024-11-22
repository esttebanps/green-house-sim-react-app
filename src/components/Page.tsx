import { Link, NavLink, Outlet } from "react-router-dom"
import Header from "./Header"
import { useState } from "react";

const Page: React.FC = () => {

    const [position, setposition] = useState(0);

    const containerWidth = 500; // Ancho del contenedor
    const barWidth = 250; // Ancho de la barra
    const maxPosition = containerWidth - barWidth;

    const handlePosition = (move: string) => {
        if (move === "rigth") {
            setposition((prev) => {
                const newPosition = prev + 250;
                return newPosition <= maxPosition ? newPosition : prev;
            });
        } else {
            setposition((prev) => {
                const newPosition = prev - 250;
                return newPosition >= 0 ? newPosition : prev;
            });
        }
    }

    return (
        <>
            <ul className="menu">
                <div className="barra" style={{ left: `${position}px`, position: "absolute" }}></div>
                <NavLink to="name" className={({ isActive }) => isActive ? "link active" : "link"} onClick={() => handlePosition("left")}>Create name</NavLink>
                <NavLink to="type" className="link" onClick={() => handlePosition("rigth")}>Select plant</NavLink>
            </ul>
            <Outlet />
        </>
    )
}

export default Page;