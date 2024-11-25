import React from "react";
import plant from "../assets/plant.svg";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../state/store";


const PlantName: React.FC = () => {
    const [name, setName] = React.useState("");
    const dispatch: AppDispatch = useDispatch();
    const statePlant = useSelector((state: RootState) => state.plant);


    const addPlantName = (name: string) => {
        dispatch(
            {
                type: "ADD_PLANT_NAME",
                payload: name
            }
        );
    }

    return (

        <main className="plant-name">
            <div className="form">
                <input
                    type="text"
                    placeholder="write your plant name..."
                    onChange={(e) => setName(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            addPlantName(name);
                        }
                    }}
                />
            </div>
            <div>
                <img src={plant} alt="plant" />
                <p className="name">Hi, my name is <span>{statePlant.plantName || "_____"} !</span></p>
            </div>
        </main>

    )
};

export default PlantName;