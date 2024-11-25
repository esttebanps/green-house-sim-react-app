import { useDispatch } from "react-redux";
import { NavLink, Outlet } from "react-router-dom";
import { AppDispatch } from "../state/store";

const PlantType: React.FC = () => {
    const dispatch: AppDispatch = useDispatch();

    return (
        <>
            <ul className="menu-plant">
                <li>
                    <NavLink
                        to="succulent"
                        onClick={() => dispatch({ type: "ADD_PLANT_TYPE", payload: "succulent" })}
                        className={({ isActive }) => isActive ? "item active-plant" : "item"}
                    >
                        Succulent
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="cactus"
                        onClick={() => dispatch({ type: "ADD_PLANT_TYPE", payload: "cactus" })}
                        className={({ isActive }) => isActive ? "item active-plant" : "item"}
                    >
                        Cactus
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="bonsai"
                        onClick={() => dispatch({ type: "ADD_PLANT_TYPE", payload: "bonsai" })}
                        className={({ isActive }) => isActive ? "item active-plant" : "item"}
                    >
                        Bonsai
                    </NavLink>
                </li>
            </ul>
            <Outlet />
        </>
    )
}

export default PlantType;