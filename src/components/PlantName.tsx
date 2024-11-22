import React from "react";
import plant from "../assets/plant.svg";
import right from "../assets/rIcon.svg";
import { Link } from "react-router-dom";

const PlantName: React.FC = () => {
    return (

        <main className="plant-name">
            <div className="form">
                <input type="text" placeholder="write your plant name..." />
                <Link to="type">
                    <button className="btn-2">
                        <img src={right} alt="" />
                    </button>
                </Link>
            </div>
            <div>
                <img src={plant} alt="plant" />
                <p className="name">Hi, my name is <span>planty</span></p>
            </div>
        </main>

    )
};

export default PlantName;