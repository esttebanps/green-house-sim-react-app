import { NavLink, Outlet } from "react-router-dom"
import { useState } from "react";
import Header from "./Header";

const Page: React.FC = () => {

    const [position, setposition] = useState(0);

    const containerWidth = 500;
    const barWidth = 250;
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
            <Header
                text="Welcome to"
                subText="Greenhouse Sim"
                subtitle="Here you can create and care for your own virtual plant"
            />
            <ul className="menu">
                <div className="barra" style={{ left: `${position}px`, position: "absolute" }}></div>
                <NavLink to="name" className={({ isActive }) => isActive ? "link active" : "link"} onClick={() => handlePosition("left")}>1. Create name</NavLink>
                <NavLink to="type" className="link" onClick={() => handlePosition("rigth")}>2. Select plant</NavLink>
            </ul>
            <Outlet />
        </>
    )
}

export default Page;